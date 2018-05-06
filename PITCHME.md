## Compare Routing

#### <span class="speaker">ichi</span>

---

@title[Introduction]

### Introduction

![routing](assets/images/routing.png)

---

![routing](assets/images/routing2.png)

---

* Routing Table
* Rendering
  * server, client
* Navigation Actions

+++?code=codes/next-routing-table.js

@title[Next.js]

### Next.js - Routing Table

@[3-4] defined routing

+++?code=codes/next-render-server.js

### Next.js - Server

@[2] import routing table
@[6-10] listen with express

+++?code=codes/next-render-client.js

### Next.js - Client

@[2] use Link defined from routing table
@[4-8] render the Component

+++?code=codes/next-next-actions.js

### Next.js - Navigation Actions

@[2] import Router from routing table
@[6-9] use [router api](https://github.com/fridays/next-routes#router-example)
@[12] history.back or use Link Componet

+++?code=codes/rails-routing-table.rb

@title[Rails]

### Rails - routing table

@[4-11] define routes, will call action of controller

+++?code=codes/rails-controller.rb

### Rails - Controller and Actions

@[17-40] use destroy as an example
@[21] define format
@[25] go to users#index and change url
@[28] render users#edit but not change url

+++?code=codes/rails-link-to.html.erb

### Rails - helpers

@[1-15] use button_to
@[17-27] use link_to

---

### Experimental vs. React-Navigation

+++

@title[React-Navigation-Experimental]

### React-Navigation-Experimental

proxy image

+++

redux

---

@title[React-Navigation]

### React-Navigation

image

+++

redux

+++

#### React-Navigation-Experimental vs. React-Navigation

proxy image compare

navigate function

---

### React-Router v3 vs. v4

+++

@title[React-Router v3]

### React-Router v3

routing table（routing component）

+++

Link Componet

use browser history

---

@title[React-Router v4]

### React-Router v4

routing table

- routing component

- routing config

+++

Link Componet

use browser history

+++

#### React-Router v3 vs. v4

routing table

server

client


---

###  React-Router vs. React-Navigation

+++

#### React-Router vs. React-Navigation

all Component vs. data trigger

---

@title[React-Native-Web]

### React-Native-Web

* How to use browser history with react-navigation

* location

+++

#### React-Router v4 vs. React-Navigation

routing config

redux - data flow

+++

* wrapper browser history for react-navigation？

* browser go back vs. customize go back

* code splitting？

