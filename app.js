/* ============================================
   TIRUMALA NURSERY — App JavaScript
   ============================================ */

// ── Plant Data (164 plants mapped to images) ──
const plantsData = [
  { id: 1, name: "Walnut", image: "image copy.png", origin: "Afghanistan, Pakistan", type: "Imported Variety", tag: "imported", desc: "High-quality exotic nut tree. Suitable for long-term cultivation with strong growth and excellent yield." },
  { id: 2, name: "Banana Sapota", image: "image copy 2.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Unique fruit combining the sweetness of sapota with a banana-like elongated shape. Highly productive." },
  { id: 3, name: "400G Thai Sapota", image: "image copy 3.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A large-sized sapota variety known for its impressive weight and extra sweet, granular texture." },
  { id: 4, name: "Kalapathi Sapota", image: "image copy 4.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Popular round-shaped sapota with sweet, granular flesh. Very high yielding and commercial variety." },
  { id: 5, name: "Nam Dok Mai Gold Mango", image: "image copy 5.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "The famous golden mango of Thailand. Exceptionally sweet, fiberless, and premium dessert quality." },
  { id: 6, name: "Red Ivory", image: "image copy 6.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Stunning large mango with a deep red-to-ivory skin. Known for its aromatic, sweet, and firm pulp." },
  { id: 7, name: "Kasturi Mango", image: "image copy 7.png", origin: "Indonesia", type: "Exotic", tag: "exotic", desc: "A unique dark purple, almost black mango. Intensely aromatic and sweet, a rare collector's choice." },
  { id: 8, name: "Lemon (Just Mango Thai)", image: "image copy 8.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A unique Thai mango variety with a refreshing, citrusy undertone and bright yellow flesh." },
  { id: 9, name: "Kat Mann Mango", image: "image copy 9.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Commercial-grade Thai mango known for its large size, consistent sweetness, and long shelf life." },
  { id: 10, name: "Red All Time Mango", image: "image copy 10.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A variety that fruits multiple times a year. Beautiful reddish blush when ripe and very sweet." },
  { id: 11, name: "Miyazaki Mango", image: "image copy 11.png", origin: "Japan", type: "Premium Imported", tag: "imported", desc: "The world's most expensive mango. Ruby-red skin with exceptional sweetness and an aromatic melt-in-mouth texture." },
  { id: 12, name: "Blue Mango", image: "image copy 12.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Unique Thai variety with a distinct bluish-green tint when young. Matures into a very sweet dessert mango." },
  { id: 13, name: "Arzoboi", image: "image copy 13.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Premium Thai mango variety prized for its unique shape and high sugar content." },
  { id: 14, name: "4 Season Longan", image: "image copy 14.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "A vibrant yellow tropical fruit with a tangy-sweet flavor profile, perfect for exotic fruit gardens." },
  { id: 15, name: "Sweet Santhol", image: "image copy 15.png", origin: "Philippines", type: "Exotic", tag: "exotic", desc: "Also known as Cotton Fruit. This sweet variety has thick skin and delicious, soft, cottony segments inside." },
  { id: 16, name: "Velvet Apple", image: "image copy 16.png", origin: "Philippines", type: "Exotic", tag: "exotic", desc: "A striking fruit with a velvety, reddish-brown skin and a rich, creamy, cheese-like white flesh." },
  { id: 17, name: "Red Longan", image: "image copy 17.png", origin: "Thailand", type: "Premium Imported", tag: "exotic", desc: "A rare and beautiful longan variety with red skin and incredibly sweet, translucent flesh." },
  { id: 18, name: "Season Longan", image: "image copy 18.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Reliable and high-yielding longan variety that fruits abundantly during the main harvest season." },
  { id: 19, name: "Diamond River Longan", image: "image copy 19.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A top-quality longan variety noted for its consistent fruiting and thin-skinned, sweet fruits." },
  { id: 20, name: "Pink Longan", image: "image copy 20.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Known for the subtle pinkish hue of its pulp. Extremely sweet and juicy with a small seed." },
  { id: 21, name: "Seedless Longan", image: "image copy 21.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Extraordinarily convenient longan variety with no seeds. Very sweet and perfect for fresh snacking." },
  { id: 22, name: "Rambutan N18", image: "image copy 22.png", origin: "Malaysia", type: "Exotic", tag: "exotic", desc: "The gold standard for rambutans. Large size, easy-to-peel skin, and thick, sweet, juicy white segments." },
  { id: 23, name: "Seedless Guava", image: "image copy 23.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Crunchy and sweet Thai guava with absolutely no seeds. High vitamin C and very refreshing." },
  { id: 24, name: "Seedless Lemon", image: "image copy 31.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Produces large, juicy lemons year-round with no seeds. Ideal for commercial and home plantation." },
  { id: 25, name: "Miracle Fruit", image: "image copy 25.png", origin: "West Africa", type: "Exotic", tag: "exotic", desc: "Contains miraculin, which temporary makes sour foods taste sweet. A fascinating ornamental and functional plant." },
  { id: 26, name: "Lemon Variegated", image: "image copy 26.png", origin: "USA", type: "Exotic", tag: "exotic", desc: "Beautiful white-and-green striped leaves and fruits. The juice is pinkish and incredibly fragrant." },
  { id: 27, name: "Thai Patti Lemon", image: "image copy 27.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A unique hybrid or selection that combines robust sapota growth with citrus-like adaptability." },
  { id: 28, name: "Thai Musambi (1/2 kg)", image: "image copy 28.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Giant sized sweet lime. Single fruits can weigh up to half a kilogram. Very juicy and sweet." },
  { id: 29, name: "Surinam Cherry", image: "image copy 29.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Ribbed, pumpkin-shaped fruits that turn from red to black. Unique spicy-sweet flavor profile." },
  { id: 30, name: "Manila Cherry", image: "image copy 30.png", origin: "Philippines", type: "Exotic", tag: "exotic", desc: "Small, bright red tropical cherries with a tangy-sweet taste. High in antioxidants and vitamins." },
  { id: 31, name: "P K Lemon", image: "image copy 24.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "A local specialty lemon known for its thin skin and exceptionally high juice content." },
  { id: 32, name: "Blackberry", image: "image copy 32.png", origin: "USA", type: "Exotic", tag: "exotic", desc: "Produces clusters of dark, juicy, and tangy berries. Excellent for fresh eating and jams." },
  { id: 33, name: "Tropical Apricot", image: "image copy 33.png", origin: "Central America", type: "Exotic", tag: "exotic", desc: "A hardy tropical tree producing soft, apricot-colored fruits with a sweet and slightly tangy pulp." },
  { id: 34, name: "Tone less Jelebe", image: "image copy 34.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Easy-to-handle jujube tree without thorns. Produces large, crunchy, apple-like sweet fruits." },
  { id: 35, name: "Ola Sopa", image: "image copy 35.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Premium Thai sapota variety noted for its smoothness and high sugar content." },
  { id: 36, name: "Lipote", image: "image copy 36.png", origin: "Philippines", type: "Exotic", tag: "exotic", desc: "Clusters of small, dark purple fruits that are tart when young and sweet-to-tangy when ripe." },
  { id: 37, name: "Matova", image: "image copy 37.png", origin: "Indonesia", type: "Exotic", tag: "exotic", desc: "Also known as Pometia pinnata. The fruit has a flavor reminiscent of lychee and longan with a hint of durian." },
  { id: 38, name: "Yellow Strawberry Guava", image: "image copy 38.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Small, round yellow fruits with a flavor profile combining guava and strawberry. Very aromatic." },
  { id: 39, name: "HRMN Apple", image: "image copy 39.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "The famous low-chill apple variety that fruits successfully in hot tropical climates." },
  { id: 40, name: "Plum", image: "image copy 40.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Hardy plum variety adapted for warmer regions. Sweet-tangy purple fruits with soft flesh." },
  { id: 41, name: "Naspati (Pear)", image: "image copy 41.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Crunchy and sweet local pear variety that performs well in diverse soil conditions." },
  { id: 42, name: "Jaboticaba", image: "image copy 42.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Unique grape-like fruits that grow directly on the main trunk and branches. Truly a conversation piece." },
  { id: 43, name: "Abiu Fruit", image: "image copy 43.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Rare tropical fruit with a sweet, translucent pulp. Highly valued by exotic fruit collectors." },
  { id: 44, name: "Everic Jack", image: "image copy 44.png", origin: "Philippines", type: "Imported Variety", tag: "imported", desc: "Premium jackfruit variety with thick, golden, extra-sweet pods and very little latex." },
  { id: 45, name: "Milk Fruit GP", image: "image copy 45.png", origin: "Vietnam", type: "Exotic", tag: "exotic", desc: "Also called Star Apple. Purple skin with white, milky, star-shaped sweet pulp inside." },
  { id: 46, name: "Red Amla", image: "image copy 46.png", origin: "India", type: "Exotic", tag: "exotic", desc: "A rare variety of Indian gooseberry with a reddish tint. High in medicinal properties and vitamin C." },
  { id: 47, name: "Thailand 10kg Jamun", image: "image copy 47.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Produces extraordinarily large black plums (Jamun). Sweet, pulpy, and medicinal." },
  { id: 48, name: "Macadmia Nut Gp", image: "image copy 48.png", origin: "Australia", type: "Exotic", tag: "exotic", desc: "Produces the world's most premium nuts. Requires specific cooler climates for best performance." },
  { id: 49, name: "Hanuman Pala", image: "image copy 49.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "A large-fruited variety of Soursop relative. Sweet and aromatic with many medicinal benefits." },
  { id: 50, name: "Noni Fruit", image: "image copy 50.png", origin: "India", type: "Medicinal", tag: "exotic", desc: "Famous for its health benefits. The fruit is used in juices and traditional medicine worldwide." },
  { id: 51, name: "Pemeleo Red", image: "image copy 51.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Deep red arils with sweet juice. Known for its high gloss and excellent shelf life." },
  { id: 52, name: "Nutmeg GP", image: "image copy 52.png", origin: "Indonesia", type: "Exotic", tag: "exotic", desc: "Dual-spice tree producing both Nutmeg and Mace. Grafted for early and consistent yield." },
  { id: 53, name: "Egg Fruit", image: "image copy 53.png", origin: "Mexico", type: "Exotic", tag: "exotic", desc: "Often called Canistel. The ripe flesh has the texture of cooked egg yolk and a sweet, cake-like flavor." },
  { id: 54, name: "Mooty", image: "image copy 54.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Rare Thai tropical fruit with a unique sweet-sour profile. Very ornamental tree." },
  { id: 55, name: "Badbur Cherry", image: "image copy 55.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Hardy tropical cherry variety that produces abundant small red fruits throughout the year." },
  { id: 56, name: "Red Sapota", image: "image copy 56.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Beautiful reddish-brown skin with a deep orange, extra sweet flesh. Very high yielding." },
  { id: 57, name: "Avocado GP", image: "image copy 57.png", origin: "Mexico", type: "Imported Variety", tag: "imported", desc: "The gold standard for avocados. Creamy texture with high oil content and excellent nutty flavor." },
  { id: 58, name: "Strawberry Red Guava", image: "image copy 58.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Small red fruits with a combined flavor of strawberry and guava. Highly aromatic." },
  { id: 59, name: "Apple Ber Red", image: "image copy 124.png", origin: "Taiwan", type: "Best Seller", tag: "bestseller", desc: "Large-sized jujube (Ber) that looks like a small red apple. Very crunchy and sweet." },
  { id: 60, name: "Gumless Jack", image: "image copy 60.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Unique jackfruit variety with very little to no latex (gum) inside. Easy to cut and very sweet." },
  { id: 61, name: "Pink Jack", image: "image copy 106.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Rare jackfruit variety with beautiful pinkish-red pods. Exceptionally sweet and aromatic." },
  { id: 62, name: "Peanut Butter Fruit", image: "image copy 62.png", origin: "South America", type: "Exotic", tag: "exotic", desc: "Small orange-red fruits that taste remarkably like peanut butter. Fascinating for kids and collectors." },
  { id: 63, name: "Luvi Luvi Cherry", image: "image copy 63.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Clusters of heart-shaped dark red berries. Very sweet with a subtle tang, highly decorative." },
  { id: 64, name: "N8 Thai Guava", image: "image copy 64.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Premium Thai guava with a super-crunchy texture, few seeds, and high commercial value." },
  { id: 65, name: "Sweet Wood Apple", image: "image copy 65.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Unlike the regular sour variety, this wood apple is naturally sweet when ripe. Highly nutritious." },
  { id: 66, name: "Keepal", image: "image copy 66.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Rare tropical fruit with a unique leathery skin and sweet pulp. Very slow-growing and prized." },
  { id: 67, name: "Mangosteen", image: "image copy 67.png", origin: "Thailand", type: "Premium Imported", tag: "exotic", desc: "Known as the 'Queen of Fruits', it offers a delicate balance of sweet and tangy flavors." },
  { id: 68, name: "Rio Cherry Grand", image: "image copy 68.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Large tropical cherry with deep purple-black skin and a rich, sweet flavor profile." },
  { id: 69, name: "Cat Fruit", image: "image copy 69.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Orangey tropical fruit with a unique appearance and sweet, gelatinous segments." },
  { id: 70, name: "Persimmon", image: "image copy 70.png", origin: "Japan", type: "Imported Variety", tag: "imported", desc: "Beautiful orange fruit that looks like a tomato. Sweet, honey-like flavor with a soft texture." },
  { id: 71, name: "Sweet Star Fruit", image: "image copy 71.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Beautiful star-shaped cross-sections when sliced. This sweet variety is juicy and refreshing." },
  { id: 72, name: "Thai Water Apple", image: "image copy 72.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Bell-shaped, waxy red fruits that are incredibly juicy and crunchy. High water content." },
  { id: 73, name: "Loquite", image: "image copy 73.png", origin: "China", type: "Exotic", tag: "exotic", desc: "Clusters of yellow-orange fruits with a tangy-sweet flavor similar to apricot and peach." },
  { id: 74, name: "Rampal Red", image: "image copy 74.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "A premium variety of Bullock's Heart. Reddish skin with very sweet, creamy white pulp." },
  { id: 75, name: "Annona Pink", image: "image copy 75.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Stunning pink-skinned custard apple relative. Minimal seeds and extra-sweet creamy flesh." },
  { id: 76, name: "Mulberry Red", image: "image copy 76.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Consistent producer of sweet, dark red mulberries. Fruits heavily throughout the year." },
  { id: 77, name: "Mulberry Green", image: "image copy 77.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Rare mulberry variety that stays greenish-white even when ripe. Primarily sweet with no acidity." },
  { id: 78, name: "All Spicies", image: "image copy 78.png", origin: "Jamaica", type: "Exotic", tag: "exotic", desc: "Single source for the flavor of cloves, cinnamon, and nutmeg combined. Highly versatile spice leaf." },
  { id: 79, name: "Sweet Orange", image: "image copy 79.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Classic sweet orange/musambi. Highly juice-yielding and essential for summer hydration." },
  { id: 80, name: "J33 Jack", image: "image copy 80.png", origin: "Malaysia", type: "Imported Variety", tag: "imported", desc: "Commercial Malaysian jackfruit. Famous for its bright yellow, very sweet, and crunchy pods." },
  { id: 81, name: "Baraba GP", image: "image copy 81.png", origin: "Amazon", type: "Exotic", tag: "exotic", desc: "Unique Amazonian fruit with a citrusy-creamy flavor profile. Very rare in Indian nurseries." },
  { id: 82, name: "Sweet Waka", image: "image copy 82.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Small, sweet tropical fruits produced on a hardy evergreen tree. A collector's favorite." },
  { id: 83, name: "Red Seedless Guava", image: "image copy 83.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Beautiful pinkish-red interior with no seeds. Sweet, aromatic, and rich in lycopene." },
  { id: 84, name: "Kothapalli Kobbari", image: "image copy 84.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Highly popular Indian mango variety from AP. Famous for its coconut-like texture and sweetness." },
  { id: 85, name: "Panduri", image: "image copy 85.png", origin: "Amazon", type: "Exotic", tag: "exotic", desc: "Long pods containing white, cottony pulp that tastes exactly like vanilla ice cream." },
  { id: 86, name: "Pulsion GP", image: "image copy 86.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "A unique hybrid variety combining the best traits of different tropical fruits." },
  { id: 87, name: "Rose Apple", image: "image copy 105.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Refreshing, bell-shaped fruits with a crisp, juicy texture and a subtle rose-like aroma." },
  { id: 88, name: "Passion Fruit", image: "image copy 88.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Vigorous climber producing aromatic, tangy-sweet fruits perfect for juices and fresh consumption." },
  { id: 89, name: "Red Jack", image: "image copy 89.png", origin: "Thailand", type: "Premium Imported", tag: "imported", desc: "Top-tier jackfruit with deep orangey-red pods. Extraordinary sweetness and fragrance." },
  { id: 90, name: "VNR Guava", image: "image copy 90.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Produces massive-sized guavas with high pulp and low seed count. Crispy and sweet." },
  { id: 91, name: "Kaffir Lemon", image: "image copy 91.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Primarily grown for its incredibly aromatic double-leaves and bumpy skin fruit, used in Asian cuisine." },
  { id: 92, name: "Laxman Phal GP", image: "image copy 92.png", origin: "India", type: "Medicinal", tag: "exotic", desc: "Relative of Soursop. Widely known for its health benefits and unique sweet-tangy white pulp." },
  { id: 93, name: "Sapheda Guava", image: "image copy 93.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Classic white-fleshed guava noted for its sweetness and high nutritional value." },
  { id: 94, name: "Litchi", image: "image copy 94.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Famous Indian variety. Large, pulpy, and extraordinarily sweet with a characteristic aroma." },
  { id: 95, name: "Finger Lemon", image: "image copy 95.png", origin: "Australia", type: "Exotic", tag: "exotic", desc: "Also called Caviar Lime. Contains juice vesicles that look like citrus pearls with a burst of flavor." },
  { id: 96, name: "Gac Fruit", image: "image copy 96.png", origin: "Vietnam", type: "Exotic", tag: "exotic", desc: "Beautiful spiny orange fruit with deep red interior. Extremely high in beta-carotene and lycopene." },
  { id: 97, name: "Thai Custed Apple", image: "image copy 97.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Large fruit size with minimal seeds and extra-sweet, creamy white pulp." },
  { id: 100, name: "Sweet Tamarind", image: "image copy 100.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Unlike local varieties, this Thai tamarind is primarily sweet with a very subtle tang." },
  { id: 101, name: "Durian", image: "image copy 101.png", origin: "Thailand", type: "Premium Imported", tag: "exotic", desc: "The 'King of Fruits'. Known for its intense aroma and rich, custard-like creamy flesh." },
  { id: 102, name: "Mangosteen (Premium)", image: "image copy 102.png", origin: "Thailand", type: "Premium Imported", tag: "exotic", desc: "The gold standard of mangosteens. Large size and perfectly balanced sweet-tangy segments." },
  { id: 103, name: "Akai Berry", image: "image copy 103.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "The world-famous superfood. A beautiful palm tree producing dark purple clusters of antioxidant-rich berries." },
  { id: 104, name: "Thai King Jamun", image: "image copy 107.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Premium Thai Jamun variety known for its exceptionally large size and rich, sweet-tangy flavor. High yielding and vigorous grower." },
  { id: 105, name: "Laxman Phalam", image: "image copy 108.png", origin: "India", type: "Exotic", tag: "exotic", desc: "A rare tropical fruit with sweet, creamy white pulp and numerous health benefits. Also known as Bullock's Heart." },
  { id: 106, name: "Bari Mosambi", image: "image copy 109.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Large-sized sweet lime variety with high juice content. Extremely refreshing and commercially popular." },
  { id: 107, name: "Yellow Mosambi", image: "image copy 110.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "A premium yellow sweet lime with a bright golden hue when ripe. Juicy, sweet, and aromatic." },
  { id: 108, name: "Dragon Fruit", image: "image copy 111.png", origin: "Vietnam", type: "Exotic", tag: "exotic", desc: "Stunning cactus fruit with vibrant pink skin and speckled white or red flesh. Rich in antioxidants and vitamins." },
  { id: 109, name: "Bread Fruit", image: "image copy 112.png", origin: "Pacific Islands", type: "Exotic", tag: "exotic", desc: "Large tropical fruit with starchy flesh that tastes like freshly baked bread when cooked. Highly nutritious staple." },
  { id: 110, name: "Kiwi", image: "image copy 113.png", origin: "New Zealand", type: "Imported Variety", tag: "imported", desc: "Fuzzy brown skin with bright green, tangy-sweet flesh dotted with tiny black seeds. Packed with vitamin C." },
  { id: 111, name: "Bhagava Pomegranate", image: "image copy 114.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "India's most popular pomegranate variety with large, ruby-red arils. Exceptionally sweet with soft seeds." },
  { id: 112, name: "Kaju", image: "image copy 115.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Cashew nut tree producing both the famous nut and a juicy cashew apple. Dual-purpose commercial crop." },
  { id: 113, name: "Olive", image: "image copy 116.png", origin: "Mediterranean", type: "Imported Variety", tag: "imported", desc: "Classic Mediterranean tree producing nutritious olives rich in healthy fats. Hardy and long-lived." },
  { id: 114, name: "Mami Sapota", image: "image copy 117.png", origin: "Central America", type: "Exotic", tag: "exotic", desc: "Also known as Mamey Sapote. Large tropical fruit with salmon-pink flesh that tastes like sweet potato and almond." },
  { id: 115, name: "Ice Cream Bean", image: "image copy 118.png", origin: "South America", type: "Exotic", tag: "exotic", desc: "Long pods containing white, fluffy pulp that tastes remarkably like vanilla ice cream. Fast-growing tropical tree." },
  { id: 116, name: "Black Guava", image: "image copy 119.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Rare guava variety with dark purple-black skin and deep pink flesh. Intensely aromatic and antioxidant-rich." },
  { id: 117, name: "Chilli Mango", image: "image copy 120.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Unique mango variety with a spicy kick. Perfect for pickling and raw consumption with a bold flavor profile." },
  { id: 118, name: "Nam Doc Mai Purple", image: "image copy 121.png", origin: "Thailand", type: "Premium Imported", tag: "imported", desc: "A rare purple-skinned variant of the famous Thai Nam Doc Mai mango. Exceptionally sweet and fiberless." },
  { id: 119, name: "Japanese Red Guava", image: "image copy 122.png", origin: "Japan", type: "Premium Imported", tag: "imported", desc: "Premium Japanese guava with beautiful red flesh and an exquisite sweet-tangy flavor. Highly aromatic and ornamental." },
  { id: 120, name: "Variegated Mango", image: "image copy 123.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Stunning ornamental mango with striking variegated green-and-white leaves. Produces sweet, aromatic fruits." },
  { id: 121, name: "Arunika Mango", image: "image copy 125.png", origin: "India", type: "Exotic", tag: "exotic", desc: "A premium Indian mango variety with vibrant orange flesh and a rich, aromatic sweetness. Excellent for fresh eating and desserts." },
  { id: 122, name: "Bari 11 Mango", image: "image copy 126.png", origin: "Bangladesh", type: "Imported Variety", tag: "imported", desc: "High-yielding Bangladeshi mango cultivar known for its large fruit size, minimal fiber, and consistently sweet flavor profile." },
  { id: 123, name: "Big Amla", image: "image copy 127.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Extra-large Indian gooseberry variety packed with vitamin C. Excellent for medicinal use, pickles, and fresh consumption." },
  { id: 124, name: "Carabao Mango", image: "image copy 128.png", origin: "Philippines", type: "Imported Variety", tag: "imported", desc: "The national fruit of the Philippines, renowned worldwide for its exceptionally sweet, creamy, and fiberless golden flesh." },
  { id: 125, name: "Dalchina Plant", image: "image copy 129.png", origin: "India", type: "Exotic", tag: "exotic", desc: "The true cinnamon plant producing aromatic bark and leaves. Valued for its culinary, medicinal, and ornamental uses." },
  { id: 126, name: "Edward Mango", image: "image copy 130.png", origin: "USA", type: "Imported Variety", tag: "imported", desc: "A popular Florida mango variety with a rich, sweet flavor and minimal fiber. Beautiful yellow-orange skin with a red blush." },
  { id: 127, name: "Egg White Apple", image: "image copy 131.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Rare white-fleshed apple variety adapted for warmer climates. Crisp texture with a mild, refreshing sweetness." },
  { id: 128, name: "Golden Qreen", image: "image copy 132.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Unique Thai fruit variety with a golden-green skin and sweet, aromatic flesh. High yielding and commercially valuable." },
  { id: 129, name: "Grape Guava", image: "image copy 133.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Small, dark purple guava with an intense grape-like flavor. Extremely aromatic and rich in antioxidants. Perfect for jams and fresh eating." },
  { id: 130, name: "Hong Long Mango", image: "image copy 134.png", origin: "Vietnam", type: "Imported Variety", tag: "imported", desc: "Premium Vietnamese mango with elongated shape and bright yellow flesh. Exceptionally sweet with a tropical fragrance." },
  { id: 131, name: "Kalapadi Mango", image: "image copy 135.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Traditional Indian mango variety cherished for its unique sweetness and rich aroma. Excellent for both raw and ripe consumption." },
  { id: 132, name: "Kinnow Orange", image: "image copy 136.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "India's most popular mandarin hybrid with high juice content and a perfect sweet-tangy balance. Widely grown commercially." },
  { id: 133, name: "Lilly Lilly Mango", image: "image copy 137.png", origin: "India", type: "Exotic", tag: "exotic", desc: "A rare Indian mango cultivar with a distinctive floral aroma and buttery smooth flesh. Highly sought after by mango enthusiasts." },
  { id: 134, name: "Mithra Guava", image: "image copy 138.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "High-yielding Indian guava variety with large, sweet fruits and pink flesh. Excellent vitamin C content and commercial viability." },
  { id: 135, name: "Nagpur Orange", image: "image copy 139.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "India's most famous orange from the 'Orange City' Nagpur. Bright color, juicy segments, and perfectly balanced sweet-tangy taste." },
  { id: 136, name: "Phalsa Fruit", image: "image copy 140.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Small, dark purple berries with a refreshing sweet-sour taste. Highly valued for summer sherbets and traditional medicine." },
  { id: 137, name: "Salaya Mango", image: "image copy 141.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "A premium Thai mango variety known for its smooth, fiberless pulp and intense tropical sweetness. Excellent dessert quality." },
  { id: 138, name: "Sonpari Mango", image: "image copy 142.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Popular Indian mango variety with golden-yellow skin and exceptionally sweet, aromatic flesh. Great for commercial cultivation." },
  { id: 139, name: "Tommy Atkins Mango", image: "image copy 143.png", origin: "USA", type: "Imported Variety", tag: "imported", desc: "The world's most commercially grown mango. Beautiful red-green skin with firm, mildly sweet flesh and excellent shelf life." },
  { id: 140, name: "Salak Red", image: "image copy 144.png", origin: "Indonesia", type: "Exotic", tag: "exotic", desc: "Also known as Snake Fruit due to its reddish-brown scaly skin. Sweet, crunchy flesh with a unique tropical flavor." },
  { id: 141, name: "Apricot", image: "image copy 145.png", origin: "Turkey", type: "Imported Variety", tag: "imported", desc: "Beautiful golden-orange stone fruit with velvety skin and sweet, aromatic flesh. Rich in vitamins A and C." },
  { id: 142, name: "AK Supreme Avacado", image: "image copy 146.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Premium avocado variety with creamy, buttery flesh and high oil content. Excellent for both commercial and home gardens." },
  { id: 143, name: "Black Surnam Cherry", image: "image copy 147.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Dark-skinned Surinam cherry with intensely sweet flavor when fully ripe. Rich in antioxidants and vitamins." },
  { id: 144, name: "Black Sapota", image: "image copy 148.png", origin: "Mexico", type: "Exotic", tag: "exotic", desc: "Also called Chocolate Pudding Fruit. The dark brown flesh tastes remarkably like chocolate mousse when ripe." },
  { id: 145, name: "Bali Chamba", image: "image copy 149.png", origin: "Indonesia", type: "Imported Variety", tag: "imported", desc: "A rare Balinese fruit variety with sweet, fragrant flesh and excellent tropical adaptability. Highly prized by collectors." },
  { id: 146, name: "Cupasoo", image: "image copy 150.png", origin: "Brazil", type: "Exotic", tag: "exotic", desc: "Amazonian superfruit related to cacao. Creamy white pulp with a unique blend of chocolate and tropical flavors." },
  { id: 147, name: "Chupa Chupa", image: "image copy 151.png", origin: "Colombia", type: "Exotic", tag: "exotic", desc: "Large tropical fruit with bright orange flesh that tastes like a mix of mango and apricot. Very aromatic and nutritious." },
  { id: 148, name: "Governer Plum", image: "image copy 152.png", origin: "South Africa", type: "Exotic", tag: "exotic", desc: "Tart and tangy small plum used in jams and preserves. Hardy tropical tree with beautiful ornamental value." },
  { id: 149, name: "Egyptian Guava", image: "image copy 153.png", origin: "Egypt", type: "Imported Variety", tag: "imported", desc: "Premium guava variety from Egypt with extra-sweet white flesh and minimal seeds. Excellent crunch and aroma." },
  { id: 150, name: "Green Sapota", image: "image copy 154.png", origin: "Central America", type: "Exotic", tag: "exotic", desc: "Unique sapota variety with green skin even when ripe. Sweet, smooth flesh with a distinctive caramel-like flavor." },
  { id: 151, name: "Jalpai", image: "image copy 155.png", origin: "India", type: "Exotic", tag: "exotic", desc: "Indian olive-like fruit commonly used in pickles and chutneys. Tangy when raw and sweet when ripe. Rich in vitamin C." },
  { id: 152, name: "Lamb Hass Avacado", image: "image copy 156.png", origin: "USA", type: "Imported Variety", tag: "imported", desc: "A premium avocado variety with larger fruit size than Hass. Rich, creamy texture with excellent nutty flavor and high yield." },
  { id: 153, name: "Langsat Fruit", image: "image copy 157.png", origin: "Malaysia", type: "Exotic", tag: "exotic", desc: "Small, translucent fruit with sweet-sour flesh in grape-like clusters. Refreshing tropical delicacy popular in Southeast Asia." },
  { id: 154, name: "Macotadeva", image: "image copy 158.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Rare Thai tropical fruit with aromatic flesh and unique sweet flavor profile. Highly sought after by exotic fruit collectors." },
  { id: 155, name: "Mini Musambi", image: "image copy 159.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Compact sweet lime variety producing small, intensely juicy fruits. Perfect for container gardening and home orchards." },
  { id: 156, name: "Elama Pink", image: "image copy 160.png", origin: "Thailand", type: "Exotic", tag: "exotic", desc: "Beautiful pink-fleshed custard apple variety with minimal seeds and extra-sweet, creamy texture. Highly ornamental." },
  { id: 157, name: "Aavocada Pinktron", image: "image copy 161.png", origin: "USA", type: "Exotic", tag: "exotic", desc: "Distinctive avocado variety with pinkish-hued flesh and a rich, buttery taste. Unique addition to any fruit garden." },
  { id: 158, name: "Terrangganu Cherry", image: "image copy 162.png", origin: "Malaysia", type: "Exotic", tag: "exotic", desc: "Malaysian tropical cherry with bright red fruits and sweet-tangy flavor. Prolific bearer and beautiful ornamental tree." },
  { id: 159, name: "Red Tamarind", image: "image copy 163.png", origin: "Thailand", type: "Imported Variety", tag: "imported", desc: "Stunning red-podded tamarind variety with a perfect balance of sweet and tangy. Rich in vitamins and minerals." },
  { id: 160, name: "Anona Spanisis", image: "image copy 164.png", origin: "Spain", type: "Imported Variety", tag: "imported", desc: "Spanish custard apple variety with large fruit size and exceptionally creamy, sweet white flesh. Minimal seeds." },
  { id: 161, name: "Chowsah Anwar Lathore Mango", image: "image copy 165.png", origin: "Pakistan", type: "Imported Variety", tag: "imported", desc: "Prized Pakistani mango variety known for its intense sweetness, rich aroma, and smooth fiberless flesh." },
  { id: 162, name: "Big Leaf Anjeer", image: "image copy 166.png", origin: "India", type: "Best Seller", tag: "bestseller", desc: "Large-leaved fig variety producing sweet, honey-like fruits. Excellent for fresh eating, drying, and ornamental purposes." },
  { id: 163, name: "Sweet Cherry", image: "image copy 167.png", origin: "USA", type: "Imported Variety", tag: "imported", desc: "Classic sweet cherry with deep red skin and juicy, sugary flesh. A beloved fruit worldwide for fresh eating and desserts." },
  { id: 164, name: "Isreal Mango", image: "image copy 168.png", origin: "Israel", type: "Imported Variety", tag: "imported", desc: "Premium Israeli mango cultivar with vibrant color, fiberless flesh, and an exceptionally sweet tropical flavor profile." },
];

// Note: Removed IDs 98 and 99 if they were missing from the user's specific list provided, 
// or ensured the sequence matches the image names provided.

// ── Tag labels ──
const tagLabels = {
  imported: { text: "⭐ Imported", class: "tag-imported" },
  exotic:   { text: "Exotic",   class: "tag-exotic" },
  bestseller: { text: "Best Seller", class: "tag-bestseller" }
};

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  renderFruitScroll();
  renderPlantsGrid(plantsData);
  renderGallery();
  initLetterAnimation();
  initPlantsFilter();
  initLightbox();
});

// ══════════════════════════════════════
// NAVBAR
// ══════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.querySelectorAll('a[data-section]').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-section') === current);
    });
  });
}

// ══════════════════════════════════════
// SCROLL ANIMATIONS
// ══════════════════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
    observer.observe(el);
  });
}

// ══════════════════════════════════════
// FRUIT SCROLL
// ══════════════════════════════════════
function renderFruitScroll() {
  const track = document.getElementById('fruitScrollTrack');
  // Use first 20 plants for scroll, duplicated for infinite effect
  const scrollPlants = plantsData.slice(0, 20);
  const allItems = [...scrollPlants, ...scrollPlants]; // duplicate for seamless loop

  track.innerHTML = allItems.map((plant, index) => `
    <div class="fruit-scroll-item">
      <img class="fruit-scroll-img" src="${plant.image}" alt="${plant.name}" 
           ${index < 6 ? 'fetchpriority="high"' : ''}>
      <span class="fruit-scroll-name">${plant.name}</span>
    </div>
  `).join('');
}

// ══════════════════════════════════════
// PLANTS GRID
// ══════════════════════════════════════
function renderPlantsGrid(plants) {
  const grid = document.getElementById('plantsGrid');
  grid.innerHTML = plants.map((plant, index) => {
    const tag = tagLabels[plant.tag];
    // Remove loading="lazy" for the first 8 items for "instant" appearance
    const isPriority = index < 8;
    return `
      <div class="plant-card fade-in" data-tag="${plant.tag}" 
           onclick="openPlantModal(${plant.id})" 
           style="transition-delay: ${Math.min(index * 0.04, 0.5)}s"
           id="plant-card-${plant.id}">
        <div class="plant-card-image">
          ${tag ? `<span class="plant-tag ${tag.class}">${tag.text}</span>` : ''}
          <img src="${plant.image}" alt="${plant.name}" 
               ${isPriority ? 'fetchpriority="high"' : 'loading="lazy"'}
          >
        </div>
        <div class="plant-card-body">
          <h3 class="plant-card-name">${plant.name}</h3>
          <p class="plant-card-origin">${plant.type} • ${plant.origin}</p>
          <span class="plant-card-type">🌱 Fruit Plant</span>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe new elements
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.05 });
    grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}

// ══════════════════════════════════════
// PLANT FILTER
// ══════════════════════════════════════
function initPlantsFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderPlantsGrid(plantsData);
      } else {
        renderPlantsGrid(plantsData.filter(p => p.tag === filter));
      }
    });
  });
}

// ══════════════════════════════════════
// PLANT MODAL
// ══════════════════════════════════════
function openPlantModal(id) {
  const plant = plantsData.find(p => p.id === id);
  if (!plant) return;

  const modal = document.getElementById('plantModal');
  document.getElementById('modalImage').src = plant.image;
  document.getElementById('modalImage').alt = plant.name;
  document.getElementById('modalName').textContent = plant.name;
  document.getElementById('modalOrigin').textContent = `${plant.type} • ${plant.origin}`;
  document.getElementById('modalCategory').textContent = 'Fruit Plant';
  document.getElementById('modalType').textContent = plant.type;
  document.getElementById('modalOriginDetail').textContent = plant.origin;
  document.getElementById('modalDesc').textContent = plant.desc;
  document.getElementById('modalWhatsApp').href = 
    `https://wa.me/919949492854?text=Hi%20Tirumala%20Nursery!%20I'm%20interested%20in%20${encodeURIComponent(plant.name)}.%20Please%20share%20details.`;

  // Animate name letter by letter
  const nameEl = document.getElementById('modalName');
  const originalText = plant.name;
  nameEl.innerHTML = '';
  [...originalText].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateX(-20px)';
    span.style.transition = `all 0.4s ease ${i * 0.04}s`;
    nameEl.appendChild(span);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    nameEl.querySelectorAll('span').forEach(s => {
      s.style.opacity = '1';
      s.style.transform = 'translateX(0)';
    });
  }, 200);
}

function closePlantModal() {
  document.getElementById('plantModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closePlantModal);
document.getElementById('plantModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closePlantModal();
});

// ══════════════════════════════════════
// GALLERY
// ══════════════════════════════════════
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  // Select 12 images for gallery
  const galleryIndices = [4, 8, 17, 26, 6, 11, 38, 58, 72, 95, 29, 42];
  grid.innerHTML = galleryIndices.map((idx, i) => {
    const plant = plantsData[idx - 1] || plantsData[0];
    return `
      <div class="gallery-item fade-in" style="transition-delay: ${i * 0.06}s"
           onclick="openLightbox(${i}, 'gallery')">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy">
      </div>
    `;
  }).join('');

  // Store gallery images for lightbox
  window.galleryImages = galleryIndices.map(idx => {
    const plant = plantsData[idx - 1] || plantsData[0];
    return { src: plant.image, name: plant.name };
  });

  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}

// ══════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════
let currentLightboxIndex = 0;
let lightboxImages = [];

function initLightbox() {
  // Build full lightbox image array from all plants
  window.allPlantImages = plantsData.map(p => ({ src: p.image, name: p.name }));

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));
  
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Touch/swipe support
  let touchStartX = 0;
  const lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? 1 : -1);
    }
  }, { passive: true });
}

function openLightbox(index, source) {
  if (source === 'gallery') {
    lightboxImages = window.galleryImages;
  } else {
    lightboxImages = window.allPlantImages;
  }
  currentLightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  const img = document.getElementById('lightboxImage');
  img.style.opacity = '0';
  setTimeout(() => {
    updateLightbox();
    img.style.opacity = '1';
  }, 150);
}

function updateLightbox() {
  const item = lightboxImages[currentLightboxIndex];
  document.getElementById('lightboxImage').src = item.src;
  document.getElementById('lightboxImage').alt = item.name;
  document.getElementById('lightboxCaption').textContent = item.name;
  document.getElementById('lightboxCounter').textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
}

// ══════════════════════════════════════
// LETTER ANIMATION (Plants heading)
// ══════════════════════════════════════
function initLetterAnimation() {
  const heading = document.getElementById('plantsHeading');
  if (!heading) return;
  const text = heading.textContent;
  heading.innerHTML = '';
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        [...text].forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.animationDelay = `${i * 0.05}s`;
          heading.appendChild(span);
        });
        observer.unobserve(heading);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(heading);
}

// ══════════════════════════════════════
// CONTACT FORM → WHATSAPP
// ══════════════════════════════════════
function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const message = document.getElementById('form-message').value;
  const text = `Hi Tirumala Nursery! My name is ${name}. ${message}`;
  window.open(`https://wa.me/919949492854?text=${encodeURIComponent(text)}`, '_blank');
}

// ══════════════════════════════════════
// SMOOTH SCROLL HELPER
// ══════════════════════════════════════
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
