import telebot
import config
import requests
from telebot import types
from geopy.geocoders import Nominatim, ArcGIS
from analyze import countDistance
import res.strings as S

def txt_reader(file_path):
    result = []
    f = open(file_path, 'r', encoding='utf-8')
    for line in f:
        result.append(line)
    return result

def changeAnswerType(n):
    global typeAns
    print(n)
    if n == 1:
        typeAns = 1 # Question 1
    if n == 2:
        typeAns = 2 # Question 2
    if n == 3:
        typeAns = 3 # Question 3
    if n == 0:
        typeAns = 0 #  start Question
    if n == 4:
        typeAns = 4
    return

questions = txt_reader('./res/quest/questions.txt')

bot = telebot.TeleBot(config.token)

button_phone     = types.KeyboardButton(text="Отправить телефон", request_contact=True)
btn_return       = types.KeyboardButton(text=S.GO_TO_MAIN_MENU)
button_geo       = types.KeyboardButton(text=S.SEND_LOCATION, request_location=True)


keyboard1        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard2        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard3        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard4        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard5        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard6        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard7        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard8        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard_geo     = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard_tel     = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard_return  = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
keyboard11        = telebot.types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)

keyboard_geo.add(button_geo)
keyboard_geo.add(btn_return)

keyboard_tel.add(button_phone)
keyboard_tel.add(btn_return)

keyboard1.row(S.YES, S.NO)
keyboard1.row(S.GO_TO_MAIN_MENU)

keyboard11.row(S.YES, S.NO, 'Планирую')
keyboard11.row(S.GO_TO_MAIN_MENU)

keyboard2.row('18-20', '21-26', '27-30')
keyboard2.row(S.GO_TO_MAIN_MENU)

keyboard3.row('Мужской', 'Женский')
keyboard3.add(btn_return)

keyboard4.row('IT', 'Web design')
keyboard4.row('Экономика', 'Политика', 'Аналитика')

keyboard5.row('Online', 'Offline')

keyboard6.row('Typescript', 'Python', 'Lisp')
keyboard6.row('C/C++', 'Go', 'Другой')

keyboard7.row('Elementary', 'Intermediate')
keyboard7.row('Upper intermediate', 'Advanced', 'Proficiency')


keyboard_return.add(btn_return)

@bot.message_handler(commands=['start'])
def start_message(message):
    print('Username: {}, name: {}'.format(message.chat.username, message.chat.first_name))
    string = 'Привет, {}, предлагаю пройти Вам опрос, согласны?'.format(message.chat.first_name)
    changeAnswerType(1)
    bot.send_message(message.chat.id, string, reply_markup=keyboard1)

def mess_end(message):
    string = 'Привет, {}, предлагаю пройти Вам опрос, согласны?'.format(message.chat.first_name)
    changeAnswerType(1)
    bot.send_message(message.chat.id, string, reply_markup=keyboard1)


@bot.message_handler(commands=['help'])
def show(message):
    bot.send_message(message.chat.id, S.MAIN_MENU, reply_markup=key)


@bot.message_handler(content_types=['text'])
def geophone(message):
    typeAns = 1
    summarize = 0
    def age(message):
        bot.send_message(message.chat.id, questions[0], reply_markup=keyboard2)
        bot.register_next_step_handler(message, sex)

    def sex(message):
        bot.send_message(message.chat.id, questions[1], reply_markup=keyboard3)
        bot.register_next_step_handler(message, first)

    def first(message):
        #if n == 1:
            bot.send_message(message.chat.id, questions[2], reply_markup=keyboard1)
            changeAnswerType(2)
            bot.register_next_step_handler(message, second)

    def second(message):
        #if n == 2: 
            bot.send_message(message.chat.id, questions[3], reply_markup=keyboard11)
            changeAnswerType(3)
            bot.register_next_step_handler(message, sphere)

    def sphere(message):
        bot.send_message(message.chat.id, questions[4], reply_markup=keyboard4)
        bot.register_next_step_handler(message, third)

    def third(message):
        #if n == 3: 
            bot.send_message(message.chat.id, questions[5], reply_markup=keyboard1)
            changeAnswerType(4)
            bot.register_next_step_handler(message, employer)

    def employer(message):
        bot.send_message(message.chat.id, questions[6], reply_markup=keyboard5)
        changeAnswerType(0)
        bot.register_next_step_handler(message, championship)

    def championship(message):
        bot.send_message(message.chat.id, questions[7], reply_markup=keyboard1)
        bot.register_next_step_handler(message, progLang)

    def progLang(message):
        bot.send_message(message.chat.id, questions[8], reply_markup=keyboard6)
        bot.register_next_step_handler(message, engLang)

    def engLang(message):
        bot.send_message(message.chat.id, questions[9], reply_markup=keyboard1)
        bot.register_next_step_handler(message, level)

    def engLang(message):
        bot.send_message(message.chat.id, questions[10], reply_markup=keyboard7)
        bot.register_next_step_handler(message, invite)

    def invite(message):
            string = 'Дорогой кандидат, приглашаем тебя на очное собеседование в нашем офисе.'
            string += 'Пришли свое местоположение, я скажу, насколько далеко ты от ближайшего офиса'
            bot.send_message(message.chat.id, string, reply_markup=keyboard_geo)
            

    if (message.text.lower() == 'да'):
        if typeAns == 1:
            age(message)
    elif message.text.lower() == S.GO_TO_MAIN_MENU.lower():
        start_message(message)

@bot.message_handler(content_types=['contact'])
def contact(message):
    print(message.contact)
    if message.contact is not None:
        doc = open('user_tel.txt', 'w')
        doc.write("{name}, {telephone}\n".format(name=message.contact.first_name, telephone=message.contact.phone_number))
        doc.close()
        string = "Благодарим за обратную связь!"
        bot.send_message(message.chat.id, string)
    

@bot.message_handler(content_types=['location'])
def getLocation(message):
    Fails = []
    if message.location is not None:
        bot.send_message(message.chat.id, S.COUNTING_DISTANCE)
        km = countDistance((message.location.latitude, message.location.longitude))
        distance = km
        string = "Ближайший офис находится в %d километров от тебя" % distance
        bot.send_message(message.chat.id, string)
        bot.send_message(message.chat.id, 'Поделитесь с нами Вашим номером телефона', reply_markup=keyboard_tel)

bot.polling()
