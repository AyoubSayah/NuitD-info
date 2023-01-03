# [formio][i18n] Forms dynamic translation

### Problem :

In the bankerise form builder, adding a new form or input necessitates updating the source code and adding the appropriate translation for several languages, both of which take time.

We thus made the decision to develop a low-code solution for this, enabling the bank agent to add the translations without changing the code. We attempted to apply this method without making any changes to the formio source code.

Adding an extra panel for translating with three default labels : English (en) , French(fr) and Arabic (ar) , 

the user can delete French and Arabic label but the English id always mandatory , 

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled.png)

the user is able to add more languages …

an element without translating ,it will have a default label `label name`

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%201.png)

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%202.png)

clicking on button add will add a new input

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%203.png)

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%204.png)

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%205.png)

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%206.png)

# Steps:

Create a custom component that has default values for translations in English, French, and Arabic `{en:'',fr:'':ar':'}`. When adding a new translation, such as Dutch, the component should include a default value for the Deutch translation, resulting in a new set of values that includes English, French, Arabic, and Deutch. {en:'',fr:'',ar:'',en:''}

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%207.png)

Using this code in the form builder to add the custom component to the edit form for every component. The default label of the component will be hidden 

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%208.png)

I created a new class that inherits from the **`Component`**class provided by formio in order to use its properties. In the new class, I implemented a static **`translate`**
 function with a custom translation algorithm. This was done in the **`rise-frontend-forms`**library.

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%209.png)

To modify the default behavior of formio components when it comes to translation, the definition of the **`translate`**
function can be modified in the **`Component`** class, which all formio components inherit from. This will change the behavior of the **`translate`**
 function for all formio components.

![Untitled](%5Bformio%5D%5Bi18n%5D%20Forms%20dynamic%20translation%20acfc6dde4bef40dda0333d4676e09027/Untitled%2010.png)
