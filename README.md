lessons3.2-router demo

// видаляємо АРР.із main.tsx і ставимо RouterProvider router= який прий має зміну {routes}
ми її виносимо робимо константу const routes = createBrowserRouter([
// і в ній визначаємо шляхи.до 1 створюємо попку Layout і tsx файл/потім для цього же будемо 
створювати меню ( то створюємо папку компоненти->меню->і в ньому ств. файл tsx. Menu; і до нього scc.файл
і його ми додаємо до Menu.tsx)

Menu.tsx будую структуру <ul><li></li>, як прописали шляхи, після ми імпортуємо в файлі Menu.tsx <Layout/>, 
і після файлі Layout імпортуємо <Menu/>

в Menu.tsx формуємо обробники для дочірніх урл children прописали, після ми в Layout.tsx прописуємо  <Outlet/>
(ця інформація буде відображатися)

Для того щоб відображалася інфю на сторінках users і posts формуємо окрему дерикторію Pages і в ній файли і 
після ми їх провадимо в Menu.tsx

хочемо щось показати на сторінці UsersPage то на стр.UsersPage.tsx показуємо логічний розподіл( тобто UsersPage це 
там де відображаються компоненти які нам необхідні відобразити картину ) тому формуємо компонент Users і
в ньому файл UsersComponent

Потім створюємо папку модель с IUser де ми потім заходимо на сайт https://jsonplaceholder.typicode.com/users 
і там копіюємо і вставляємо через ТС2 всі моделі які відносяться  до IUser в окремі файли і потім ми імпортуємо його

Після прописуємо фю.useEffect і в ній ми прописали і в return прописуємо ітерацію і там появляється user на 
якого ми силаємося то также робимо компонент user, а вньому файл UserComponent де все прописуємо по поводу item
і мпортуємо UserComponent

далі вдосконалюємо і формуємо дерикторію services faill api.service де формуємо всі фції в роботі з юзерами

є проблема з ключами'

потім в файлі fpp.service  додаємо id  і електроний адрс створюємо зміну 

потім робимо дерикторію в якій буде знаходитися окремо константи  а в них  юерели де будуть лежати урла до 
юзерів і до постів

А потім наводили парядок в файлі app.service

знову в файлі наводимо порядок то шляхи з main.tsx переносимо в дерикторію router.tsx там налаштовуємо
і знову вертаємось до main.tsx і там імпортуємо


все розподілено правильно.

3/3= щоб перейти з users користувача на його інформацію і щоб її було видно під низом,клікати на кнопку і замінявся даже адрес.

3/4 додавати пости тобто коли ми  натискаємо на кнопку go to details то буде відображатися пости а на ім'я електрона адреса  