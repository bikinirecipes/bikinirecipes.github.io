
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Uh oh! This bikini slipped off in the waves. . . Hit the back arrow to find something yummy. Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "The History of Bikini Recipes",
    "body": "Bikini Recipes is dedicated to promoting healthy, simple food choices to support your best self. Legal &amp; Required Disclosures: Please read our legal policy here. As an Amazon Associate Bikini Recipes earns from qualifying purchases. Questions?: Head over to our Contact Page! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Bikini Recipes. Buy me a coffee "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/exercise",
    "title": "Exercise",
    "body": "Here are exercise programs and activities to help support you on your health journey! "
    }, {
    "id": 4,
    "url": "/gadgets",
    "title": "Gadgets",
    "body": "Tools we own, use, and love: Smoothie Blenders:: We eat smoothies everyday, so it stands to reason we LOVE a good blender. Here are our favorite brands: 	Magic Bullet	NutiBullet	AI Cook	Ninja Professional and Nutri Ninja "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "      New Recipes!:                                                                                                                                                                                                           Coco Loco Smoothie                                                 1 2 3 4 5                                              :               Ingredients:: 1 c. almond milk (sugar free)1/2 c.  pineapple1/4 coconut 1/2 frozen banana :                                                                                                                                                                       Chloë                                09 Jan 2019                                                                                                                                                                                                                                                                                                                              Apple Turnover Smoothie                                                 1 2 3 4 5                                              :               Ingredients:: 1 c. almond milk (unsweetened) 1 apple 1/2 c. oats cinnamon (optional) 1 scoop of vanilla protein powder (optional)&lt;br. . . &lt;/h4&gt;            &lt;/div&gt;                                                                                                                                                          Chloë                                06 Jan 2019                                                                                    &lt;/div&gt;        &lt;/div&gt;      &lt;/div&gt;    &lt;/div&gt;  &lt;/div&gt;&lt;/div&gt;                                                                                                                                                                                                                Strawberry Shortcake Smoothie                                                 1 2 3 4 5                                              :               Ingredients:: 1 c. almond milk (sugar free) 1 c. strawberries 1/2 frozen banana 1/4 c. oats 1 scoop of vanilla protein. . . &lt;/h4&gt;            &lt;/div&gt;                                                                                                                                                          Chloë                                04 Jan 2019                                                                                    &lt;/div&gt;        &lt;/div&gt;      &lt;/div&gt;    &lt;/div&gt;  &lt;/div&gt;&lt;/div&gt;                                                                                                                                                                                                                      Forest Berry Smoothie                                                 1 2 3 4 5                                              :               Ingredients:: 1/2 c. strawberries 1/2 c. blackberries 1/2 c. raspberries 1 c.  almond milk 1/2 c.  Greek yogurt (sugar free) . . . :                                                                                                                                                                       Chloë                                01 Jan 2019                                                                                                                                                                                                                                                                                                                &lt;/div&gt;&lt;/section&gt;      All Recipes:                                                                                                     Pineapple Upsidedown Smoothie                         1 2 3 4 5                      :       Ingredients:: 3/4 c. orange juice1 c.  pineapple1/2 frozen bananahandful of carrots :                                                                               Chloë                08 Jan 2019                                                                                                                                     Orange Sun Smoothie                         1 2 3 4 5                      :       Ingredients:: 1/2 c. orange juice1/2 c.  pineapple1 frozen banana1 in.  fresh ginger :                                                                               Chloë                07 Jan 2019                                                                                                                                     Watermelon Refresh Smoothie                         1 2 3 4 5                      :       Ingredients:: 1 c. watermelon1/2 c.  pineapple1 juicy lime :                                                                               Chloë                05 Jan 2019                                                                                                                                     Blueberry Muffin Smoothie                         1 2 3 4 5                      :       Ingredients:: 1 c. almond milk (sugar free)1 c.  blueberries1/2 frozen banana1/4 c. oatscinnamon to tastehandful of walnuts (optional) :                                                                               Chloë                03 Jan 2019                                                                                                                                     Fruit Burst Smoothie                         1 2 3 4 5                      :       Ingredients:: 1 c. orange juice1/2 c.  pineapple1/4 lemon (seeds removed, skin on)1 in.  fresh ginger :                                                                               Chloë                02 Jan 2019                                                                                                                                     Dragon Fruit Smoothie                         1 2 3 4 5                      :       Ingredients:: 1 c. almond milk1 frozen banana1/2 lime1 dragonfruit (or two scoops powder) :                                                                               Chloë                31 Dec 2018                                               &laquo;       1        2        3        4        5        6        7      &raquo;  : : "
    }, {
    "id": 6,
    "url": "/swimwear",
    "title": "Swimwear",
    "body": "Ready for some fun in the sun? Flaunt your beautiful self in something special:High Waisted Flattery	Tie Me Up	A Little Cheeky "
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 10,
    "url": "/page4/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 11,
    "url": "/page5/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 12,
    "url": "/page6/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 13,
    "url": "/page7/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       New Recipes!:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Recipes:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 14,
    "url": "/cocoloco-smoothie/",
    "title": "Coco Loco Smoothie",
    "body": "2019/01/09 - Ingredients:: 1 c. almond milk (sugar free)1/2 c.  pineapple1/4 coconut 1/2 frozen banana Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 15,
    "url": "/pineappleupsidedown-smoothie/",
    "title": "Pineapple Upsidedown Smoothie",
    "body": "2019/01/08 - Ingredients:: 3/4 c. orange juice1 c.  pineapple1/2 frozen bananahandful of carrots "
    }, {
    "id": 16,
    "url": "/orange-smoothie/",
    "title": "Orange Sun Smoothie",
    "body": "2019/01/07 - Ingredients:: 1/2 c. orange juice1/2 c.  pineapple1 frozen banana1 in.  fresh ginger "
    }, {
    "id": 17,
    "url": "/appleturnover-smoothie/",
    "title": "Apple Turnover Smoothie",
    "body": "2019/01/06 - Ingredients:: 1 c. almond milk (unsweetened)1 apple1/2 c. oatscinnamon (optional)1 scoop of vanilla protein powder (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 18,
    "url": "/watermelon-smoothie/",
    "title": "Watermelon Refresh Smoothie",
    "body": "2019/01/05 - Ingredients:: 1 c. watermelon1/2 c.  pineapple1 juicy lime "
    }, {
    "id": 19,
    "url": "/strawberryshortcake-smoothie/",
    "title": "Strawberry Shortcake Smoothie",
    "body": "2019/01/04 - Ingredients:: 1 c. almond milk (sugar free)1 c. strawberries1/2 frozen banana1/4 c. oats1 scoop of vanilla protein powder (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 20,
    "url": "/blueberrymuffin-smoothie/",
    "title": "Blueberry Muffin Smoothie",
    "body": "2019/01/03 - Ingredients:: 1 c. almond milk (sugar free)1 c.  blueberries1/2 frozen banana1/4 c. oatscinnamon to tastehandful of walnuts (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 21,
    "url": "/fruitburst-smoothie/",
    "title": "Fruit Burst Smoothie",
    "body": "2019/01/02 - Ingredients:: 1 c. orange juice1/2 c.  pineapple1/4 lemon (seeds removed, skin on)1 in.  fresh ginger "
    }, {
    "id": 22,
    "url": "/forestberry-smoothie/",
    "title": "Forest Berry Smoothie",
    "body": "2019/01/01 - Ingredients:: 1/2 c. strawberries1/2 c. blackberries1/2 c. raspberries1 c.  almond milk1/2 c.  Greek yogurt (sugar free) "
    }, {
    "id": 23,
    "url": "/dragonfruit-smoothie/",
    "title": "Dragon Fruit Smoothie",
    "body": "2018/12/31 - Ingredients:: 1 c. almond milk1 frozen banana1/2 lime1 dragonfruit (or two scoops powder) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 24,
    "url": "/spinachlemon-smoothie/",
    "title": "Spinach-Lemon Smoothie",
    "body": "2018/01/31 - Ingredients:: 1 c. almond milk (unsweetened)1/2 c.  pineapple1/4 lemon (seeds removed, skin on)1/2 c. spinach Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 25,
    "url": "/carrotorange-smoothie/",
    "title": "Carrot Orange Smoothie",
    "body": "2018/01/30 - Ingredients:: 1 c. orange juice1/2 frozen banana1 handful of carrots1 in.  fresh ginger "
    }, {
    "id": 26,
    "url": "/pineapplemango-smoothie/",
    "title": "Pineapple Mango Smoothie",
    "body": "2018/01/29 - Ingredients:: 1 frozen banana1/2 c.  pineapple1/2 c. mango1 c. almond milk (unsweetened) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 27,
    "url": "/beetred-smoothie/",
    "title": "Beet Red Smoothie",
    "body": "2018/01/28 - Ingredients:: 1 c. cherries (pitted)1 or 2 beets3/4 c. almond milk (unsweetened)1/4 c. oats Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 28,
    "url": "/lemonblueberry-smoothie/",
    "title": "Lemon Blueberry Smoothie",
    "body": "2018/01/27 - Ingredients:: 1 c. almond milk (unsweetened)1/2 c.  blueberries1/2 lemon (seeds removed, skin on)1/4 c. oatsalmonds (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 29,
    "url": "/kaleavocado-smoothie/",
    "title": "Kale Avodaco Smoothie",
    "body": "2018/01/26 - Ingredients:: 1 frozen banana1/2 c.  kale1/4 avocado1 c. almond milk (unsweetened) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 30,
    "url": "/bananastrawberry-smoothie/",
    "title": "Banana Strawberry Smoothie",
    "body": "2018/01/25 - Ingredients:: 1 frozen banana1/2 c.  strawberries1 c. almond milk (unsweetened)chia seeds (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 31,
    "url": "/peachykeen-smoothie/",
    "title": "Peachy Keen Smoothie",
    "body": "2018/01/24 - Ingredients:: 1 c. orange juice1/2 c. peaches1 in.  fresh ginger "
    }, {
    "id": 32,
    "url": "/goddess-smoothie/",
    "title": "Goddess Smoothie",
    "body": "2018/01/23 - Ingredients:: 1 c. almond milk1 c. spinach1 frozen banana1 in.  fresh ginger Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 33,
    "url": "/happymonkey-smoothie/",
    "title": "Happy Monkey Smoothie",
    "body": "2018/01/22 - Ingredients:: 1 frozen banana1 c. almond milk1 spoonful peanut butter1 scoop chocolate protein powder1 spoonful organic, unsweetened coconut flakes Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 34,
    "url": "/pomegranate-smoothie/",
    "title": "Pomegranate Smoothie",
    "body": "2018/01/21 - Ingredients:: 1 c. almond milk (unsweetened)1/2 c.  greek yogurt1/2 c. pomegranate seeds or juice1 c. mixed berries Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 35,
    "url": "/mintavocado-smoothie/",
    "title": "Mint Avocado Smoothie",
    "body": "2018/01/20 - Ingredients:: 1 c. almond milk (unsweetened)1/2 c.  mint leaves1/4 avocado1/4 cup greek yogurt Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 36,
    "url": "/mango-smoothie/",
    "title": "Mango Smoothie",
    "body": "2018/01/19 - Ingredients:: 1 c. orange juice1/2 c.  pineapple1/2 c. mangohandful of baby carrots "
    }, {
    "id": 37,
    "url": "/banana-blueberry-smoothie/",
    "title": "Banana Blueberry Smoothie",
    "body": "2018/01/18 - Ingredients:: 1 c. almond milk1 frozen banana1/4 c. blueberries1 spoonful almond butter (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 38,
    "url": "/papaya-smoothie/",
    "title": "Papaya Smoothie",
    "body": "2018/01/17 - Ingredients:: 1 c. orange juice1/2 c. papaya1/2 frozen banana1/4 c. coconutspoonful of chia seeds (optional) "
    }, {
    "id": 39,
    "url": "/green-smoothie/",
    "title": "Green Gold Smoothie",
    "body": "2018/01/16 - Ingredients:: 1 frozen banana1/2 c.  pineapple1 c. kale1 c. orange juice1 teaspoon spirulina powder (optional) "
    }, {
    "id": 40,
    "url": "/icecoffee-smoothie/",
    "title": "Iced Coffee Smoothie",
    "body": "2018/01/15 - Ingredients:: 1/2 c. strong coffee (chilled)1 frozen banana1/2 cup almond milk (unsweetened)1/4 c. oatshandful of almonds (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 41,
    "url": "/raspberrysunrise-smoothie/",
    "title": "Raspberry Smile Smoothie",
    "body": "2018/01/14 - Ingredients:: 1 c. orange juice1/2 c.  raspberries1/2 c. mango "
    }, {
    "id": 42,
    "url": "/mintchocolatechip-smoothie/",
    "title": "Mint Chocholate Chip Smoothie",
    "body": "2018/01/13 - Ingredients:: 1 c. almond milk (unsweetened)1/2 an avocado1 scoop chocolate protein powder1/4 c. greek yogurt1/2 c. spinachhandful of fresh mintcocoa nibs (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 43,
    "url": "/chocolatecherry-smoothie/",
    "title": "Chocolate Cherry Smoothie",
    "body": "2018/01/12 - Ingredients:: 1 c. cherries (pitted)1/2 c. greek yogurt1/2 c. almond milk (unsweetened)1 scoop chocolate protein powder Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 44,
    "url": "/chaitea-smoothie/",
    "title": "Chai Tea Smoothie",
    "body": "2018/01/11 - Ingredients:: 1 c. almond milk1 frozen banana1 teaspoon ginger1 teaspoon cinnamon1/4 teaspoon cardamom1/4 teaspoon allspice Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 45,
    "url": "/supersunny-smoothie/",
    "title": "Super Sunny Smoothie",
    "body": "2018/01/10 - Ingredients:: 1 frozen banana1/2 fresh orange1/2 c. orange juice1 in.  fresh gingergoji berries (optional) "
    }, {
    "id": 46,
    "url": "/mangoavocado-smoothie/",
    "title": "Mango Avocado Smoothie",
    "body": "2018/01/09 - Ingredients:: 1 frozen banana1/2 c.  mango1/2 avocado1 c. almond milk (unsweetened) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 47,
    "url": "/bananapeach-smoothie/",
    "title": "Banana Peach Smoothie",
    "body": "2018/01/08 - Ingredients:: 1 c. orange juice1 frozen banana1/2 cup peaches "
    }, {
    "id": 48,
    "url": "/autumnharvest-smoothie/",
    "title": "Autumn Harvest Smoothie",
    "body": "2018/01/07 - Ingredients:: 1 c. almond milk (unsweetened)1/4 c. pumpkin purée1 apple1/4 c. oats1/4 c. greek yogurtpumpkin pie spice (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 49,
    "url": "/bananabread-smoothie/",
    "title": "Banana Bread Smoothie",
    "body": "2018/01/06 - Ingredients:: 1 c. almond milk1 frozen banana1 scoop vanilla protein powder1 teaspoon cinnamonwalnuts (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 50,
    "url": "/bananalatte-smoothie/",
    "title": "Banana Latte Smoothie",
    "body": "2018/01/05 - Ingredients:: 1 c. almond milk1 frozen banana1 spoonful almond butter1/4 c. oatscocoa nibs or chia seeds (optional) Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 51,
    "url": "/coconutprotein-smoothie/",
    "title": "Coconut Protein Smoothie",
    "body": "2018/01/04 - Ingredients:: 1 c. almond milk (unsweetened)1 frozen banana1/2 cup blueberries1/2 cup coconut1 scoop strawberry protein powder Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 52,
    "url": "/blackberry-smoothie/",
    "title": "Blackberry Smoothie",
    "body": "2018/01/03 - Ingredients:: 1 c. blackberries1 c. almond milk (unsweetened)1/4 c. greek yogurt1/4 c. oats Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. Here are our favorite brands: 	Kirkland	Silk	Orgain	JOI	Make sure you buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! "
    }, {
    "id": 53,
    "url": "/nectarineapricot-smoothie/",
    "title": "Nectarine Apricot Smoothie",
    "body": "2018/01/02 - Ingredients:: 1 c. orange juice1/2 c. nectarines1/2 c. apricots1 in.  fresh ginger "
    }, {
    "id": 54,
    "url": "/rapsberry-smoothie/",
    "title": "Raspberry Smoothie",
    "body": "2018/01/01 - Ingredients:: 1 c. raspberries1 c. almond milk (unsweetened)1/4 c. greek yogurt1/4 c. oats Ingredient Tips:: Keep shelf stable almond milk on hand so you can always make healthy choices. We always buy UNSWEETENED milks. The extra sugar in your diet is not good for your health! Here are our favorite brands of unsweetened almond milk: 	JOI is the first brand on our list because the only ingredient is almonds. There are no added sugars, gums, or other ingredients! The trick to this almond milk is that it isn't a milk until after you add water and blend, which is easy to do as you're making a smoothie. If you haven't tried JOI, it is worth a taste simply due to the health benefits of skipping the unecessary ingredients found in other almond milks. 	Almond Milk Base by JOI | Make Your Own Fresh Almond Milk | Just One Ingredient | Unsweetened without Gums or Emulsifiers | Vegan, Keto, Paleo Friendly | 15 oz. | Makes up to 7 Quarts 	JOI is the first brand on our list because the only ingredient is almonds. There are no added sugars, gums, or other ingredients! The trick to this almond milk is that it isn't a milk until after you add water and blend, which is easy to do as you're making a smoothie. If you haven't tried JOI, it is worth a taste simply due to the health benefits of skipping the unecessary ingredients found in other almond milks. 	Almond Milk Base by JOI | Make Your Own Fresh Almond Milk | Just One Ingredient | Unsweetened without Gums or Emulsifiers | Vegan, Keto, Paleo Friendly | 15 oz. | Makes up to 7 Quarts 	JOI is the first brand on our list because the only ingredient is almonds. There are no added sugars, gums, or other ingredients! The trick to this almond milk is that it isn't a milk until after you add water and blend, which is easy to do as you're making a smoothie. If you haven't tried JOI, it is worth a taste simply due to the health benefits of skipping the unecessary ingredients found in other almond milks. 	Almond Milk Base by JOI | Make Your Own Fresh Almond Milk | Just One Ingredient | Unsweetened without Gums or Emulsifiers | Vegan, Keto, Paleo Friendly | 15 oz. | Makes up to 7 Quarts 	JOI is the first brand on our list because the only ingredient is almonds. There are no added sugars, gums, or other ingredients! The trick to this almond milk is that it isn't a milk until after you add water and blend, which is easy to do as you're making a smoothie. If you haven't tried JOI, it is worth a taste simply due to the health benefits of skipping the unecessary ingredients found in other almond milks. 	Almond Milk Base by JOI | Make Your Own Fresh Almond Milk | Just One Ingredient | Unsweetened without Gums or Emulsifiers | Vegan, Keto, Paleo Friendly | 15 oz. | Makes up to 7 Quarts "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});