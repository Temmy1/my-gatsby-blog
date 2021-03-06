---
title: 'Продолжаю'
date: "2019-12-06"
---

Двенадцатого числа я доработал настройку *Webpack* и сделал так, чтобы стили шли отдельным файлом. 


### 13 ноября

Вчера я прочёл документацию *React*. Сегодня перехожу к *Redux* и пора бы уже начать! Приложение по сути несложное, сложность для меня возникает в настройке этого всего. Много времени уходит на обмозгование документации и понятие того, что это и как это делается. Что *Redux*, что *Material-UI* вызывают больше вопросов. Вставил я `select`, посмотрел пример, а там куча всего что мне непонятно. И как прикрутить redux ко всему этому. В общем, у меня сейчас полнейшая растерянность! 😕😕😕
Ещё и работа по фрилансу отвлекает, надо скорее её завершить и полностью сосредоточиться на выполнении заданий обучения. 

Как бороться с этим. Окончательно завязнув в этом, я взял ручку и листик и попытался разобраться в том, что мне надо делать, как, что и с чем связано. Далеко я не ушёл, но мои первоначальные действия вырисовались.


Как и в прошлой статье оставляю ссылку на то, что мне помогало:

- [Обо всём, что связано с React](https://github.com/sudheerj/reactjs-interview-questions#what-is-redux)
- [Документация Redux](https://redux.js.org/introduction/getting-started)
- [React-Redux](https://react-redux.js.org/)
- [Redux naming convention](https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/)
- [Использование Typescript с Redux](https://redux.js.org/recipes/usage-with-typescript)
- [Шпаргалка typescript и React](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)
- [Обощения в typescript](https://metanit.com/web/typescript/3.5.php)
- [React & Redux in TypeScript - Complete Guide](https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/README_SOURCE.md)

### 14 ноября

Если не можешь чего-то понять - начни с самого начала. Я взялся за документацию *Redux*. Первая ссылка подразумевает то, что ты уже что-то читал и не до конца понял, документация у меня в подкорке, поэтому надо освежить воспоминания о ней в памяти. А делая наобум, даже и подглядывая в предыдущие проекты, в общем неверно это, потому и завис, потому и растерялся. Я планирую прочесть, понять и когда станет всё на свои места, дело останется за малым. Написать весь этот код, сделать состояния (а их тут не так уж и много) и, потом, написать несколько компонентов, придумать, как это будет выглядеть, сделать и сдать работу. 

Вообще, просмотр различных роликов по теме дает минимальное представление о том, что происходит и, если не делать этого из-за дня в день, то посмотрев на тот код, который был написан месяц назад ничего не будет ясно. Только прочтя базовый гайд по *Redux* я понял, что я писал какое-то время назад. На очереди документация *React-Redux* и глубокий уровень *Redux*. Очень много времени уходит на это всё, но внутри всё спокойно и понятно. 

### 25 ноября

Нееееет!!! 😱😱😱 11 дней!!! Но всё просто объяснить: на выходных у меня физически не выходит (-4 дня), с 15 числа я делал одну работу, которая у меня крайне затянулась и разобрался я с ней только 21 ноября (-5 дней), а в ту пятницу я уже изучал продвинутый уровень - на его основе записал примерные функции (на листике 📝), ну и последний день - это сегодня. Это удручает, конечно. Закатаем рукава - надо закончить - эта неделя край, сколько можно, стыдно перед собой.

14 числа я писал, что всё спокойно, но сейчас - не так, чем больше я читаю, тем больше я не понимаю. 

### 27 ноября 

Пора бы уже начать писать сам код приложения. Суть того, как это надо сделать с *Redux* мне ясна, если что, я знаю, где подглядеть, последняя проблема, которую мне надо решить - это понять как писать на *Typescript* в *React*. Сслылку на статью, я указывал в прошлом посте, посвященном написанию этого приложения. 
Ранее я заметил, что код мне не совсем ясен, поэтому пришлось обратиться к описанию языка, проблема заключалась в работе с типами данных. Ответ я нашел [тут](https://metanit.com/web/typescript/2.4.php). Читая документацию *Redux* по работе с *Typescript* я обнаружил непонятные мне вещи, похоже, что это были *обобщения*.

### 28 ноября

Вчера - сегодня смотрел [видео](https://www.youtube.com/watch?v=VXvXJEAMqjU), как делается приложение. Не все инструменты подходили, но что-то полезное нашел. Сейчас начинаю читать один файл с многообещающим названием "React & Redux in TypeScript - Complete Guide". Если он мне не поможет, то я дебил.😕 После него, в любом случае, начинаю ваять.

### 2 декабря

Ну, я дебил, это раз. Но делать я, всё равно, начинаю - это два. В помощь мне [видео](https://www.youtube.com/watch?v=dZZxegovK9Q). 

Буду прям по пунктам. 

- Какие типы мне нужны в этом приложении? 
- Как их реализовать, используя typescript с его интерфейсами (мне пока трудно понять суть)

### 4 декабря

Вчера дело, наконец, сдвинулось с мертвой точки. В дополнение к видео от второго декабря я посмотрел ещё несколько, посмотрел на репозитории, которые были представлены в этих видео, изучил другие варианты. После того, как я запутался окончательно (мой суетливый ум пытался найти решение для проблемы, которую я не понимал.) пришлось, грубо говоря, начать сначала. 
Вновь была открыта документация [Redux](https://redux.js.org/recipes/usage-with-typescript), конкретно эта ссылка и я начал планомерно делать по примеру, который показан в ней. В конце её есть несколько ссылок, которые сегодня я намерен прочесть и после разобраться с ещё двумя блоками информации в моём приложении, которые завязаны на обращении к удаленным серверам. 

### 6 декабря

Небольшой отчёт. Вчера я вставил себе взбучку за суету и споконо стал делать. Настроил все `action` и `reducers`, подключил *Redux devtools*. Чуть было опять не загубил всё дело, но всё вышло. Сейчас намерен немного поучить, а позже займусь внешним видом компонентов и останется только соединить эти компоненты и состояния, которые я наделал. 
