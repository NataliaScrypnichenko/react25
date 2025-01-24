коли ми аутентифікуєтесь то отримоємо такі данні
{
"id": 1,
"username": "emilys",
"email": "emily.johnson@x.dummyjson.com",
"firstName": "Emily",
"lastName": "Johnson",
"gender": "female",
"image": "https://dummyjson.com/icon/emilys/128",
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // refreshToken in response and cookies
}
1.він має певну модель даних і ми їх створюємо в файлі IUsersWithTokens

Token-це ключ (тобто ми на сервыр запускаэмо свій логін і пароль а із сервера отримаємо назад токін а цим токіном ми знову звертаємося до
серверу а він далі дає нам доступ до данних)

2 робимо рефреш модель даних TokenPair
3.робимо модель  IProduct
4.формуємо routes там прописуємо шляхи і створюємо <MainLayout/,<HomePage/>,<LoginPage/>,<AuthResourcesPage/>файли заразом
5. main.tsx прописуємо render(<RouterProvider router={routes} />
6. запустити проєкт
7. створюємо components=>menu
8. впровадимо на <MainLayout/>=>
9. LoginPage прописуємо там але потрібно робити через компоненти і де логін вставляємо зкопіроване з дейсон юзер=> username:"emilys"
 "password":"emilyspass",expiresInMins:1
10. робимо файл api.service.ts 
11. потім переходимо на AuthResourcesPage; і робимо процес щоб отримати продукти із аутиф.=>  api.service.ts =>IProductsResponseModelType 
і створюемо модель IProductsResponseModelType



ПОТРІБНО СТВОРЮВАТИ ВІД ПРОБЛЕМИ ОПИСУЄШ А ПОТІМ СТВОРЮЄш тобто вирішуєш



