<?php

class SearchKeyWorld
{
	private $summaries;
	private $keywords;

	public function __construct(array $summaries, array $keywords)
	{
		$this->summaries = $summaries;
		$this->keywords = $keywords;
	}

	/**
	 * @return array
	 */
	private function getSummaries(): array
	{
		return $this->summaries;
	}

	/**
	 * @return array
	 */
	private function getKeywords(): array
	{
		return $this->keywords;
	}

	/**
	 * @param array $summaries
	 */
	public function setSummaries(array $summaries): void
	{
		$this->summaries = $summaries;
	}

	/**
	 * @param array $keywords
	 */
	public function setKeywords(array $keywords): void
	{
		$this->keywords = $keywords;
	}

	function keywords()
	{
		$summaries = $this->getSummaries();
		$keywords = $this->getKeywords();

		foreach ($summaries as $link => $resume) {
			for ($i = 0; $i < count($keywords); $i++) {

				$search = $keywords[$i];
				$replace = '<span style="font-size: 200%; font-family: monospace; background: lightgreen">' . $search . '</span>';
				if ($i === 0) {
					$subject = $resume;
				} else {
					$subject = $query;
				}

				$query = str_ireplace($search, $replace, $subject, $count);

				if ($count > 0) {
					$summaries[$link] = $query;
					$keysFound[] = $search;
				}
			}
		}
		return $summaries;
	}
}