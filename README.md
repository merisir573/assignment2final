NOTE: I was unsure whether or not the README had to be in English or not, just in case I am writing in English.

NOTE 2: I don't believe you need to do this for the code to work, but in case you look into the code and see dependency errors or it does not work, please do the following steps:

cd FOLDERNAME

npm install

repeat for all the folders. This is caused by node_modules not being on Github as it's in .gitignore and trying to manually add the folder yields no results due to the sheer amount of files. Sorry for the inconvenience!


Github Link:
https://github.com/merisir573/assignment2final

Video Link:
https://youtu.be/AtAeacy9-9k (NOTE: The video is send only, if it doesn't work, please send an E-Mail so I can change it to public)

---My Design---

My design is relatively straightforward, we have three microservices that we use the gateway to send messages to, these APIs are connected to each other via Docker and also use a common storage within Docker.

---Assumptions Made---

I am unsure as to whether or not I should've created different microservices rather than somehow implement the gateway directly into the midterm project. Ultimately I went with making something similar to the example provided in the PDF file.

Aside from that no extra assumptions were made that come to mind.

---Issues I Encountered---

One huge assumption I originally made that ultimately lead me to remaking the entire project was assuming that we had to deploy our Midterm Project via a gateway as opposed to the API Endpoints. This was definitely the biggest error and problem I faced during the duration of the project.

Other than that, I originally tried to not divide the original midterm project into multiple microservices, that however proved to be a huge challenge resulting in me giving up and creating seperate microservices.
