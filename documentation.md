PC Geeks
Основна идея: 
Форум за дискусия и новини на компютърна тематика.

Секцията "The Discussion"  представлява безкрайна дискусия, в която всеки може да се включи, ако има акаунт - публикациите в тази секция не могат да бъдат изтривани или променяни с цел съхраняването на уместността на следващите такива. 
"News" секцията съдържа новините качени от всички потребители, налична е възможност за  създателите на новините да ги променят или трият.
myAccount - (достъпна за влезли потребители чрез "welcome ..."  бутона) показва всички качвания на потребител, позволява му да даде оценка на PC Geeks, както и да я промени; Възможност за изтриване на акаунта и на всички новини качени от потребителя.

Структура и съдържание на проекта:

core, shared и mini - разделение на компонентите в проекта на подпапки и модули носещи сходни  имена
core- Navbar, footer и компоненти, които потребителят може да достъпи от Navbar
shared -бутони и страници, намиращи се между Navbar-a и Footer-a(изключвайки тези, коит се достъпват от  Navbar), включително и страници, към които потребителят бива пренасочен при промяна на публикация
mini - child компоненти, използвани в core или shared
Папката interfaces - всички interfaces, които са използвани
Папката pipes- pipe, извличащ username от  email при user log in или register
Папката services- services с различни употреби - там се намират и  Route Guards



Допълнителен коментар:
 Firebase e  използван за back-end, използвани за икони от FontAwesome
Съдържанието на бранчовете recon, secondBranch, finalBranch съвпада със задължителните три commit-a  по условие. Финалната версия на проекта се намира в master branch-a (default). Преди отваряне на приложението в браузъра е нужно да се направи npm install.
