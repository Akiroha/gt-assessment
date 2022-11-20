# Frontend Grow Therapy Assessment

## Scope

1. A user should be able to select a time on a calendar (defaulting to yesterday)
2. A user should be able to decide how many results to show (options being 25, 50,75, 100, 200 default to 100)
3. Based on what is selected, a user will see a frontend view that includes the nameof the article, the number of views and the rank

## Additional Enhancement Chosen

Allow users to “pin” articles of interest above their search results

## Thought Process

### Home page articles controller

- I decided to only update the articles being displayed and their count when a user hits the "submit" button as opposed to making updates when either the datepicker or select are changed.
- I could've done the alternative but I preferred this as I wanted the button to drive everything.

### Caching

- I'm handling the caching of articles in redux so that it persists per session but isn't saved to session or local storage.
- I chose to cache articles per date since the data won't change since it's in the past.
- I decided to not save this to session/local storage as this can grow to be vast over many visits. Ultimately, it would take a lot of queries before the local storage limit is reached but users would more than likely visit the same dates during the same session as opposed to different visits (assumption).

### Pinning Articles

- I chose to persist pinned articles over multiple visits using local storage.
- It would take ALOT of pinned articles before we approach that 5MB limit
- If this were a production application, would possibly require users to create accounts to pin articles and then we'd relate users to articles via a join column like "user_pinned_articles"
- I use redux to keep the pinned articles in the store as well so that they are more easily accessible

### Feedback

- I'm passionate about user's getting visual feedback so this is why I included my usual snack bar
- The snack bar is used in this project to let users know their pins and unpins have been registered.
- I also use it to alert users when they've lost connection to the internet + when they regain internet access

## Libraries/Tools, Decisions, and Tradeoffs

### Tailwind

- First and foremost I went with tailwind for the ease of use. Creating reusable components with tailwind just feels easier and simpler than vanilla css. I also love how one has the ability to set up theming + override defaults.

### Next

- I went with next because as of a few months back, it became my must-have for web-development with React. The routing + built in API (wasn't necesssary for this project) are my favorite aspects of it. Next also makes SEO easier to implement.

### Heroicons

- I decided to go with Heroicons because it's easier to customize their SVGs as opposed to other icon providers that only allow you import static components with limited customization.

### Redux w/ redux-toolkit

- I've always preferred redux over React Context because although the setup takes a bit more time, setting up multiple reducers feels less cumbersome and I feel I have more control. Toolkit makes setting up stores and their reducers feel less like chores, I'd actually describe it as fun now.

### Axios

- Like a lot of my other decisions, there isn't much of a performance trade-off with the tool I chose for my api requests. I just prefer axios over vanilla fetch.

### Moment

- If you're reading this as a developer, I don't need to explain how annoying "time" can be at times. Moment as a whole makes dealing with time less stressful. The built in methods make reinventing the wheel when dealing with time less of an option.

### Formik + Yup

- This assessment didn't require a crazy amount of forms, or even complex forms. But I want to acknowledge how powerful of a combo these 2 are when it comes to validating and submitting forms. Error handling + data integrity come as second nature when using them.

## Honesty Section + What is needed at a production level

- Just to make it clear, I know the high importance of the next two points that I'm about to discuss in regards to production builds + working with others on a team.

### Unit Testing

- I strongly believe that nothing should go to production without unit tests. Sure, QA is important, but nothing is more powerful than automated tests that make sure at the core of the product, the basic functionality is tried and tested. This also helps with regression when new features are implemented.
- As I told Rachel during the intro call, I'm a Salesforce developer by day and React developer by night. When it comes to salesforce, nothing that's built backend can go to production without at least 75% test coverage so unit testing is a big part of my career.
- In regard to unit testing with my frontend work, I've taken a few Udemy courses on Jest and have worked with it. But I'm not so well-versed in it and can certainly learn more/do better. It's something that I know needs to be addressed.

### Typescript

- As I mentioned above, I do a lot of work in the Salesforce world and the main language used is Apex, a variation of Java. I'm no stranger to typed languages at all, I just feel like when I'm writing code in JS, it's an escape from that which has delayed me getting on the Typescript train.
- I do acknowledge that the reason I've been able to continue this way is because I've been working on a team of one on all of my React projects.
- Typescript is the way to go as not only does it make code more readable, but it drastically lowers the possibility of errors due to types being passed/required.
- Another aspect that I need to grow in. (The Udemy course is sitting in my purchased courses, just need to get to it. I'm sure all developers can relate to this!)
