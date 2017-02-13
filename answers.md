Q: Notice anything new in our .gitignore? There are actually multiple .gitignore files in this project, can you find them all? 

A: We remember the .idea and .gradle being in the .gitignore from the previous lab. However, the nohup.out, yarn.error.log,
   and yarn.stdout.log seem to be new files. 
   
   The locations of the .gitignore files are as follows:
   
    lab-3-angular-2-and-spark-philipskye/.gitignore
    lab-3-angular-2-and-spark-philipskye/client/.gitignore
    lab-3-angular-2-and-spark-philipskye/server/.gitignore
    
Q: Note also that there are now multiple build.gradle files as well! Why is this? 

A: There are three build.gradle files in this project structure. They are as follows:

    lab-3-angular-2-and-spark-philipskye/build.gradle
    lab-3-angular-2-and-spark-philipskye/client/build.gradle
    lab-3-angular-2-and-spark-philipskye/server/build.gradle
    
   The reason for multiple build.gradle files is that each is associated with a respective module 
   (denoted by the little blue rectangle in the file hierarchy). For example, the top-level build.gradle references 
   the lower-level build.gradle files in the client and server directories. These lower-level build.gradle files handle 
   the build process for each respective directory. If you peek into these lower-level build.gradle files
   you will see that they have tasks for each function that they perform.
   
Q: What are a couple of these new tools? What do you think they do?
 
A: We have noticed that a new directory has been added that is named 'yarn'. We believe this directory (or new tool)
   is to help with dependency management. After a quick Google search we learned that Yarn downloads dependencies
   only one time and caches them within memory. This makes so you don't have to keep downloading dependencies
   over and over again. We also noticed something new that is named 'es6-shim'. It appears that this is something
   to do with Angular 2.

Q: How does the navbar work in this project? Is our SparkJava server the only thing doing routing? 

A: The navbar specifies 3 list items: Home, Kittens and Users. These list items are each given the property named 'routerLink'.
   This property is an Angular specific feature that uses the file named 'app.routes.ts' to route to the appropriate
   component for each navbar list item. For instance, this list item:
   
    <li><a [routerLink]="['/kittens']">Kittens</a></li>
    
   specifies a routerLink for '/kittens'. If we look in the file name app.routes.ts we see:
    
    { path: 'kittens', component: KittensComponent }
    
   which says that when the path 'kittens' is used the Client server must route to the KittensComponent.
   If we look in the file named kittens.component.ts we will see the following line:
   
    export class KittensComponent {}
    
   which is the name of the component that the app.routes.ts file routes '/kittens' to.
   It's also worth noting that this code snippet in kittens.component.ts:
   
    @Component({
        templateUrl: 'kittens.component.html'
    })
    
   links the kittens.component.ts file to the kittens.component.html file. 
   
   In conclusion, Java Spark is not the only thing doing the routing.
   
Q: What does the user-list.service.ts do? Why is it not just done in the user-list.component.ts? 

A: The user-list.service.ts actually gets the user data while the user-list.component.ts presents the data
   in the browser (along with user-list.component.html).
   
   
   
   
   
   
    
   
