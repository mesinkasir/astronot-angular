import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from '../component/blog';

@Injectable({
  providedIn: 'root',
})
export class Post implements InMemoryDbService {
  createDb() {
    const blogs = [
      { 
  id: 0, 
  name: 'Pre Install' ,
  description: 'Requipment for first installation' ,
  cover: 'https://astronot.axcora.com/img/ASTRONOTCSS.jpg' ,
  content: 'For first installation you need to download node or npm so download node first from https://nodejs.org/en/download/ then install on your devices, after node installation success , now you need to install angular globaly on your devices just run npm install -g @angular/cli'
  },
  { id: 1, 
   name: 'Installation' ,
   description: 'How to install astronot angular starter' ,
   cover: 'https://astronot.axcora.com/img/install.jpg' ,
   content: 'After you have installing node and angular globaly on your devices, now we ready to install astronot angular, for first download source code on our repo https://github.com/mesinkasir/astronot-angular , extract all file folder and open terminal run npm install for install astronot angular.'
   },
  { id: 2,
  name: 'Start' ,
  description: 'Get Start with astronot angular' ,
  cover: 'https://astronot.axcora.com/img/starter.jpg' ,
  content: 'After installation source code now you can run this web app , open terminal then run ng serve -o , open web browser visit on localhost:4200 , and congratulations now you successfully to run your astronot angular web app.'
  },
  { id: 3,
  name: 'Configuration' ,
  description: 'Setting and configuration for astronot angular SEO' ,
  cover: 'https://astronot.axcora.com/img/code.jpg' ,
  content: 'Now we need to configuration and setting the SEO your website, open source code file project then open index.html file, and you need to change title, and other description meta tag change all with your title, description and meta tag about your website.'
  },
  { id: 4,
    name: 'Content' ,
    description: 'How to create article blog content' ,
    cover: 'https://astronot.axcora.com/img/form.jpg' ,
    content: 'Now you can easy for insert or create and edit content article blog post, you can visit on data folder then open post.ts file and create new or update content in here , then save it for update your content blog post.'
    },  
  { id: 5,
  name: 'Layout' ,
  description: 'Template Layout design astronot angular' ,
  cover: 'https://astronot.axcora.com/img/LAYOUT.jpg' ,
  content: 'For layout design you can visit on view folder then you can select template display view what you needed to change code, so you can edit code in here for layout, after change template you can save it for update your themes design.'
  },
  { id: 6,
  name: 'Deploy' ,
  description: 'Run your astronot angular online on hosting' ,
  cover: 'https://astronot.axcora.com/img/webapp.jpg' ,
  content: 'After you have finished astronot angular project and you need to deploy on static hosting , so for first you need to update your project on production mode, open terminal and run ng build, then you can push dist folder file on static hosting, you can use firebase, vercel, heroku, cloudflare , surge and more.. For fast build production mode, you just need to register and create account on github then fork our repo on github https://github.com/mesinkasir/astronot-angular , and register create account usign gihtub account on static host like vercel, heroku, and create new project , then select your fork repo and deploy it... and congratulations your astronot angular web app is online now.'
  },
  { id: 7,
  name: 'Coffee' ,
  description: 'Buy a coffee for astronot angular developer' ,
  cover: 'https://astronot.axcora.com/img/coffee.jpg' ,
  content: 'Contibution with donation for support our team dev make other source code for the world. Buy me a coffee ☕️ with moneygram or western union on our local bank account : BANK CENTRAL ASIA , ACCOUNT NO : 0181884109 , ACCOUNT NAME : SUCI CHANIFAH ,   IBAN/SWIFT CODE : CENAIDJA' ,   },
  { id: 8,
  name: 'Contact' ,
  description: 'Contact astronot angular developer' ,
  cover: 'https://astronot.axcora.com/img/contact.jpg' ,
  content: 'Hey if you need help or built modern website single page app with astronot angular custom design so you can contact our team, via whatsapp : +6285646104747 or email : axcora@gmail.com'
  }
    ];
    return {blogs};
  }

  genId(blogs: Blog[]): number {
    return blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 11;
  }
}