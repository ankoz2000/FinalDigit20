<?php
require_once __DIR__ . '/searchKeyWords.php';

function setCache($content, $cacheId)
{
	if ($content == '') {
		return;
	}
	$fileName = 'cash/' . md5($cacheId);
	if (!file_exists('cash')) {
		mkdir('cash');
	}
	$f = fopen($fileName, 'w+');
	fwrite($f, $content);
	fclose($f);
}

function getCache($cacheId, $cashExpired = true, &$fileName = '')
{
	if (!$cashExpired) {
		return;
	}
	$fileName = 'cash/' . md5($cacheId);
	if (!file_exists($fileName)) {
		return false;
	}
	$time = time() - filemtime($fileName);
	if ($time > $cashExpired) {
		return false;
	}
	return file_get_contents($fileName);
}

function curlLoad($url, $cash = 0)
{
	$cacheId = $url;
	if ($content = getCache($cacheId, $cash)) {
		return $content;
	}

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_TIMEOUT, 15);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	$content = curl_exec($ch);
	curl_close($ch);

	setCache($content, $cacheId);
	return $content;
}


function arrayResume($content)
{
	$pattern = '~<div data-qa="resume-serp__results-search">.+<div class="bloko-gap bloko-gap_top">~isU';
	preg_match($pattern, $content, $matches);
	$innerContent = $matches[0];
	preg_match_all('~href="(.*)">(.*)</a>~isU', $innerContent, $links);

	$viewLink = $links[1];//ссылка на резюме
	$viewName = $links[2];//название
	$summaries = [];

	for ($i = 0; $i < count($viewLink); $i++) {
		echo '<a href="https://hh.ru' . $viewLink[$i] . '">' . $viewName[$i] . '</a><br>'; // LIINKS
		//парсинг резюме по ссылкам
		$summaries_links = curlLoad('https://spb.hh.ru' . $viewLink[$i], $cash = 3600);
		$pattern = '~<div class="resume-applicant">(?P<resume>.*)?</div>\s*</div>\s*</div>\s*</div></div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>~isU';
		preg_match($pattern, $summaries_links, $matches);
		$summaries['https://spb.hh.ru' . $viewLink[$i]] = $matches['resume'];
	}

	return $summaries;
}

//точка входа
$url = 'https://spb.hh.ru/search/resume?exp_period=all_time&logic=normal&pos=full_text&fromSearchLine=true&schedule=fullDay&clusters=True&area=2&order_by=relevance&no_magic=False&ored_clusters=True&st=resumeSearch&text=java';
$keywords = ['SQL', 'Java', 'MySQL', 'REST'];

//получаем весь контент страницы
$content = curlLoad($url, $cash = 3600);
//получаем БД резюме по отдельности в массиве
$resumeArray = arrayResume($content);

$searchKeyWorld = new SearchKeyWorld($resumeArray,$keywords);
$key = $searchKeyWorld->keywords();

print_r($key);
