 зарегістріровалась на web.postman 
 потім + і пишемо адрес електроний і він показує що все як написан сайт, тобто якими командами,
 коли робимо запит то формуються хедри

щоб отримати дозвіл то потрібен постовий метод POST нажимаємо send  і він потім пише ,
і це говориться якщо я (ти)хочеш відати все сервісу, щоб він все перевірив (POST) то пише "message": "Username and password required",
що потрібно Username і password ми цу будемо вставляти в Body =>from-data=>(копіруємо із сайта https://dummyjson.com/docs/auth) 
    username: 'emilys', password: 'emilyspass',=>Send приходить інформація токіни = "accessToken"живе 60 хв.
"refreshToken"яким можна скористатися щоб можна було оновити цю парочку після того як головний токінг умре
  
потім мистворюємо + новий і водимо туди адрес 'https://dummyjson.com/auth/RESOURCE' і слово  RESOURCE міняємо на products тільки 
якщо ми аудитифіковані /потім зашли  https://dummyjson.com/auth/products і отримали повідомлення
"message": "Access Token is required" то заходимо Authorization=>Bearer token=>Token вносимо копіроване повідомлення з=>, 
із попереднього https://dummyjson.com/docs/auth) копіруємо "accessToken" текст.Отримаємо відповідь з продуктами 
тобто ми пробилися на захищену урлу


Можна через хедер зробити Authorization  пишемо Bearer вставляємо "accessToken" текст і потім Send і отримали продукти

Якщо ми робимо продовж години токі умирає, то ідемо на сайт (https://dummyjson.com/docs/auth)=>Auth=>Refresh tokens то копіруємо запит (https://dummyjson.com/auth/refresh)
і створюємо + новий вибираємо POST  але потрібно в Setting Включити Disable cookie jar і нажати Spend=>Body=>from-data=>всталяємо refreshToken 
із сайта (https://dummyjson.com/auth/refresh) потім копіруємо із auth/login => "refreshToken": => текст і вставляємо=> Send отримаємо
нову парочку токінів і він буде привязаний до користувача   

Ми можемо вносити через Body =>raw=>{                           => Spend=>JSON форматі 
                                     "username": 'emilys',
                                     "password": 'emilyspass'
                                      }

Якщо токін проходить срок то потрібно заново пере логінюватися.
Щоб уникнути цього моменту робимо 