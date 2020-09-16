# This application with generating a poll, and vote this poll after that you can see vote results on Chart.
    For using this app follow the below steps
    ```bash
    yarn install 
    ```
    ```bash
    yarn start 
    ```

## I separated this application by the 4 components. These are;
    - LayoutComponent
    - QuestionComponent
    - ResultComponent
    - VoteComponent

#### LayoutComponent
    This component has a 3 part. These are QuestionComponent, Vote Area, ResultComponent.

#### QuestionComponent
    This component has a 5 part. These are newQuestion.js, question.js, questionComponent.js, questionList.js, questions.js. In this component main file is questionComponent.js other files are connecting to this file. All data are sending and getting between these files.  

    - The newQuestion.js has a question title and answer options input and add button.
    - The question.js file creates the question list. It takes the questions entered from the state object where the entered questions are saved and adds the questions with the span within the li element and the remove button.
    - questionComponent.js has a newQuestion, questionList, and possible answer count with reset button.
    - questionList.js has an element of ul. This is the parent of the question.js file.
    - questions.js is a provider of this question component. This file provides all data communications.
#### VoteComponent
    This component taking answers and generates vote options. 

#### ResultComponent
    This component taking vote results and generates graphs dynamically.