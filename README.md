NOTE: I was unsure wether or not the README had to be in English or not, just in case I am writing in English.

Github Link:
https://github.com/merisir573/assignment2final

Video Link:
 (NOTE: The video is send only, if it doesn't work, please send an E-Mail so I can change it to public)

---My Design---

My design is relatively straightforward, we have three microservices that we use the gateway to send messages to, these APIs are connected to eachother via Docker and also use a common storage within Docker.

---Assumptions Made---

I am unsure as to wether or not I should've created different microservices rather than somehow implement the gateway directly into the midterm project. Ultimately I went with making something similar to the example provided in the PDF file.

Aside from that no extra assumptions were made that come to mind.

---Issues I Encountered---

One huge assumption I originally made that ultimately lead me to remaking the entire project was assuming that we had to deploy our Midterm Project via a gateway as opposed to the API Endpoints. This was definitely the biggest error and problem I faced during the duration of the project.

Other than that, I originally tried to not divide the original midterm project into multiple microservices, that however proved to be a huge challenge resulting in me giving up and creating seperate microservices.
