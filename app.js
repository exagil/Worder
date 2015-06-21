var worder = angular.module('Worder', ['LocalStorageModule', 'ngToast']);

worder.controller('ApplicationController', [
	'$scope', 'dictionary', 'ngToast',
	function($scope, dictionary, ngToast) {

		var wordList = dictionary.getWords(20);
		
		var formatWord = function(word){
			var updatedWord = "";
			updatedWord = updatedWord.concat(word[0]);
			var wordLength = word.length;
			for(var i=1; i < wordLength - 1; i++){
				updatedWord = updatedWord.concat("*");
			}
			updatedWord = updatedWord.concat(word[wordLength-1])
			return updatedWord;
		}

		$scope.displayWord = false;

		$scope.checker = function(){
			var res = prompt("What's the word?");
			if (res === $scope.word[0]){
				ngToast.create(['Awesome!', "You're Doing Good", "Brilliant!"][Math.floor(Math.random() * 3)]);
				$scope.getRandomWord();
			} else {
				alert("Oops! The word was " + $scope.word[0]);
			}
		}

		$scope.getRandomWord = function(){
			console.log("Inside Random Word");
			$scope.displayWord = false;
			var wordObject = wordList[Math.floor(Math.random() * 20)];
			var wordArray = [];
			for(var key in wordObject){
				wordArray.push(key);
				wordArray.push(wordObject[key]);
			}
			wordArray.push(formatWord(key));
			$scope.word = wordArray;
		};

		$scope.showWord = function(){
			return $scope.word[0];
		};

	}
]);

worder.factory('dictionary', [
	function() {
		var data = [{
			"abase": "To lower in position, estimation, or the like; degrade"
		}, {
			"abbess": "The lady superior of a nunnery"
		}, {
			"abbey": "The group of buildings which collectively form the dwelling-place of a society of monks or nuns"
		}, {
			"abbot": "The superior of a community of monks"
		}, {
			"abdicate": "To give up (royal power or the like)"
		}, {
			"abdomen": "In mammals, the visceral cavity between the diaphragm and the pelvic floor; the belly"
		}, {
			"abdominal": "Of, pertaining to, or situated on the abdomen"
		}, {
			"abduction": "A carrying away of a person against his will, or illegally"
		}, {
			"abed": "In bed; on a bed"
		}, {
			"aberration": "Deviation from a right, customary, or prescribed course"
		}, {
			"abet": "To aid, promote, or encourage the commission of (an offense)"
		}, {
			"abeyance": "A state of suspension or temporary inaction"
		}, {
			"abhorrence": "The act of detesting extremely"
		}, {
			"abhorrent": "Very repugnant; hateful"
		}, {
			"abidance": "An abiding"
		}, {
			"abject": "Sunk to a low condition"
		}, {
			"abjure": "To recant, renounce, repudiate under oath"
		}, {
			"able-bodied": "Competent for physical service"
		}, {
			"ablution": "A washing or cleansing, especially of the body"
		}, {
			"abnegate": "To renounce (a right or privilege)"
		}, {
			"abnormal": "Not conformed to the ordinary rule or standard"
		}, {
			"abominable": "Very hateful"
		}, {
			"abominate": "To hate violently"
		}, {
			"abomination": "A very detestable act or practice"
		}, {
			"aboriginal": "Primitive; unsophisticated"
		}, {
			"aborigines": "The original of earliest known inhabitants of a country"
		}, {
			"aboveboard ": "Without concealment, fraud, or trickery"
		}, {
			"abrade": "To wear away the surface or some part of by friction"
		}, {
			"abrasion": "That which is rubbed off"
		}, {
			"abridge": "To make shorter in words, keeping the essential features, leaning out minor particles"
		}, {
			"abridgment": "A condensed form as of a book or play"
		}, {
			"abrogate": "To abolish, repeal"
		}, {
			"abrupt": "Beginning, ending, or changing suddenly or with a break"
		}, {
			"abscess": "A Collection of pus in a cavity formed within some tissue of the body"
		}, {
			"abscission": "The act of cutting off, as in a surgical operation"
		}, {
			"abscond": "To depart suddenly and secretly, as for the purpose of escaping arrest"
		}, {
			"absence": "The fact of not being present or available"
		}, {
			"absent-minded": "Lacking in attention to immediate surroundings or business"
		}, {
			"absolution": "Forgiveness, or passing over of offenses"
		}, {
			"absolve": "To free from sin or its penalties"
		}, {
			"absorb": "To drink in or suck up, as a sponge absorbs water"
		}, {
			"absorption": "The act or process of absorbing"
		}, {
			"abstain": "To keep oneself back (from doing or using something)"
		}, {
			"abstemious": "Characterized by self denial or abstinence, as in the use of drink, food"
		}, {
			"abstinence": "Self denial"
		}, {
			"abstruse": "Dealing with matters difficult to be understood"
		}, {
			"absurd": "Inconsistent with reason or common sense"
		}, {
			"abundant": "Plentiful"
		}, {
			"abusive": "Employing harsh words or ill treatment"
		}, {
			"abut": "To touch at the end or boundary line"
		}, {
			"abyss": "Bottomless gulf"
		}, {
			"academic": "Of or pertaining to an academy, college, or university"
		}, {
			"academician": "A member of an academy of literature, art, or science"
		}, {
			"academy": "Any institution where the higher branches of learning are taught"
		}, {
			"accede": "To agree"
		}, {
			"accelerate": "To move faster"
		}, {
			"accept": "To take when offered"
		}, {
			"access": "A way of approach or entrance; passage"
		}, {
			"accessible": "Approachable"
		}, {
			"accession": "Induction or elevation, as to dignity, office, or government"
		}, {
			"accessory": "A person or thing that aids the principal agent"
		}, {
			"acclaim": "To utter with a shout"
		}, {
			"accommodate": "To furnish something as a kindness or favor"
		}, {
			"accompaniment": "A subordinate part or parts, enriching or supporting the leading part"
		}, {
			"accompanist": "One who or that which accompanies"
		}, {
			"accompany": "To go with, or be associated with, as a companion"
		}, {
			"accomplice": "An associate in wrong-doing"
		}, {
			"accomplish": "To bring to pass"
		}, {
			"accordion": "A portable free-reed musical instrument"
		}, {
			"accost": "To speak to"
		}, {
			"account": "A record or statement of receipts and expenditures, or of business transactions"
		}, {
			"accouter": "To dress"
		}, {
			"accredit": "To give credit or authority to"
		}, {
			"accumulate": "To become greater in quantity or number"
		}, {
			"accuracy": "Exactness"
		}, {
			"accurate": "Conforming exactly to truth or to a standard"
		}, {
			"accursed": "Doomed to evil, misery, or misfortune"
		}, {
			"accusation": "A charge of crime, misdemeanor, or error"
		}, {
			"accusatory": "Of, pertaining to, or involving an accusation"
		}, {
			"accuse": "To charge with wrong doing, misconduct, or error"
		}, {
			"accustom": "To make familiar by use"
		}, {
			"acerbity": "Sourness, with bitterness and astringency"
		}, {
			"acetate": "A salt of acetic acid"
		}, {
			"acetic": "Of, pertaining to, or of the nature of vinegar"
		}, {
			"ache": "To be in pain or distress"
		}, {
			"Achillean": "Invulnerable"
		}, {
			"achromatic": "Colorless,"
		}, {
			"acid": "A sour substance"
		}, {
			"acidify": "To change into acid"
		}, {
			"acknowledge": "To recognize; to admit the genuineness or validity of"
		}, {
			"acknowledgment": "Recognition"
		}, {
			"acme": "The highest point, or summit"
		}, {
			"acoustic": "Pertaining to the act or sense of hearing"
		}, {
			"acquaint": "To make familiar or conversant"
		}, {
			"acquiesce": "To comply; submit"
		}, {
			"acquiescence": "Passive consent"
		}, {
			"acquire": "To get as one's own"
		}, {
			"acquisition": "Anything gained, or made one's own, usually by effort or labor"
		}, {
			"acquit": "To free or clear, as from accusation"
		}, {
			"acquittal": "A discharge from accusation by judicial action"
		}, {
			"acquittance": "Release or discharge from indebtedness, obligation, or responsibility"
		}, {
			"acreage": "Quantity or extent of land, especially of cultivated land"
		}, {
			"acrid": "Harshly pungent or bitter"
		}, {
			"acrimonious": "Full of bitterness"
		}, {
			"acrimony": "Sharpness or bitterness of speech or temper"
		}, {
			"actionable": "Affording cause for instituting an action, as trespass, slanderous words"
		}, {
			"actuality": "Any reality"
		}, {
			"actuary": "An officer, as of an insurance company, who calculates and states the risks and premiums"
		}, {
			"actuate": "To move or incite to action"
		}, {
			"acumen": "Quickness of intellectual insight, or discernment; keenness of discrimination"
		}, {
			"acute": "Having fine and penetrating discernment"
		}, {
			"adamant": "Any substance of exceeding hardness or impenetrability"
		}, {
			"addendum": "Something added, or to be added"
		}, {
			"addle": "To make inefficient or worthless; muddle"
		}, {
			"adduce": "To bring forward or name for consideration"
		}, {
			"adhere": "To stick fast or together"
		}, {
			"adherence": "Attachment"
		}, {
			"adherent": "Clinging or sticking fast"
		}, {
			"adhesion": "The state of being attached or joined"
		}, {
			"adieu": "Good-by; farewell"
		}, {
			"adjacency": "The state of being adjacent"
		}, {
			"adjacent": "That which is near or bordering upon"
		}, {
			"adjudge": "To award or bestow by formal decision"
		}, {
			"adjunct": "Something joined to or connected with another thing, but holding a subordinate place"
		}, {
			"adjuration": "A vehement appeal"
		}, {
			"adjutant": "Auxiliary"
		}, {
			"administrator": "One who manages affairs of any kind"
		}, {
			"admissible": "Having the right or privilege of entry"
		}, {
			"admittance": "Entrance, or the right or permission to enter"
		}, {
			"admonish": "To warn of a fault"
		}, {
			"admonition": "Gentle reproof"
		}, {
			"ado": "unnecessary activity or ceremony"
		}, {
			"adoration": "Profound devotion"
		}, {
			"adroit": "Having skill in the use of the bodily or mental powers"
		}, {
			"adulterant": "An adulterating substance"
		}, {
			"adulterate": "To make impure by the admixture of other or baser ingredients"
		}, {
			"adumbrate": "To represent beforehand in outline or by emblem"
		}, {
			"advent": "The coming or arrival, as of any important change, event, state, or personage"
		}, {
			"adverse": "Opposing or opposed"
		}, {
			"adversity": "Misfortune"
		}, {
			"advert": "To refer incidentally"
		}, {
			"advertiser": "One who advertises, especially in newspapers"
		}, {
			"advisory": "Not mandatory"
		}, {
			"advocacy": "The act of pleading a cause"
		}, {
			"advocate": "One who pleads the cause of another, as in a legal or ecclesiastical court"
		}, {
			"aerial": "Of, pertaining to, or like the air"
		}, {
			"aeronaut": "One who navigates the air, a balloonist"
		}, {
			"aeronautics": "the art or practice of flying aircraft"
		}, {
			"aerostat": "A balloon or other apparatus floating in or sustained by the air"
		}, {
			"aerostatics": "The branch of pneumatics that treats of the equilibrium, pressure, and mechanical properties"
		}, {
			"affable": "Easy to approach"
		}, {
			"affect": "To act upon"
		}, {
			"affectation": "A studied or ostentatious pretense or attempt"
		}, {
			"affiliate": "Some auxiliary person or thing"
		}, {
			"affirmative": "Answering yes; to a question at issue"
		}, {
			"affix": "To fasten"
		}, {
			"affluence": "A profuse or abundant supply of riches"
		}, {
			"affront": "An open insult or indignity"
		}, {
			"afire": "On fire, literally or figuratively"
		}, {
			"afoot": "In progress"
		}, {
			"aforesaid": "Said in a preceding part or before"
		}, {
			"afresh": "Once more, after rest or interval"
		}, {
			"afterthought": "A thought that comes later than its appropriate or expected time"
		}, {
			"agglomerate": "To pile or heap together"
		}, {
			"aggrandize": "To cause to appear greatly"
		}, {
			"aggravate": "To make heavier, worse, or more burdensome"
		}, {
			"aggravation": "The fact of being made heavier or more heinous, as a crime , offense, misfortune, etc"
		}, {
			"aggregate": "The entire number, sum, mass, or quantity of something"
		}, {
			"aggress": "To make the first attack"
		}, {
			"aggression": "An unprovoked attack"
		}, {
			"aggrieve": "To give grief or sorrow to"
		}, {
			"aghast": "Struck with terror and amazement"
		}, {
			"agile": "Able to move or act quickly, physically, or mentally"
		}, {
			"agitate": "To move or excite (the feelings or thoughts)"
		}, {
			"agrarian": "Pertaining to land, especially agricultural land"
		}, {
			"aide-de-camp": "An officer who receives and transmits the orders of the general"
		}, {
			"ailment": "Slight sickness"
		}, {
			"airy": "Delicate, ethereal"
		}, {
			"akin": "Of similar nature or qualities"
		}, {
			"alabaster": "A white or delicately tinted fine-grained gypsum"
		}, {
			"alacrity": "Cheerful willingness"
		}, {
			"albeit": "Even though"
		}, {
			"albino": "A person with milky white skin and hair, and eyes with bright red pupil and usually pink iris"
		}, {
			"album": "A book whose leaves are so made to form paper frames for holding photographs or the like"
		}, {
			"alchemy": "Chemistry of the middle ages, characterized by the pursuit of changing base metals to gold"
		}, {
			"alcohol": "A volatile, inflammable, colorless liquid of a penetrating odor and burning taste"
		}, {
			"alcoholism": "A condition resulting from the inordinate or persistent use of alcoholic beverages"
		}, {
			"alcove": "A covered recess connected with or at the side of a larger room"
		}, {
			"alder": "Any shrub or small tree of the genus Alumnus, of the oak family"
		}, {
			"alderman": "A member of a municipal legislative body, who usually exercises also certain judicial functions"
		}, {
			"aldermanship": "The dignity, condition, office, or term of office of an alderman"
		}, {
			"alias": "An assumed name"
		}, {
			"alien": "One who owes allegiance to a foreign government"
		}, {
			"alienable": "Capable of being aliened or alienated, as lands"
		}, {
			"alienate": "To cause to turn away"
		}, {
			"alienation": "Estrangement"
		}, {
			"aliment": "That which nourishes"
		}, {
			"alkali": "Anything that will neutralize an acid, as lime, magnesia, etc"
		}, {
			"allay": "To calm the violence or reduce the intensity of; mitigate"
		}, {
			"allege": "To assert to be true, especially in a formal manner, as in court"
		}, {
			"allegory": "The setting forth of a subject under the guise of another subject of aptly suggestive likeness"
		}, {
			"alleviate": "To make less burdensome or less hard to bear"
		}, {
			"alley": "A narrow street, garden path, walk, or the like"
		}, {
			"alliance": "Any combination or union for some common purpose"
		}, {
			"allot": "To assign a definite thing or part to a certain person"
		}, {
			"allotment": "Portion"
		}, {
			"allude": "To refer incidentally, or by suggestion"
		}, {
			"allusion": "An indirect and incidental reference to something without definite mention of it"
		}, {
			"alluvion": "Flood"
		}, {
			"ally": "A person or thing connected with another, usually in some relation of helpfulness"
		}, {
			"almanac": "A series of tables giving the days of the week together with certain astronomical information"
		}, {
			"aloof": "Not in sympathy with or desiring to associate with others"
		}, {
			"altar": "Any raised place or structure on which sacrifices may be offered or incense burned"
		}, {
			"alter": "To make change in"
		}, {
			"alteration": "Change or modification"
		}, {
			"altercate": "To contend angrily or zealously in words"
		}, {
			"alternate": "One chosen to act in place of another, in case of the absence or incapacity of that other"
		}, {
			"alternative": "Something that may or must exist, be taken or chosen, or done instead of something else"
		}, {
			"altitude": "Vertical distance or elevation above any point or base-level, as the sea"
		}, {
			"alto": "The lowest or deepest female voice or part"
		}, {
			"altruism": "Benevolence to others on subordination to self-interest"
		}, {
			"altruist": "One who advocates or practices altruism"
		}, {
			"amalgam": "An alloy or union of mercury with another metal"
		}, {
			"amalgamate": "To mix or blend together in a homogeneous body"
		}, {
			"amateur": "Practicing an art or occupation for the love of it, but not as a profession"
		}, {
			"amatory": "Designed to excite love"
		}, {
			"ambidextrous": "Having the ability of using both hands with equal skill or ease"
		}, {
			"ambiguous": "Having a double meaning"
		}, {
			"ambitious": "Eagerly desirous and aspiring"
		}, {
			"ambrosial": "Divinely sweet, fragrant, or delicious"
		}, {
			"ambulance": "A vehicle fitted for conveying the sick and wounded"
		}, {
			"ambulate": "To walk about"
		}, {
			"ambush": "The act or state of lying concealed for the purpose of surprising or attacking the enemy"
		}, {
			"ameliorate": "To relieve, as from pain or hardship"
		}, {
			"amenable": "Willing and ready to submit"
		}, {
			"Americanism": "A peculiar sense in which an English word or phrase is used in the United States"
		}, {
			"amicable": "Done in a friendly spirit"
		}, {
			"amity": "Friendship"
		}, {
			"amorous": "Having a propensity for falling in love"
		}, {
			"amorphous": "Without determinate shape"
		}, {
			"amour": "A love-affair, especially one of an illicit nature"
		}, {
			"ampere": "The practical unit of electric-current strength"
		}, {
			"ampersand": "The character &; and"
		}, {
			"amphibious": "Living both on land and in water"
		}, {
			"amphitheater": "An edifice of elliptical shape, constructed about a central open space or arena"
		}, {
			"amplitude": "Largeness"
		}, {
			"amply": "Sufficiently"
		}, {
			"amputate": "To remove by cutting, as a limb or some portion of the body"
		}, {
			"amusement": "Diversion"
		}, {
			"anachronism": "Anything occurring or existing out of its proper time"
		}, {
			"anagram": "The letters of a word or phrase so transposed as to make a different word or phrase"
		}, {
			"analogous": "Corresponding (to some other) in certain respects, as in form, proportion, relations"
		}, {
			"analogy": "Reasoning in which from certain and known relations or resemblance others are formed"
		}, {
			"analyst": "One who analyzes or makes use of the analytical method"
		}, {
			"analyze": "To examine minutely or critically"
		}, {
			"anarchy": "Absence or utter disregard of government"
		}, {
			"anathema": "Anything forbidden, as by social usage"
		}, {
			"anatomy": "That branch of morphology which treats of the structure of organisms"
		}, {
			"ancestry": "One's ancestors collectively"
		}, {
			"anecdote": "A brief account of some interesting event or incident"
		}, {
			"anemia": "Deficiency of blood or red corpuscles"
		}, {
			"anemic": "Affected with anemia"
		}, {
			"anemometer": "An instrument for measuring the force or velocity of wind"
		}, {
			"anesthetic": "Pertaining to or producing loss of sensation"
		}, {
			"anew": "Once more"
		}, {
			"angelic": "Saintly"
		}, {
			"Anglophobia": "Hatred or dread of England or of what is English"
		}, {
			"Anglo-Saxon": "The entire English race wherever found, as in Europe, the United States, or India"
		}, {
			"angular": "Sharp-cornered"
		}, {
			"anhydrous": "Withered"
		}, {
			"animadversion": "The utterance of criticism or censure"
		}, {
			"animadvert": "To pass criticism or censure"
		}, {
			"animalcule": "An animal of microscopic smallness"
		}, {
			"animate": "To make alive"
		}, {
			"animosity": "Hatred"
		}, {
			"annalist": "Historian"
		}, {
			"annals": "A record of events in their chronological order, year by year"
		}, {
			"annex": "To add or affix at the end"
		}, {
			"annihilate": "To destroy absolutely"
		}, {
			"annotate": "To make explanatory or critical notes on or upon"
		}, {
			"annual": "Occurring every year"
		}, {
			"annuity": "An annual allowance, payment, or income"
		}, {
			"annunciation": "Proclamation"
		}, {
			"anode": "The point where or path by which a voltaic current enters an electrolyte or the like"
		}, {
			"anonymous": "Of unknown authorship"
		}, {
			"antagonism": "Mutual opposition or resistance of counteracting forces, principles, or persons"
		}, {
			"Antarctic": "Pertaining to the south pole or the regions near it"
		}, {
			"ante": "In the game of poker, to put up a stake before the cards are dealt"
		}, {
			"antecede": "To precede"
		}, {
			"antecedent": "One who or that which precedes or goes before, as in time, place, rank, order, or causality"
		}, {
			"antechamber": "A waiting room for those who seek audience"
		}, {
			"antedate": "To assign or affix a date to earlier than the actual one"
		}, {
			"antediluvian": "Of or pertaining to the times, things, events before the great flood in the days of Noah"
		}, {
			"antemeridian": "Before noon"
		}, {
			"antemundane": "Pertaining to time before the world's creation"
		}, {
			"antenatal": "Occurring or existing before birth"
		}, {
			"anterior": "Prior"
		}, {
			"anteroom": "A room situated before and opening into another, usually larger"
		}, {
			"anthology": "A collection of extracts from the writings of various authors"
		}, {
			"anthracite": "Hard coal"
		}, {
			"anthropology": "The science of man in general"
		}, {
			"anthropomorphous": "Having or resembling human form"
		}, {
			"antic": "A grotesque, ludicrous, or fantastic action"
		}, {
			"Antichrist": "Any opponent or enemy of Christ, whether a person or a power"
		}, {
			"anticlimax": "A gradual or sudden decrease in the importance or impressiveness of what is said"
		}, {
			"anticyclone": "An atmospheric condition of high central pressure, with currents flowing outward"
		}, {
			"antidote": "Anything that will counteract or remove the effects of poison, disease, or the like"
		}, {
			"antilogy": "Inconsistency or contradiction in terms or ideas"
		}, {
			"antipathize": "To show or feel a feeling of antagonism, aversion, or dislike"
		}, {
			"antiphon": "A response or alteration of responses, generally musical"
		}, {
			"antiphony": "An anthem or other composition sung responsively"
		}, {
			"antipodes": "A place or region on the opposite side of the earth"
		}, {
			"antiquary": "One who collects and examines old things, as coins, books, medals, weapons, etc"
		}, {
			"antiquate": "To make old or out of date"
		}, {
			"antique": "Pertaining to ancient times"
		}, {
			"antiseptic": "Anything that destroys or restrains the growth of putrefactive micro-organisms"
		}, {
			"antislavery": "Opposed to human slavery"
		}, {
			"antispasmodic": "Tending to prevent or relieve non-inflammatory spasmodic affections"
		}, {
			"antistrophe": "The inversion of terms in successive classes, as in \"the home of joy and the joy of home\""
		}, {
			"antitoxin": "A substance which neutralizes the poisonous products of micro-organisms"
		}, {
			"antonym": "A word directly opposed to another in meaning"
		}, {
			"anxious": "Distressed in mind respecting some uncertain matter"
		}, {
			"apathy": "Insensibility to emotion or passionate feeling"
		}, {
			"aperture": "Hole"
		}, {
			"apex": "The highest point, as of a mountain"
		}, {
			"aphorism": "Proverb"
		}, {
			"apiary": "A place where bees are kept"
		}, {
			"apogee": "The climax"
		}, {
			"apology": "A disclaimer of intentional error or offense"
		}, {
			"apostasy": "A total departure from one's faith or religion"
		}, {
			"apostate": "False"
		}, {
			"apostle": "Any messenger commissioned by or as by divine authority"
		}, {
			"apothecary": "One who keeps drugs for sale and puts up prescriptions"
		}, {
			"apotheosis": "Deification"
		}, {
			"appall": "To fill with dismay or horror"
		}, {
			"apparent": "Easily understood"
		}, {
			"apparition": "Ghost"
		}, {
			"appease": "To soothe by quieting anger or indignation"
		}, {
			"appellate": "Capable of being appealed to"
		}, {
			"appellation": "The name or title by which a particular person, class, or thing is called"
		}, {
			"append": "To add or attach, as something accessory, subordinate, or supplementary"
		}, {
			"appertain": "To belong, as by right, fitness, association, classification, possession, or natural relation"
		}, {
			"apposite": "Appropriate"
		}, {
			"apposition": "The act of placing side by side, together, or in contact"
		}, {
			"appraise": "To estimate the money value of"
		}, {
			"appreciable": "Capable of being discerned by the senses or intellect"
		}, {
			"apprehend": "To make a prisoner of (a person) in the name of the law"
		}, {
			"apprehensible": "Capable of being conceived"
		}, {
			"approbation": "Sanction"
		}, {
			"appropriate": "Suitable for the purpose and circumstances"
		}, {
			"aqueduct": "A water-conduit, particularly one for supplying a community from a distance"
		}, {
			"aqueous": "Of, pertaining to, or containing water"
		}, {
			"arbiter": "One chosen or appointed, by mutual consent of parties in dispute, to decide matters"
		}, {
			"arbitrary": "Fixed or done capriciously"
		}, {
			"arbitrate": "To act or give judgment as umpire"
		}, {
			"arbor": "A tree"
		}, {
			"arboreal": "Of or pertaining to a tree or trees"
		}, {
			"arborescent": "Having the nature of a tree"
		}, {
			"arboretum": "A botanical garden or place devoted to the cultivation of trees or shrubs"
		}, {
			"arboriculture": "The cultivation of trees or shrubs"
		}, {
			"arcade": "A vaulted passageway or street; a roofed passageway having shops, etc., opening from it"
		}, {
			"archaic": "Antiquated"
		}, {
			"archaism": "Obsolescence"
		}, {
			"archangel": "An angel of high rank"
		}, {
			"archbishop": "The chief of the bishops of an ecclesiastical province in the Greek, Roman, and Anglican church"
		}, {
			"archdeacon": "A high official administrator of the affairs of a diocese"
		}, {
			"archaeology": "The branch of anthropology concerned with the systematic investigation of the relics of man"
		}, {
			"archetype": "A prototype"
		}, {
			"archipelago": "Any large body of water studded with islands, or the islands collectively themselves"
		}, {
			"ardent": "Burning with passion"
		}, {
			"ardor": "Intensity of passion or affection"
		}, {
			"arid": "Very dry"
		}, {
			"aristocracy": "A hereditary nobility"
		}, {
			"aristocrat": "A hereditary noble or one nearly connected with nobility"
		}, {
			"armada": "A fleet of war-vessels"
		}, {
			"armful": "As much as can be held in the arm or arms"
		}, {
			"armory": "An arsenal"
		}, {
			"aroma": "An agreeable odor"
		}, {
			"arraign": "To call into court, as a person indicted for crime, and demand whether he pleads guilty or not"
		}, {
			"arrange": "To put in definite or proper order"
		}, {
			"arrangement": "The act of putting in proper order, or the state of being put in order"
		}, {
			"arrant": "Notoriously bad"
		}, {
			"arrear": "Something overdue and unpaid"
		}, {
			"arrival": "A coming to stopping-place or destination"
		}, {
			"arrogant": "Unduly or excessively proud, as of wealth, station, learning, etc"
		}, {
			"arrogate": "To take, demand, or claim, especially presumptuously or without reasons or grounds"
		}, {
			"Artesian well": "A very deep bored well, water rises due to underground pressure"
		}, {
			"artful": "Characterized by craft or cunning"
		}, {
			"Arthurian": "Pertaining to King Arthur, the real or legendary hero of British poetic story"
		}, {
			"artifice": "Trickery"
		}, {
			"artless": "Ingenuous"
		}, {
			"ascendant": "Dominant"
		}, {
			"ascension": "The act of rising"
		}, {
			"ascent": "A rising, soaring, or climbing"
		}, {
			"ascetic": "Given to severe self-denial and practicing excessive abstinence and devotion"
		}, {
			"ascribe": "To assign as a quality or attribute"
		}, {
			"asexual": "Having no distinct sexual organs"
		}, {
			"ashen": "Pale"
		}, {
			"askance": "With a side or indirect glance or meaning"
		}, {
			"asperity": "Harshness or roughness of temper"
		}, {
			"aspirant": "One who seeks earnestly, as for advancement, honors, place"
		}, {
			"aspiration": "An earnest wish for that which is above one's present reach"
		}, {
			"aspire": "To have an earnest desire, wish, or longing, as for something high and good, not yet attained"
		}, {
			"assailant": "One who attacks"
		}, {
			"assassin": "One who kills, or tries to kill, treacherously or secretly"
		}, {
			"assassinate": "To kill, as by surprise or secret assault, especially the killing of some eminent person"
		}, {
			"assassination": "Murderer, as by secret assault or treachery"
		}, {
			"assay": "The chemical analysis or testing of an alloy ore"
		}, {
			"assent": "To express agreement with a statement or matter of opinion"
		}, {
			"assess": "To determine the amount of (a tax or other sum to be paid)"
		}, {
			"assessor": "An officer whose duty it is to assess taxes"
		}, {
			"assets n": "Property in general, regarded as applicable to the payment of debts"
		}, {
			"assiduous": "Diligent"
		}, {
			"assignee": "One who is appointed to act for another in the management of certain property and interests"
		}, {
			"assimilate": "To adapt"
		}, {
			"assonance": "Resemblance or correspondence in sound"
		}, {
			"assonant": "Having resemblance of sound"
		}, {
			"assonate": "To accord in sound, especially vowel sound"
		}, {
			"assuage": "To cause to be less harsh, violent, or severe, as excitement, appetite, pain, or disease"
		}, {
			"astringent": "Harsh in disposition or character"
		}, {
			"astute": "Keen in discernment"
		}, {
			"atheism": "The denial of the existence of God"
		}, {
			"athirst": "Wanting water"
		}, {
			"athwart": "From side to side"
		}, {
			"atomizer": "An apparatus for reducing a liquid to a fine spray, as for disinfection, inhalation, etc"
		}, {
			"atone": "To make amends for"
		}, {
			"atonement": "Amends, reparation, or expiation made from wrong or injury"
		}, {
			"atrocious": "Outrageously or wantonly wicked, criminal, vile, or cruel"
		}, {
			"atrocity": "Great cruelty or reckless wickedness"
		}, {
			"attache": "A subordinate member of a diplomatic embassy"
		}, {
			"attest": "To certify as accurate, genuine, or true"
		}, {
			"attorney-general": "The chief law-officer of a government"
		}, {
			"auburn": "Reddish-brown, said usually of the hair"
		}, {
			"audacious": "Fearless"
		}, {
			"audible": "Loud enough to be heard"
		}, {
			"audition": "The act or sensation of hearing"
		}, {
			"auditory": "Of or pertaining to hearing or the organs or sense of hearing"
		}, {
			"augment": "To make bigger"
		}, {
			"augur": "To predict"
		}, {
			"Augustinian": "Pertaining to St, Augustine, his doctrines, or the religious orders called after him"
		}, {
			"aura": "Pervasive psychic influence supposed to emanate from persons"
		}, {
			"aural": "Of or pertaining to the ear"
		}, {
			"auricle": "One of the two chambers of the heart which receives the blood from the veins"
		}, {
			"auricular": "Of or pertaining to the ear, its auricle, or the sense of hearing"
		}, {
			"auriferous": "Containing gold"
		}, {
			"aurora": "A luminous phenomenon in the upper regions of the atmosphere"
		}, {
			"auspice": "favoring, protecting, or propitious influence or guidance"
		}, {
			"austere": "Severely simple; unadorned"
		}, {
			"autarchy": "Unrestricted power"
		}, {
			"authentic": "Of undisputed origin"
		}, {
			"authenticity": "The state or quality of being genuine, or of the origin and authorship claimed"
		}, {
			"autobiography": "The story of one's life written by himself"
		}, {
			"autocracy": "Absolute government"
		}, {
			"autocrat": "Any one who claims or wields unrestricted or undisputed authority or influence"
		}, {
			"automaton": "Any living being whose actions are or appear to be involuntary or mechanical"
		}, {
			"autonomous": "Self-governing"
		}, {
			"autonomy": "Self-government"
		}, {
			"autopsy": "The examination of a dead body by dissection to ascertain the cause of death"
		}, {
			"autumnal": "Of or pertaining to autumn"
		}, {
			"auxiliary": "One who or that which aids or helps, especially when regarded as subsidiary or accessory"
		}, {
			"avalanche": "The fall or sliding of a mass of snow or ice down a mountain-slope, often bearing with it rock"
		}, {
			"avarice": "Passion for getting and keeping riches"
		}, {
			"aver": "To assert as a fact"
		}, {
			"averse": "Reluctant"
		}, {
			"aversion": "A mental condition of fixed opposition to or dislike of some particular thing"
		}, {
			"avert": "To turn away or aside"
		}, {
			"aviary": "A spacious cage or enclosure in which live birds are kept"
		}, {
			"avidity": "Greediness"
		}, {
			"avocation": "Diversion"
		}, {
			"avow": "To declare openly"
		}, {
			"awaken": "To arouse, as emotion, interest, or the like"
		}, {
			"awry": "Out of the proper form, direction, or position"
		}, {
			"aye": "An expression of assent"
		}, {
			"azalea": "A flowering shrub"
		}, {
			"azure": "The color of the sky"
		}, {
			"Baconian": "Of or pertaining to Lord Bacon or his system of philosophy"
		}, {
			"bacterium": "A microbe"
		}, {
			"badger": "To pester"
		}, {
			"baffle": "To foil or frustrate"
		}, {
			"bailiff": "An officer of court having custody of prisoners under arraignment"
		}, {
			"baize": "A single-colored napped woolen fabric used for table-covers, curtains, etc"
		}, {
			"bale": "A large package prepared for transportation or storage"
		}, {
			"baleful": "Malignant"
		}, {
			"ballad": "Any popular narrative poem, often with epic subject and usually in lyric form"
		}, {
			"balsam": "A medical preparation, aromatic and oily, used for healing"
		}, {
			"banal": "Commonplace"
		}, {
			"barcarole": "A boat-song of Venetian gondoliers"
		}, {
			"barograph": "An instrument that registers graphically and continuously the atmospheric pressure"
		}, {
			"barometer": "An instrument for indicating the atmospheric pressure per unit of surface"
		}, {
			"barring": "Apart from"
		}, {
			"baritone": "Having a register higher than bass and lower than tenor"
		}, {
			"bask": "To make warm by genial heat"
		}, {
			"bass": "Low in tone or compass"
		}, {
			"baste": "To cover with melted fat, gravy, while cooking"
		}, {
			"baton": "An official staff borne either as a weapon or as an emblem of authority or privilege"
		}, {
			"battalion": "A body of infantry composed of two or more companies, forming a part of a regiment"
		}, {
			"batten": "A narrow strip of wood"
		}, {
			"batter": "A thick liquid mixture of two or more materials beaten together, to be used in cookery"
		}, {
			"bauble": "A trinket"
		}, {
			"bawl": "To proclaim by outcry"
		}, {
			"beatify": "To make supremely happy"
		}, {
			"beatitude": "Any state of great happiness"
		}, {
			"beau": "An escort or lover"
		}, {
			"becalm": "To make quiet"
		}, {
			"beck": "To give a signal to, by nod or gesture"
		}, {
			"bedaub": "To smear over, as with something oily or sticky"
		}, {
			"bedeck": "To cover with ornament"
		}, {
			"bedlam": "Madhouse"
		}, {
			"befog": "To confuse"
		}, {
			"befriend": "To be a friend to, especially when in need"
		}, {
			"beget": "To produce by sexual generation"
		}, {
			"begrudge": "To envy one of the possession of"
		}, {
			"belate": "To delay past the proper hour"
		}, {
			"belay": "To make fast, as a rope, by winding round a cleat"
		}, {
			"belie": "To misrepresent"
		}, {
			"believe": "To accept as true on the testimony or authority of others"
		}, {
			"belittle": "To disparage"
		}, {
			"belle": "A woman who is a center of attraction because of her beauty, accomplishments, etc"
		}, {
			"bellicose": "Warlike"
		}, {
			"belligerent": "Manifesting a warlike spirit"
		}, {
			"bemoan": "To lament"
		}, {
			"benediction": "a solemn invocation of the divine blessing"
		}, {
			"benefactor": "A doer of kindly and charitable acts"
		}, {
			"benefice": "A church office endowed with funds or property for the maintenance of divine service"
		}, {
			"beneficent": "Characterized by charity and kindness"
		}, {
			"beneficial": "Helpful"
		}, {
			"beneficiary": "One who is lawfully entitled to the profits and proceeds of an estate or property"
		}, {
			"benefit": "Helpful result"
		}, {
			"benevolence": "Any act of kindness or well-doing"
		}, {
			"benevolent": "Loving others and actively desirous of their well-being"
		}, {
			"benign": "Good and kind of heart"
		}, {
			"benignant": "Benevolent in feeling, character, or aspect"
		}, {
			"benignity": "Kindness of feeling, disposition, or manner"
		}, {
			"benison": "Blessing"
		}, {
			"bequeath": "To give by will"
		}, {
			"bereave": "To make desolate with loneliness and grief"
		}, {
			"berth": "A bunk or bed in a vessel, sleeping-car, etc"
		}, {
			"beseech": "To implore"
		}, {
			"beset": "To attack on all sides"
		}, {
			"besmear": "To smear over, as with any oily or sticky substance"
		}, {
			"bestial": "Animal"
		}, {
			"bestrew": "To sprinkle or cover with things strewn"
		}, {
			"bestride": "To get or sit upon astride, as a horse"
		}, {
			"bethink": "To remind oneself"
		}, {
			"betide": "To happen to or befall"
		}, {
			"betimes": "In good season or time"
		}, {
			"betroth": "To engage to marry"
		}, {
			"betrothal": "Engagement to marry"
		}, {
			"bevel": "Any inclination of two surfaces other than 90 degrees"
		}, {
			"bewilder": "To confuse the perceptions or judgment of"
		}, {
			"bibliomania": "The passion for collecting books"
		}, {
			"bibliography": "A list of the words of an author, or the literature bearing on a particular subject"
		}, {
			"bibliophile": "One who loves books"
		}, {
			"bibulous": "Fond of drinking"
		}, {
			"bide": "To await"
		}, {
			"biennial": "A plant that produces leaves and roots the first year and flowers and fruit the second"
		}, {
			"bier": "A horizontal framework with two handles at each end for carrying a corpse to the grave"
		}, {
			"bigamist": "One who has two spouses at the same time"
		}, {
			"bigamy": "The crime of marrying any other person while having a legal spouse living"
		}, {
			"bight": "A slightly receding bay between headlands, formed by a long curve of a coast-line"
		}, {
			"bilateral": "Two-sided"
		}, {
			"bilingual": "Speaking two languages"
		}, {
			"biograph": "A bibliographical sketch or notice"
		}, {
			"biography": "A written account of one's life, actions, and character"
		}, {
			"biology": "The science of life or living organisms"
		}, {
			"biped": "An animal having two feet"
		}, {
			"birthright": "A privilege or possession into which one is born"
		}, {
			"bitterness": "Acridity, as to the taste"
		}, {
			"blase": "Sated with pleasure"
		}, {
			"blaspheme": "To indulge in profane oaths"
		}, {
			"blatant": "Noisily or offensively loud or clamorous"
		}, {
			"blaze": "A vivid glowing flame"
		}, {
			"blazon": "To make widely or generally known"
		}, {
			"bleak": "Desolate"
		}, {
			"blemish": "A mark that mars beauty"
		}, {
			"blithe": "Joyous"
		}, {
			"blithesome": "Cheerful"
		}, {
			"blockade": "The shutting up of a town, a frontier, or a line of coast by hostile forces"
		}, {
			"boatswain": "A subordinate officer of a vessel, who has general charge of the rigging, anchors, etc"
		}, {
			"bodice": "A women's ornamental corset-shaped laced waist"
		}, {
			"bodily": "Corporeal"
		}, {
			"boisterous": "Unchecked merriment or animal spirits"
		}, {
			"bole": "The trunk or body of a tree"
		}, {
			"bolero": "A Spanish dance, illustrative of the passion of love, accompanied by caste nets and singing"
		}, {
			"boll": "A round pod or seed-capsule, as a flax or cotton"
		}, {
			"bolster": "To support, as something wrong"
		}, {
			"bomb": "A hollow projectile containing an explosive material"
		}, {
			"bombard": "To assail with any missile or with abusive speech"
		}, {
			"bombardier": "A person who has charge of mortars, bombs, and shells"
		}, {
			"bombast": "Inflated or extravagant language, especially on unimportant subjects"
		}, {
			"boorish": "Rude"
		}, {
			"bore": "To weary by tediousness or dullness"
		}, {
			"borough": "An incorporated village or town"
		}, {
			"bosom": "The breast or the upper front of the thorax of a human being, especially of a woman"
		}, {
			"botanical": "Connected with the study or cultivation of plants"
		}, {
			"botanize": "To study plant-life"
		}, {
			"botany": "The science that treats of plants"
		}, {
			"bountiful": "Showing abundance"
		}, {
			"Bowdlerize": "To expurgate in editing (a literary composition) by omitting words or passages"
		}, {
			"bowler": "In cricket, the player who delivers the ball"
		}, {
			"boycott": "To place the products or merchandise of under a ban"
		}, {
			"brae": "Hillside"
		}, {
			"braggart": "A vain boaster"
		}, {
			"brandish": "To wave, shake, or flourish triumphantly or defiantly, as a sword or spear"
		}, {
			"bravado": "An aggressive display of boldness"
		}, {
			"bravo": "Well done"
		}, {
			"bray": "A loud harsh sound, as the cry of an ass or the blast of a horn"
		}, {
			"braze": "To make of or ornament with brass"
		}, {
			"brazier": "An open pan or basin for holding live coals"
		}, {
			"breach": "The violation of official duty, lawful right, or a legal obligation"
		}, {
			"breaker": "One who trains horses, dogs, etc"
		}, {
			"breech": "The buttocks"
		}, {
			"brethren n": "Members of a brotherhood, gild, profession, association, or the like"
		}, {
			"brevity": "Shortness of duration"
		}, {
			"bric-a-brac": "Objects of curiosity or for decoration"
		}, {
			"bridle": "The head-harness of a horse consisting of a head-stall, a bit, and the reins"
		}, {
			"brigade": "A body of troops consisting of two or more regiments"
		}, {
			"brigadier": "General officer who commands a brigade, ranking between a colonel and a major-general"
		}, {
			"brigand": "One who lives by robbery and plunder"
		}, {
			"brimstone": "Sulfur"
		}, {
			"brine": "Water saturated with salt"
		}, {
			"bristle": "One of the coarse, stiff hairs of swine: used in brush-making, etc"
		}, {
			"Britannia": "The United Kingdom of Great Britain"
		}, {
			"Briticism": "A word, idiom, or phrase characteristic of Great Britain or the British"
		}, {
			"brittle": "Fragile"
		}, {
			"broach": "To mention, for the first time"
		}, {
			"broadcast": "Disseminated far and wide"
		}, {
			"brogan": "A coarse, heavy shoe"
		}, {
			"brogue": "Any dialectic pronunciation of English, especially that of the Irish people"
		}, {
			"brokerage": "The business of making sales and purchases for a commission; a broker"
		}, {
			"bromine": "A dark reddish-brown, non-metallic liquid element with a suffocating odor"
		}, {
			"bronchitis": "Inflammation of the bronchial tubes"
		}, {
			"bronchus": "Either of the two subdivisions of the trachea conveying air into the lungs"
		}, {
			"brooch": "An article of jewelry fastened by a hinged pin and hook on the underside"
		}, {
			"brotherhood": "Spiritual or social fellowship or solidarity"
		}, {
			"browbeat": "To overwhelm, or attempt to do so, by stern, haughty, or rude address or manner"
		}, {
			"brusque": "Somewhat rough or rude in manner or speech"
		}, {
			"buffoon": "A clown"
		}, {
			"buffoonery": "Low drollery, coarse jokes, etc"
		}, {
			"bulbous": "Of, or pertaining to, or like a bulb"
		}, {
			"bullock": "An ox"
		}, {
			"bulrush": "Any one of various tall rush-like plants growing in damp ground or water"
		}, {
			"bulwark": "Anything that gives security or defense"
		}, {
			"bumper": "A cup or glass filled to the brim, especially one to be drunk as a toast or health"
		}, {
			"bumptious": "Full of offensive and aggressive self-conceit"
		}, {
			"bungle": "To execute clumsily"
		}, {
			"buoyancy": "Power or tendency to float on or in a liquid or gas"
		}, {
			"buoyant": "Having the power or tendency to float or keep afloat"
		}, {
			"bureau": "A chest of drawers for clothing, etc"
		}, {
			"bureaucracy": "Government by departments of men transacting particular branches of public business"
		}, {
			"burgess": "In colonial times, a member of the lower house of the legislature of Maryland or Virginia"
		}, {
			"burgher": "An inhabitant, citizen or freeman of a borough burgh, or corporate town"
		}, {
			"burnish": "To make brilliant or shining"
		}, {
			"bursar": "A treasurer"
		}, {
			"bustle": "To hurry"
		}, {
			"butt": "To strike with or as with the head, or horns"
		}, {
			"butte": "A conspicuous hill, low mountain, or natural turret, generally isolated"
		}, {
			"buttress": "Any support or prop"
		}, {
			"by-law": "A rule or law adopted by an association, a corporation, or the like"
		}, {
			"cabal": "A number of persons secretly united for effecting by intrigue some private purpose"
		}, {
			"cabalism": "Superstitious devotion to one's religion"
		}, {
			"cabinet": "The body of men constituting the official advisors of the executive head of a nation"
		}, {
			"cacophony": "A disagreeable, harsh, or discordant sound or combination of sounds or tones"
		}, {
			"cadaverous": "Resembling a corpse"
		}, {
			"cadence": "Rhythmical or measured flow or movement, as in poetry or the time and pace of marching troops"
		}, {
			"cadenza": "An embellishment or flourish, prepared or improvised, for a solo voice or instrument"
		}, {
			"caitiff": "Cowardly"
		}, {
			"cajole": "To impose on or dupe by flattering speech"
		}, {
			"cajolery": "Delusive speech"
		}, {
			"calculable": "That may be estimated by reckoning"
		}, {
			"calculus": "A concretion formed in various parts of the body resembling a pebble in hardness"
		}, {
			"callosity": "The state of being hard and insensible"
		}, {
			"callow": "Without experience of the world"
		}, {
			"calorie": "Amount of heat needed to raise the temperature of 1 kilogram of water 1 degree centigrade"
		}, {
			"calumny": "Slander"
		}, {
			"Calvary": "The place where Christ was crucified"
		}, {
			"Calvinism": "The system of doctrine taught by John Calvin"
		}, {
			"Calvinize": "To teach or imbue with the doctrines of Calvinism"
		}, {
			"came": "A leaden sash-bar or grooved strip for fastening panes in stained-glass windows"
		}, {
			"cameo": "Any small engraved or carved work in relief"
		}, {
			"campaign": "A complete series of connected military operations"
		}, {
			"Canaanite": "A member of one of the three tribes that dwelt in the land of Canaan, or western Palestine"
		}, {
			"canary": "Of a bright but delicate yellow"
		}, {
			"candid": "Straightforward"
		}, {
			"candor": "The quality of frankness or outspokenness"
		}, {
			"canine": "Characteristic of a dog"
		}, {
			"canon": "Any rule or law"
		}, {
			"cant": "To talk in a singsong, preaching tone with affected solemnity"
		}, {
			"cantata": "A choral composition"
		}, {
			"canto": "One of the divisions of an extended poem"
		}, {
			"cantonment": "The part of the town or district in which the troops are quartered"
		}, {
			"capacious": "Roomy"
		}, {
			"capillary": "A minute vessel having walls composed of a single layer of cells"
		}, {
			"capitulate": "To surrender or stipulate terms"
		}, {
			"caprice": "A whim"
		}, {
			"caption": "A heading, as of a chapter, section, document, etc"
		}, {
			"captious": "Hypercritical"
		}, {
			"captivate v. To fascinate, as by": "eloquence, or beauty"
		}, {
			"carcass": "The dead body of an animal"
		}, {
			"cardiac": "Pertaining to the heart"
		}, {
			"cardinal": "Of prime or special importance"
		}, {
			"caret": "A sign (^) placed below a line, indicating where omitted words, etc., should be inserted"
		}, {
			"caricature": "a picture or description in which natural characteristics are exaggerated or distorted"
		}, {
			"carnage": "Massacre"
		}, {
			"carnal": "Sensual"
		}, {
			"carnivorous": "Eating or living on flesh"
		}, {
			"carouse": "To drink deeply and in boisterous or jovial manner"
		}, {
			"carrion": "Dead and putrefying flesh"
		}, {
			"cartilage": "An elastic animal tissue of firm consistence"
		}, {
			"cartridge": "A charge for a firearm, or for blasting"
		}, {
			"caste": "The division of society on artificial grounds"
		}, {
			"castigate": "To punish"
		}, {
			"casual": "Accidental, by chance"
		}, {
			"casualty": "A fatal or serious accident or disaster"
		}, {
			"cataclysm": "Any overwhelming flood of water"
		}, {
			"cataract": "Opacity of the lens of the eye resulting in complete or partial blindness"
		}, {
			"catastrophe": "Any great and sudden misfortune or calamity"
		}, {
			"cathode": "The negative pole or electrode of a galvanic battery"
		}, {
			"Catholicism": "The system, doctrine, and practice of the Roman Catholic Church"
		}, {
			"catholicity": "Universal prevalence or acceptance"
		}, {
			"cat-o-nine-tails": "An instrument consisting of nine pieces of cord, formerly used for flogging in the army and navy"
		}, {
			"caucus": "A private meeting of members of a political party to select candidates"
		}, {
			"causal": "Indicating or expressing a cause"
		}, {
			"caustic": "Sarcastic and severe"
		}, {
			"cauterize": "To burn or sear as with a heated iron"
		}, {
			"cede": "To pass title to"
		}, {
			"censor": "An official examiner of manuscripts empowered to prohibit their publication"
		}, {
			"censorious": "Judging severely or harshly"
		}, {
			"census": "An official numbering of the people of a country or district"
		}, {
			"centenary": "Pertaining to a hundred years or a period of a hundred years"
		}, {
			"centiliter": "A hundredth of a liter"
		}, {
			"centimeter": "A length of one hundredth of a meter"
		}, {
			"centurion": "A captain of a company of one hundred infantry in the ancient Roman army"
		}, {
			"cereal": "Pertaining to edible grain or farinaceous seeds"
		}, {
			"ceremonial": "Characterized by outward form or ceremony"
		}, {
			"ceremonious": "Observant of ritual"
		}, {
			"cessation": "Discontinuance, as of action or motion"
		}, {
			"cession": "Surrender, as of possessions or rights"
		}, {
			"chagrin": "Keen vexation, annoyance, or mortification, as at one's failures or errors"
		}, {
			"chameleon": "Changeable in appearance"
		}, {
			"chancery": "A court of equity, as distinguished from a common-law court"
		}, {
			"chaos": "Any condition of which the elements or parts are in utter disorder and confusion"
		}, {
			"characteristic": "A distinctive feature"
		}, {
			"characterize": "To describe by distinctive marks or peculiarities"
		}, {
			"charlatan": "A quack"
		}, {
			"chasm": "A yawning hollow, as in the earth's surface"
		}, {
			"chasten": "To purify by affliction"
		}, {
			"chastise": "To subject to punitive measures"
		}, {
			"chastity": "Sexual or moral purity"
		}, {
			"chateau": "A castle or manor-house"
		}, {
			"chattel": "Any article of personal property"
		}, {
			"check": "To hold back"
		}, {
			"chiffon": "A very thin gauze used for trimmings, evening dress, etc"
		}, {
			"chivalry": "The knightly system of feudal times with its code, usages and practices"
		}, {
			"cholera": "An acute epidemic disease"
		}, {
			"choleric": "Easily provoked to anger"
		}, {
			"choral": "Pertaining to, intended for, or performed by a chorus or choir"
		}, {
			"Christ": "A title of Jesus"
		}, {
			"christen": "To name in baptism"
		}, {
			"Christendom": "That part of the world where Christianity is generally professed"
		}, {
			"chromatic": "Belonging, relating to, or abounding in color"
		}, {
			"chronology": "The science that treats of computation of time or of investigation and arrangement of events"
		}, {
			"chronometer": "A portable timekeeper of the highest attainable precision"
		}, {
			"cipher v. To calculate": "(also a noun meaning zero or nothing)"
		}, {
			"circulate": "To disseminate"
		}, {
			"circumference": "The boundary-line of a circle"
		}, {
			"circumlocution": "Indirect or roundabout expression"
		}, {
			"circumnavigate": "To sail quite around"
		}, {
			"circumscribe": "To confine within bounds"
		}, {
			"circumspect": "Showing watchfulness, caution, or careful consideration"
		}, {
			"citadel": "Any strong fortress"
		}, {
			"cite": "To refer to specifically"
		}, {
			"claimant": "One who makes a claim or demand, as of right"
		}, {
			"clairvoyance": "Intuitive sagacity or perception"
		}, {
			"clamorous": "Urgent in complaint or demand"
		}, {
			"clan": "A tribe"
		}, {
			"clandestine": "Surreptitious"
		}, {
			"clangor": "Clanking or a ringing, as of arms, chains, or bells; clamor"
		}, {
			"clarify": "To render intelligible"
		}, {
			"clarion": "A small shrill trumpet or bugle"
		}, {
			"classify": "To arrange in a class or classes on the basis of observed resemblance’s and differences"
		}, {
			"clearance": "A certificate from the proper authorities that a vessel has complied with the law and may sail"
		}, {
			"clemency": "Mercy"
		}, {
			"clement": "Compassionate"
		}, {
			"close-hauled": "Having the sails set for sailing as close to the wind as possible"
		}, {
			"clothier": "One who makes or sells cloth or clothing"
		}, {
			"clumsy": "Awkward of movement"
		}, {
			"coagulate": "To change into a clot or a jelly, as by heat, by chemical action, or by a ferment"
		}, {
			"coagulant": "Producing coagulation"
		}, {
			"coalescence": "The act or process of coming together so as to form one body, combination, or product"
		}, {
			"coalition": "Combination in a body or mass"
		}, {
			"coddle": "To treat as a baby or an invalid"
		}, {
			"codicil": "A supplement adding to, revoking, or explaining in the body of a will"
		}, {
			"coerce": "To force"
		}, {
			"coercion": "Forcible constraint or restraint, moral or physical"
		}, {
			"coercive": "Serving or tending to force"
		}, {
			"cogent": "Appealing strongly to the reason or conscience"
		}, {
			"cognate": "Akin"
		}, {
			"cognizant": "Taking notice"
		}, {
			"cohere": "To stick together"
		}, {
			"cohesion": "Consistency"
		}, {
			"cohesive": "Having the property of consistency"
		}, {
			"coincide": "To correspond"
		}, {
			"coincidence": "A circumstance so agreeing with another: often implying accident"
		}, {
			"coincident": "Taking place at the same time"
		}, {
			"collaborate": "To labor or cooperate with another or others, especially in literary or scientific pursuits"
		}, {
			"collapse": "To cause to shrink, fall in, or fail"
		}, {
			"collapsible": "That may or can collapse"
		}, {
			"colleague": "An associate in professional employment"
		}, {
			"collective": "Consisting of a number of persons or objects considered as gathered into a mass, or sum"
		}, {
			"collector": "One who makes a collection, as of objects of art, books, or the like"
		}, {
			"collegian": "A college student"
		}, {
			"collide": "To meet and strike violently"
		}, {
			"collier": "One who works in a coal-mine"
		}, {
			"collision": "Violent contact"
		}, {
			"colloquial": "Pertaining or peculiar to common speech as distinguished from literary"
		}, {
			"colloquialism": "Form of speech used only or chiefly in conversation"
		}, {
			"colloquy": "Conversation"
		}, {
			"collusion": "A secret agreement for a wrongful purpose"
		}, {
			"colossus": "Any strikingly great person or object"
		}, {
			"comely": "Handsome"
		}, {
			"comestible": "Fit to be eaten"
		}, {
			"comical": "Funny"
		}, {
			"commemorate": "To serve as a remembrance of"
		}, {
			"commentary": "A series of illustrative or explanatory notes on any important work"
		}, {
			"commingle": "To blend"
		}, {
			"commissariat": "The department of an army charged with the provision of its food and water and daily needs"
		}, {
			"commission": "To empower"
		}, {
			"commitment": "The act or process of entrusting or consigning for safe-keeping"
		}, {
			"committal": "The act, fact, or result of committing, or the state of being"
		}, {
			"commodity": "Something that is bought and sold"
		}, {
			"commotion": "A disturbance or violent agitation"
		}, {
			"commute": "To put something, especially something less severe, in place of"
		}, {
			"comparable": "Fit to be compared"
		}, {
			"comparative": "Relative"
		}, {
			"comparison": "Examination of two or more objects with reference to their likeness or unlikeness"
		}, {
			"compensate": "To remunerate"
		}, {
			"competence": "Adequate qualification or capacity"
		}, {
			"competent": "Qualified"
		}, {
			"competitive": "characterized by rivalry"
		}, {
			"competitor": "A rival"
		}, {
			"complacence": "Satisfaction with one's acts or surroundings"
		}, {
			"complacent": "Pleased or satisfied with oneself"
		}, {
			"complaisance": "Politeness"
		}, {
			"complaisant": "Agreeable"
		}, {
			"complement": "To make complete"
		}, {
			"complex": "Complicated"
		}, {
			"compliant": "Yielding"
		}, {
			"complicate": "To make complex, difficult, or hard to deal with"
		}, {
			"complication": "An intermingling or combination of things or parts, especially in a perplexing manner"
		}, {
			"complicity": "Participation or partnership, as in wrong-doing or with a wrong-doer"
		}, {
			"compliment": "To address or gratify with expressions of delicate praise"
		}, {
			"component": "A constituent element or part"
		}, {
			"comport": "To conduct or behave (oneself)"
		}, {
			"composure": "Calmness"
		}, {
			"comprehensible": "Intelligible"
		}, {
			"comprehension": "Ability to know"
		}, {
			"comprehensive": "Large in scope or content"
		}, {
			"compress": "To press together or into smaller space"
		}, {
			"compressible": "Capable of being pressed into smaller compass"
		}, {
			"compression": "Constraint, as by force or authority"
		}, {
			"comprise": "To consist of"
		}, {
			"compulsion": "Coercion"
		}, {
			"compulsory": "Forced"
		}, {
			"compunction": "Remorseful feeling"
		}, {
			"compute": "To ascertain by mathematical calculation"
		}, {
			"concede": "To surrender"
		}, {
			"conceit": "Self-flattering opinion"
		}, {
			"conceive": "To form an idea, mental image or thought of"
		}, {
			"concerto": "A musical composition"
		}, {
			"concession": "Anything granted or yielded, or admitted in response to a demand, petition, or claim"
		}, {
			"conciliate": "To obtain the friendship of"
		}, {
			"conciliatory": "Tending to reconcile"
		}, {
			"conclusive": "Sufficient to convince or decide"
		}, {
			"concord": "Harmony"
		}, {
			"concordance": "Harmony"
		}, {
			"concur": "To agree"
		}, {
			"concurrence": "Agreement"
		}, {
			"concurrent": "Occurring or acting together"
		}, {
			"concussion": "A violent shock to some organ by a fall or a sudden blow"
		}, {
			"condensation": "The act or process of making dense or denser"
		}, {
			"condense": "To abridge"
		}, {
			"condescend": "To come down voluntarily to equal terms with inferiors"
		}, {
			"condolence": "Expression of sympathy with a person in pain, sorrow, or misfortune"
		}, {
			"conduce": "To bring about"
		}, {
			"conducive": "Contributing to an end"
		}, {
			"conductible": "Capable of being conducted or transmitted"
		}, {
			"conduit": "A means for conducting something, particularly a tube, pipe, or passageway for a fluid"
		}, {
			"confectionery": "The candy collectively that a confectioner makes or sells, as candy"
		}, {
			"confederacy": "A number of states or persons in compact or league with each other, as for mutual aid"
		}, {
			"confederate": "One who is united with others in a league, compact, or agreement"
		}, {
			"confer": "To bestow"
		}, {
			"conferee": "A person with whom another confers"
		}, {
			"confessor": "A spiritual advisor"
		}, {
			"confidant": "One to whom secrets are entrusted"
		}, {
			"confide": "To reveal in trust or confidence"
		}, {
			"confidence": "The state or feeling of trust in or reliance upon another"
		}, {
			"confident": "Assured"
		}, {
			"confinement": "Restriction within limits or boundaries"
		}, {
			"confiscate": "To appropriate (private property) as forfeited to the public use or treasury"
		}, {
			"conflagration": "A great fire, as of many buildings, a forest, or the like"
		}, {
			"confluence": "The place where streams meet"
		}, {
			"confluent": "A stream that unites with another"
		}, {
			"conformance": "The act or state or conforming"
		}, {
			"conformable": "Harmonious"
		}, {
			"conformation": "General structure, form, or outline"
		}, {
			"conformity": "Correspondence in form, manner, or use"
		}, {
			"confront": "To encounter, as difficulties or obstacles"
		}, {
			"congeal": "To coagulate"
		}, {
			"congenial": "Having kindred character or tastes"
		}, {
			"congest": "To collect into a mass"
		}, {
			"congregate": "To bring together into a crowd"
		}, {
			"coniferous": "Cone-bearing trees"
		}, {
			"conjecture": "A guess"
		}, {
			"conjoin": "To unite"
		}, {
			"conjugal": "Pertaining to marriage, marital rights, or married persons"
		}, {
			"conjugate": "Joined together in pairs"
		}, {
			"conjugation": "The state or condition of being joined together"
		}, {
			"conjunction": "The state of being joined together, or the things so joined"
		}, {
			"connive": "To be in collusion"
		}, {
			"connoisseur": "A critical judge of art, especially one with thorough knowledge and sound judgment of art"
		}, {
			"connote": "To mean; signify"
		}, {
			"connubial": "Pertaining to marriage or matrimony"
		}, {
			"conquer": "To overcome by force"
		}, {
			"consanguineous": "Descended from the same parent or ancestor"
		}, {
			"conscience": "The faculty in man by which he distinguishes between right and wrong in character and conduct"
		}, {
			"conscientious": "Governed by moral standard"
		}, {
			"conscious": "Aware that one lives, feels, and thinks"
		}, {
			"conscript": "To force into military service"
		}, {
			"consecrate": "To set apart as sacred"
		}, {
			"consecutive": "Following in uninterrupted succession"
		}, {
			"consensus": "A collective unanimous opinion of a number of persons"
		}, {
			"conservatism": "Tendency to adhere to the existing order of things"
		}, {
			"conservative": "Adhering to the existing order of things"
		}, {
			"conservatory": "An institution for instruction and training in music and declamation"
		}, {
			"consign": "To entrust"
		}, {
			"consignee": "A person to whom goods or other property has been entrusted"
		}, {
			"consignor": "One who entrusts"
		}, {
			"consistency": "A state of permanence"
		}, {
			"console": "To comfort"
		}, {
			"consolidate": "To combine into one body or system"
		}, {
			"consonance": "The state or quality of being in accord with"
		}, {
			"consonant": "Being in agreement or harmony with"
		}, {
			"consort": "A companion or associate"
		}, {
			"conspicuous": "Clearly visible"
		}, {
			"conspirator": "One who agrees with others to cooperate in accomplishing some unlawful purpose"
		}, {
			"conspire": "To plot"
		}, {
			"constable": "An officer whose duty is to maintain the peace"
		}, {
			"constellation": "An arbitrary assemblage or group of stars"
		}, {
			"consternation": "Panic"
		}, {
			"constituency": "The inhabitants or voters in a district represented in a legislative body"
		}, {
			"constituent": "One who has the right to vote at an election"
		}, {
			"constrict": "To bind"
		}, {
			"consul": "An officer appointed to reside in a foreign city, chiefly to represent his country"
		}, {
			"consulate": "The place in which a consul transacts official business"
		}, {
			"consummate": "To bring to completion"
		}, {
			"consumption": "Gradual destruction, as by burning, eating, etc., or by using up, wearing out, etc"
		}, {
			"consumptive": "Designed for gradual destruction"
		}, {
			"contagion": "The communication of disease from person to person"
		}, {
			"contagious": "Transmitting disease"
		}, {
			"contaminate": "To pollute"
		}, {
			"contemplate": "To consider thoughtfully"
		}, {
			"contemporaneous": "Living, occurring, or existing at the same time"
		}, {
			"contemporary": "Living or existing at the same time"
		}, {
			"contemptible": "Worthy of scorn or disdain"
		}, {
			"contemptuous": "Disdainful"
		}, {
			"contender": "One who exerts oneself in opposition or rivalry"
		}, {
			"contiguity": "Proximity"
		}, {
			"contiguous": "Touching or joining at the edge or boundary"
		}, {
			"continence": "Self-restraint with respect to desires, appetites, and passion"
		}, {
			"contingency": "Possibility of happening"
		}, {
			"contingent": "Not predictable"
		}, {
			"continuance": "Permanence"
		}, {
			"continuation": "Prolongation"
		}, {
			"continuity": "Uninterrupted connection in space, time, operation, or development"
		}, {
			"continuous": "Connected, extended, or prolonged without separation or interruption of sequence"
		}, {
			"contort": "To twist into a misshapen form"
		}, {
			"contraband": "Trade forbidden by law or treaty"
		}, {
			"contradiction": "The assertion of the opposite of that which has been said"
		}, {
			"contradictory": "Inconsistent with itself"
		}, {
			"contraposition": "A placing opposite"
		}, {
			"contravene": "To prevent or obstruct the operation of"
		}, {
			"contribution": "The act of giving for a common purpose"
		}, {
			"contributor": "One who gives or furnishes, in common with others, for a common purpose"
		}, {
			"contrite": "Broken in spirit because of a sense of sin"
		}, {
			"contrivance": "The act planning, devising, inventing, or adapting something to or for a special purpose"
		}, {
			"contrive": "To manage or carry through by some device or scheme"
		}, {
			"control": "To exercise a directing, restraining, or governing influence over"
		}, {
			"controller": "One who or that which regulates or directs"
		}, {
			"contumacious": "Rebellious"
		}, {
			"contumacy": "Contemptuous disregard of the requirements of rightful authority"
		}, {
			"contuse": "To bruise by a blow, either with or without the breaking of the skin"
		}, {
			"contusion": "A bruise"
		}, {
			"convalesce": "To recover after a sickness"
		}, {
			"convalescence": "The state of progressive restoration to health and strength after the cessation of disease"
		}, {
			"convalescent": "Recovering health after sickness"
		}, {
			"convene": "To summon or cause to assemble"
		}, {
			"convenience": "Fitness, as of time or place"
		}, {
			"converge": "To cause to incline and approach nearer together"
		}, {
			"convergent": "Tending to one point"
		}, {
			"conversant": "Thoroughly informed"
		}, {
			"conversion": "Change from one state or position to another, or from one form to another"
		}, {
			"convertible": "Interchangeable"
		}, {
			"convex": "Curving like the segment of the globe or of the surface of a circle"
		}, {
			"conveyance": "That by which anything is transported"
		}, {
			"convivial": "Devoted to feasting, or to good-fellowship in eating or drinking"
		}, {
			"convolution": "A winding motion"
		}, {
			"convolve": "To move with a circling or winding motion"
		}, {
			"convoy": "A protecting force accompanying property in course of transportation"
		}, {
			"convulse": "To cause spasms in"
		}, {
			"convulsion": "A violent and abnormal muscular contraction of the body"
		}, {
			"copious": "Plenteous"
		}, {
			"coquette": "A flirt"
		}, {
			"cornice": "An ornamental molding running round the walls of a room close to the ceiling"
		}, {
			"cornucopia": "The horn of plenty, symbolizing peace and prosperity"
		}, {
			"corollary": "A proposition following so obviously from another that it requires little demonstration"
		}, {
			"coronation": "The act or ceremony of crowning a monarch"
		}, {
			"coronet": "Inferior crown denoting, according to its form, various degrees of noble rank less than sovereign"
		}, {
			"corporal": "Belonging or relating to the body as opposed to the mind"
		}, {
			"corporate": "Belonging to a corporation"
		}, {
			"corporeal": "Of a material nature; physical"
		}, {
			"corps": "A number or body of persons in some way associated or acting together"
		}, {
			"corpse": "A dead body"
		}, {
			"corpulent": "Obese"
		}, {
			"corpuscle": "A minute particle of matter"
		}, {
			"correlate": "To put in some relation of connection or correspondence"
		}, {
			"correlative": "Mutually involving or implying one another"
		}, {
			"corrigible": "Capable of reformation"
		}, {
			"corroborate": "To strengthen, as proof or conviction"
		}, {
			"corroboration": "Confirmation"
		}, {
			"corrode": "To ruin or destroy little by little"
		}, {
			"corrosion": "Gradual decay by crumbling or surface disintegration"
		}, {
			"corrosive": "That which causes gradual decay by crumbling or surface disintegration"
		}, {
			"corruptible": "Open to bribery"
		}, {
			"corruption": "Loss of purity or integrity"
		}, {
			"cosmetic": "Pertaining to the art of beautifying, especially the complexion"
		}, {
			"cosmic": "Pertaining to the universe"
		}, {
			"cosmogony": "A doctrine of creation or of the origin of the universe"
		}, {
			"cosmography": "The science that describes the universe, including astronomy, geography, and geology"
		}, {
			"cosmology": "The general science of the universe"
		}, {
			"cosmopolitan": "Common to all the world"
		}, {
			"cosmopolitanism": "A cosmopolitan character"
		}, {
			"cosmos": "The world or universe considered as a system, perfect in order and arrangement"
		}, {
			"counter-claim": "A cross-demand alleged by a defendant in his favor against the plaintiff"
		}, {
			"counteract": "To act in opposition to"
		}, {
			"counterbalance": "To oppose with an equal force"
		}, {
			"countercharge": "To accuse in return"
		}, {
			"counterfeit": "Made to resemble something else"
		}, {
			"counterpart": "Something taken with another for the completion of either"
		}, {
			"countervail": "To offset"
		}, {
			"counting-house": "A house or office used for transacting business, bookkeeping, correspondence, etc"
		}, {
			"countryman": "A rustic"
		}, {
			"courageous": "Brave"
		}, {
			"course": "Line of motion or direction"
		}, {
			"courser": "A fleet and spirited horse"
		}, {
			"courtesy": "Politeness originating in kindness and exercised habitually"
		}, {
			"covenant": "An agreement entered into by two or more persons or parties"
		}, {
			"covert": "Concealed, especially for an evil purpose"
		}, {
			"covey": "A flock of quails or partridges"
		}, {
			"cower": "To crouch down tremblingly, as through fear or shame"
		}, {
			"coxswain": "One who steers a rowboat, or one who has charge of a ship's boat and its crew under an officer"
		}, {
			"crag": "A rugged, rocky projection on a cliff or ledge"
		}, {
			"cranium": "The skull of an animal, especially that part enclosing the brain"
		}, {
			"crass": "Coarse or thick in nature or structure, as opposed to thin or fine"
		}, {
			"craving": "A vehement desire"
		}, {
			"creak": "A sharp, harsh, squeaking sound"
		}, {
			"creamery": "A butter-making establishment"
		}, {
			"creamy": "Resembling or containing cream"
		}, {
			"credence": "Belief"
		}, {
			"credible": "Believable"
		}, {
			"credulous": "Easily deceived"
		}, {
			"creed": "A formal summary of fundamental points of religious belief"
		}, {
			"crematory": "A place for cremating dead bodies"
		}, {
			"crevasse": "A deep crack or fissure in the ice of a glacier"
		}, {
			"crevice": "A small fissure, as between two contiguous surfaces"
		}, {
			"criterion": "A standard by which to determine the correctness of a judgment or conclusion"
		}, {
			"critique": "A criticism or critical review"
		}, {
			"crockery": "Earthenware made from baked clay"
		}, {
			"crucible": "A trying and purifying test or agency"
		}, {
			"crusade": "Any concerted movement, vigorously prosecuted, in behalf of an idea or principle"
		}, {
			"crustacean": "Pertaining to a division of arthropods, containing lobsters, crabs, crawfish, etc"
		}, {
			"crustaceous": "Having a crust-like shell"
		}, {
			"cryptogram": "Anything written in characters that are secret or so arranged as to have hidden meaning"
		}, {
			"crystallize": "To bring together or give fixed shape to"
		}, {
			"cudgel": "A short thick stick used as a club"
		}, {
			"culinary": "Of or pertaining to cooking or the kitchen"
		}, {
			"cull": "To pick or sort out from the rest"
		}, {
			"culpable": "Guilty"
		}, {
			"culprit": "A guilty person"
		}, {
			"culvert": "Any artificial covered channel for the passage of water through a bank or under a road, canal"
		}, {
			"cupidity": "Avarice"
		}, {
			"curable": "Capable of being remedied or corrected"
		}, {
			"curator": "A person having charge as of a library or museum"
		}, {
			"curio": "A piece of bric-a-brac"
		}, {
			"cursive": "Writing in which the letters are joined together"
		}, {
			"cursory": "Rapid and superficial"
		}, {
			"curt": "Concise, compressed, and abrupt in act or expression"
		}, {
			"curtail": "To cut off or cut short"
		}, {
			"curtsy": "A downward movement of the body by bending the knees"
		}, {
			"cycloid": "Like a circle"
		}, {
			"cygnet": "A young swan"
		}, {
			"cynical": "Exhibiting moral skepticism"
		}, {
			"cynicism": "Contempt for the opinions of others and of what others value"
		}, {
			"cynosure": "That to which general interest or attention is directed"
		}, {
			"daring": "Brave"
		}, {
			"darkling": "Blindly"
		}, {
			"Darwinism": "The doctrine that natural selection has been the prime cause of evolution of higher forms"
		}, {
			"dastard": "A base coward"
		}, {
			"datum": "A premise, starting-point, or given fact"
		}, {
			"dauntless": "Fearless"
		}, {
			"day-man": "A day-laborer"
		}, {
			"dead-heat": "A race in which two or more competitors come out even, and there is no winner"
		}, {
			"dearth": "Scarcity, as of something customary, essential ,or desirable"
		}, {
			"death's-head": "A human skull as a symbol of death"
		}, {
			"debase": "To lower in character or virtue"
		}, {
			"debatable": "Subject to contention or dispute"
		}, {
			"debonair": "Having gentle or courteous bearing or manner"
		}, {
			"debut": "A first appearance in society or on the stage"
		}, {
			"decagon": "A figure with ten sides and ten angles"
		}, {
			"decagram": "A weight of 10 grams"
		}, {
			"decaliter": "A liquid and dry measure of 10 liters"
		}, {
			"decalogue": "The ten commandments"
		}, {
			"Decameron": "A volume consisting of ten parts or books"
		}, {
			"decameter": "A length of ten meters"
		}, {
			"decamp": "To leave suddenly or unexpectedly"
		}, {
			"decapitate": "To behead"
		}, {
			"decapod": "Ten-footed or ten-armed"
		}, {
			"decasyllable": "A line of ten syllables"
		}, {
			"deceit": "Falsehood"
		}, {
			"deceitful": "Fraudulent"
		}, {
			"deceive": "To mislead by or as by falsehood"
		}, {
			"decency": "Moral fitness"
		}, {
			"decent": "Characterized by propriety of conduct, speech, manners, or dress"
		}, {
			"deciduous": "Falling off at maturity as petals after flowering, fruit when ripe, etc"
		}, {
			"decimal": "Founded on the number 10"
		}, {
			"decimate": "To destroy a measurable or large proportion of"
		}, {
			"decipher": "To find out the true words or meaning of, as something hardly legible"
		}, {
			"decisive": "Conclusive"
		}, {
			"declamation": "A speech recited or intended for recitation from memory in public"
		}, {
			"declamatory": "A full and formal style of utterance"
		}, {
			"declarative": "Containing a formal, positive, or explicit statement or affirmation"
		}, {
			"declension n. The change of endings in nouns and": "to express their different relations of gender"
		}, {
			"decorate": "To embellish"
		}, {
			"decorous": "Suitable for the occasion or circumstances"
		}, {
			"decoy": "Anything that allures, or is intended to allures into danger or temptation"
		}, {
			"decrepit": "Enfeebled, as by old age or some chronic infirmity"
		}, {
			"dedication": "The voluntary consecration or relinquishment of something to an end or cause"
		}, {
			"deduce": "To derive or draw as a conclusion by reasoning from given premises or principles"
		}, {
			"deface": "To mar or disfigure the face or external surface of"
		}, {
			"defalcate": "To cut off or take away, as a part of something"
		}, {
			"defamation": "Malicious and groundless injury done to the reputation or good name of another"
		}, {
			"defame": "To slander"
		}, {
			"default": "The neglect or omission of a legal requirement"
		}, {
			"defendant": "A person against whom a suit is brought"
		}, {
			"defensible": "Capable of being maintained or justified"
		}, {
			"defensive": "Carried on in resistance to aggression"
		}, {
			"defer": "To delay or put off to some other time"
		}, {
			"deference": "Respectful submission or yielding, as to another's opinion, wishes, or judgment"
		}, {
			"defiant": "Characterized by bold or insolent opposition"
		}, {
			"deficiency": "Lack or insufficiency"
		}, {
			"deficient": "Not having an adequate or proper supply or amount"
		}, {
			"definite": "Having an exact signification or positive meaning"
		}, {
			"deflect": "To cause to turn aside or downward"
		}, {
			"deforest": "To clear of forests"
		}, {
			"deform": "To disfigure"
		}, {
			"deformity": "A disfigurement"
		}, {
			"defraud": "To deprive of something dishonestly"
		}, {
			"defray": "To make payment for"
		}, {
			"degeneracy": "A becoming worse"
		}, {
			"degenerate": "To become worse or inferior"
		}, {
			"degradation": "Diminution, as of strength or magnitude"
		}, {
			"degrade": "To take away honors or position from"
		}, {
			"dehydrate": "To deprive of water"
		}, {
			"deify": "To regard or worship as a god"
		}, {
			"deign": "To deem worthy of notice or account"
		}, {
			"deist": "One who believes in God, but denies supernatural revelation"
		}, {
			"deity": "A god, goddess, or divine person"
		}, {
			"deject": "To dishearten"
		}, {
			"dejection": "Melancholy"
		}, {
			"delectable": "Delightful to the taste or to the senses"
		}, {
			"delectation": "Delight"
		}, {
			"deleterious": "Hurtful, morally or physically"
		}, {
			"delicacy": "That which is agreeable to a fine taste"
		}, {
			"delineate": "To represent by sketch or diagram"
		}, {
			"deliquesce": "To dissolve gradually and become liquid by absorption of moisture from the air"
		}, {
			"delirious": "Raving"
		}, {
			"delude": "To mislead the mind or judgment of"
		}, {
			"deluge": "To overwhelm with a flood of water"
		}, {
			"delusion": "Mistaken conviction, especially when more or less enduring"
		}, {
			"demagnetize": "To deprive (a magnet) of magnetism"
		}, {
			"demagogue": "An unprincipled politician"
		}, {
			"demeanor": "Deportment"
		}, {
			"demented": "Insane"
		}, {
			"demerit": "A mark for failure or bad conduct"
		}, {
			"demise": "Death"
		}, {
			"demobilize": "To disband, as troops"
		}, {
			"demolish": "To annihilate"
		}, {
			"demonstrable": "Capable of positive proof"
		}, {
			"demonstrate": "To prove indubitably"
		}, {
			"demonstrative": "Inclined to strong exhibition or expression of feeling or thoughts"
		}, {
			"demonstrator": "One who proves in a convincing and conclusive manner"
		}, {
			"demulcent": "Any application soothing to an irritable surface"
		}, {
			"demurrage": "the detention of a vessel beyond the specified time of sailing"
		}, {
			"dendroid": "Like a tree"
		}, {
			"dendrology": "The natural history of trees"
		}, {
			"denizen": "Inhabitant"
		}, {
			"denominate": "To give a name or epithet to"
		}, {
			"denomination": "A body of Christians united by a common faith and form of worship and discipline"
		}, {
			"denominator": "Part of a fraction which expresses the number of equal parts into which the unit is divided"
		}, {
			"denote": "To designate by word or mark"
		}, {
			"denouement": "That part of a play or story in which the mystery is cleared up"
		}, {
			"denounce": "To point out or publicly accuse as deserving of punishment, censure, or odium"
		}, {
			"dentifrice": "Any preparation used for cleaning the teeth"
		}, {
			"denude": "To strip the covering from"
		}, {
			"denunciation": "The act of declaring an action or person worthy of reprobation or punishment"
		}, {
			"deplete": "To reduce or lessen, as by use, exhaustion, or waste"
		}, {
			"deplorable": "Contemptible"
		}, {
			"deplore": "To regard with grief or sorrow"
		}, {
			"deponent": "Laying down"
		}, {
			"depopulate": "To remove the inhabitants from"
		}, {
			"deport": "To take or send away forcibly, as to a penal colony"
		}, {
			"deportment": "Demeanor"
		}, {
			"deposition": "Testimony legally taken on interrogatories and reduced to writing, for use as evidence in court"
		}, {
			"depositor": "One who makes a deposit, or has an amount deposited"
		}, {
			"depository": "A place where anything is kept in safety"
		}, {
			"deprave": "To render bad, especially morally bad"
		}, {
			"deprecate": "To express disapproval or regret for, with hope for the opposite"
		}, {
			"depreciate": "To lessen the worth of"
		}, {
			"depreciation": "A lowering in value or an underrating in worth"
		}, {
			"depress": "To press down"
		}, {
			"depression": "A falling of the spirits"
		}, {
			"depth": "Deepness"
		}, {
			"derelict": "Neglectful of obligation"
		}, {
			"deride": "To ridicule"
		}, {
			"derisible": "Open to ridicule"
		}, {
			"derision": "Ridicule"
		}, {
			"derivation": "That process by which a word is traced from its original root or primitive form and meaning"
		}, {
			"derivative": "Coming or acquired from some origin"
		}, {
			"derive": "To deduce, as from a premise"
		}, {
			"dermatology": "The branch of medical science which relates to the skin and its diseases"
		}, {
			"derrick": "An apparatus for hoisting and swinging great weights"
		}, {
			"descendant": "One who is descended lineally from another, as a child, grandchild, etc"
		}, {
			"descendent": "Proceeding downward"
		}, {
			"descent": "The act of moving or going downward"
		}, {
			"descry": "To discern"
		}, {
			"desert": "To abandon without regard to the welfare of the abandoned"
		}, {
			"desiccant": "Any remedy which, when applied externally, dries up or absorbs moisture, as that of wounds"
		}, {
			"designate": "To select or appoint, as by authority"
		}, {
			"desist": "To cease from action"
		}, {
			"desistance": "Cessation"
		}, {
			"despair": "Utter hopelessness and despondency"
		}, {
			"desperado": "One without regard for law or life"
		}, {
			"desperate": "Resorted to in a last extremity, or as if prompted by utter despair"
		}, {
			"despicable": "Contemptible"
		}, {
			"despite": "In spite of"
		}, {
			"despond": "To lose spirit, courage, or hope"
		}, {
			"despondent": "Disheartened"
		}, {
			"despot": "An absolute and irresponsible monarch"
		}, {
			"despotism": "Any severe and strict rule in which the judgment of the governed has little or no part"
		}, {
			"destitute": "Poverty-stricken"
		}, {
			"desultory": "Not connected with what precedes"
		}, {
			"deter": "To frighten away"
		}, {
			"deteriorate": "To grow worse"
		}, {
			"determinate": "Definitely limited or fixed"
		}, {
			"determination": "The act of deciding"
		}, {
			"deterrent": "Hindering from action through fear"
		}, {
			"detest": "To dislike or hate with intensity"
		}, {
			"detract": "To take away in such manner as to lessen value or estimation"
		}, {
			"detriment": "Something that causes damage, depreciation, or loss"
		}, {
			"detrude": "To push down forcibly"
		}, {
			"deviate": "To take a different course"
		}, {
			"devilry": "Malicious mischief"
		}, {
			"deviltry": "Wanton and malicious mischief"
		}, {
			"devious": "Out of the common or regular track"
		}, {
			"devise": "To invent"
		}, {
			"devout": "Religious"
		}, {
			"dexterity": "Readiness, precision, efficiency, and ease in any physical activity or in any mechanical work"
		}, {
			"diabolic": "Characteristic of the devil"
		}, {
			"diacritical": "Marking a difference"
		}, {
			"diagnose": "To distinguish, as a disease, by its characteristic phenomena"
		}, {
			"diagnosis": "Determination of the distinctive nature of a disease"
		}, {
			"dialect": "Forms of speech collectively that are peculiar to the people of a particular district"
		}, {
			"dialectician": "A logician"
		}, {
			"dialogue": "A formal conversation in which two or more take part"
		}, {
			"diaphanous": "Transparent"
		}, {
			"diatomic": "Containing only two atoms"
		}, {
			"diatribe": "A bitter or malicious criticism"
		}, {
			"dictum": "A positive utterance"
		}, {
			"didactic": "Pertaining to teaching"
		}, {
			"difference": "Dissimilarity in any respect"
		}, {
			"differentia": "Any essential characteristic of a species by reason of which it differs from other species"
		}, {
			"differential": "Distinctive"
		}, {
			"differentiate": "To acquire a distinct and separate character"
		}, {
			"diffidence": "Self-distrust"
		}, {
			"diffident": "Affected or possessed with self-distrust"
		}, {
			"diffusible": "Spreading rapidly through the system and acting quickly"
		}, {
			"diffusion": "Dispersion"
		}, {
			"dignitary": "One who holds high rank"
		}, {
			"digraph": "A union of two characters representing a single sound"
		}, {
			"digress": "To turn aside from the main subject and for a time dwell on some incidental matter"
		}, {
			"dilapidated": "Fallen into decay or partial ruin"
		}, {
			"dilate": "To enlarge in all directions"
		}, {
			"dilatory": "Tending to cause delay"
		}, {
			"dilemma": "A situation in which a choice between opposing modes of conduct is necessary"
		}, {
			"dilettante": "A superficial amateur"
		}, {
			"diligence": "Careful and persevering effort to accomplish what is undertaken"
		}, {
			"dilute": "To make more fluid or less concentrated by admixture with something"
		}, {
			"diminution": "Reduction"
		}, {
			"dimly": "Obscurely"
		}, {
			"diphthong": "The sound produced by combining two vowels in to a single syllable or running together the sounds"
		}, {
			"diplomacy": "Tact, shrewdness, or skill in conducting any kind of negotiations or in social matters"
		}, {
			"diplomat": "A representative of one sovereign state at the capital or court of another"
		}, {
			"diplomatic": "Characterized by special tact in negotiations"
		}, {
			"diplomatist": "One remarkable for tact and shrewd management"
		}, {
			"disagree": "To be opposite in opinion"
		}, {
			"disallow": "To withhold permission or sanction"
		}, {
			"disappear": "To cease to exist, either actually or for the time being"
		}, {
			"disappoint": "To fail to fulfill the expectation, hope, wish, or desire of"
		}, {
			"disapprove": "To regard with blame"
		}, {
			"disarm": "To deprive of weapons"
		}, {
			"disarrange": "To throw out of order"
		}, {
			"disavow": "To disclaim responsibility for"
		}, {
			"disavowal": "Denial"
		}, {
			"disbeliever": "One who refuses to believe"
		}, {
			"disburden": "To disencumber"
		}, {
			"disburse": "To pay out or expend, as money from a fund"
		}, {
			"discard": "To reject"
		}, {
			"discernible": "Perceivable"
		}, {
			"disciple": "One who believes the teaching of another, or who adopts and follows some doctrine"
		}, {
			"disciplinary": "Having the nature of systematic training or subjection to authority"
		}, {
			"discipline": "To train to obedience"
		}, {
			"disclaim": "To disavow any claim to, connection with, or responsibility to"
		}, {
			"discolor": "To stain"
		}, {
			"discomfit": "To put to confusion"
		}, {
			"discomfort": "The state of being positively uncomfortable"
		}, {
			"disconnect": "To undo or dissolve the connection or association of"
		}, {
			"disconsolate": "Grief-stricken"
		}, {
			"discontinuance": "Interruption or intermission"
		}, {
			"discord": "Absence of harmoniousness"
		}, {
			"discountenance": "To look upon with disfavor"
		}, {
			"discover": "To get first sight or knowledge of, as something previously unknown or unperceived"
		}, {
			"discredit": "To injure the reputation of"
		}, {
			"discreet": "Judicious"
		}, {
			"discrepant": "Opposite"
		}, {
			"discriminate": "To draw a distinction"
		}, {
			"discursive": "Passing from one subject to another"
		}, {
			"discussion": "Debate"
		}, {
			"disenfranchise": "To deprive of any right privilege or power"
		}, {
			"disengage": "To become detached"
		}, {
			"disfavor": "Disregard"
		}, {
			"disfigure": "To impair or injure the beauty, symmetry, or appearance of"
		}, {
			"dishabille": "Undress or negligent attire"
		}, {
			"dishonest": "Untrustworthy"
		}, {
			"disillusion": "To disenchant"
		}, {
			"disinfect": "To remove or destroy the poison of infectious or contagious diseases"
		}, {
			"disinfectant": "A substance used to destroy the germs of infectious diseases"
		}, {
			"disinherit": "To deprive of an inheritance"
		}, {
			"disinterested": "Impartial"
		}, {
			"disjunctive": "Helping or serving to disconnect or separate"
		}, {
			"dislocate": "To put out of proper place or order"
		}, {
			"dismissal": "Displacement by authority from an office or an employment"
		}, {
			"dismount": "To throw down, push off, or otherwise remove from a horse or the like"
		}, {
			"disobedience": "Neglect or refusal to comply with an authoritative injunction"
		}, {
			"disobedient": "Neglecting or refusing to obey"
		}, {
			"disown": "To refuse to acknowledge as one's own or as connected with oneself"
		}, {
			"disparage": "To regard or speak of slightingly"
		}, {
			"disparity": "Inequality"
		}, {
			"dispel": "To drive away by or as by scattering in different directions"
		}, {
			"dispensation": "That which is bestowed on or appointed to one from a higher power"
		}, {
			"displace": "To put out of the proper or accustomed place"
		}, {
			"dispossess": "To deprive of actual occupancy, especially of real estate"
		}, {
			"disputation": "Verbal controversy"
		}, {
			"disqualify": "To debar"
		}, {
			"disquiet": "To deprive of peace or tranquillity"
		}, {
			"disregard": "To take no notice of"
		}, {
			"disreputable": "Dishonorable or disgraceful"
		}, {
			"disrepute": "A bad name or character"
		}, {
			"disrobe": "To unclothe"
		}, {
			"disrupt": "To burst or break asunder"
		}, {
			"dissatisfy": "To displease"
		}, {
			"dissect": "To cut apart or to pieces"
		}, {
			"dissection": "The act or operation of cutting in pieces, specifically of a plant or an animal"
		}, {
			"dissemble": "To hide by pretending something different"
		}, {
			"disseminate": "To sow or scatter abroad, as seed is sown"
		}, {
			"dissension": "Angry or violent difference of opinion"
		}, {
			"dissent": "Disagreement"
		}, {
			"dissentient": "One who disagrees"
		}, {
			"dissentious": "Contentious"
		}, {
			"dissertation": "Thesis"
		}, {
			"disservice": "An ill turn"
		}, {
			"dissever": "To divide"
		}, {
			"dissimilar": "Different"
		}, {
			"dissipate": "To disperse or disappear"
		}, {
			"dissipation": "The state of being dispersed or scattered"
		}, {
			"dissolute": "Lewd"
		}, {
			"dissolution": "A breaking up of a union of persons"
		}, {
			"dissolve": "To liquefy or soften, as by heat or moisture"
		}, {
			"dissonance": "Discord"
		}, {
			"dissonant": "Harsh or disagreeable in sound"
		}, {
			"dissuade": "To change the purpose or alter the plans of by persuasion, counsel, or pleading"
		}, {
			"dissuasion": "The act of changing the purpose of or altering the plans of through persuasion, or pleading"
		}, {
			"disyllable": "A word of two syllables"
		}, {
			"distemper": "A disease or malady"
		}, {
			"distend": "To stretch out or expand in every direction"
		}, {
			"distensible": "Capable of being stretched out or expanded in every direction"
		}, {
			"distention": "Expansion"
		}, {
			"distill": "To extract or produce by vaporization and condensation"
		}, {
			"distillation": "Separation of the more volatile parts of a substance from those less volatile"
		}, {
			"distiller": "One occupied in the business of distilling alcoholic liquors"
		}, {
			"distinction": "A note or designation of honor, officially recognizing superiority or success in studies"
		}, {
			"distort": "To twist into an unnatural or irregular form"
		}, {
			"distrain": "To subject a person to distress"
		}, {
			"distrainor": "One who subjects a person to distress"
		}, {
			"distraught": "Bewildered"
		}, {
			"distrust": "Lack of confidence in the power, wisdom, or good intent of any person"
		}, {
			"disunion": "Separation of relations or interests"
		}, {
			"diurnal": "Daily"
		}, {
			"divagation": "Digression"
		}, {
			"divergent": "Tending in different directions"
		}, {
			"diverse": "Capable of various forms"
		}, {
			"diversion": "Pastime"
		}, {
			"diversity": "Dissimilitude"
		}, {
			"divert": "To turn from the accustomed course or a line of action already established"
		}, {
			"divertible": "Able to be turned from the accustomed course or a line of action already established"
		}, {
			"divest": "To strip, specifically of clothes, ornaments, or accouterments or disinvestment"
		}, {
			"divination": "The pretended forecast of future events or discovery of what is lost or hidden"
		}, {
			"divinity": "The quality or character of being godlike"
		}, {
			"divisible": "Capable of being separated into parts"
		}, {
			"divisor": "That by which a number or quantity is divided"
		}, {
			"divulge": "To tell or make known, as something previously private or secret"
		}, {
			"divulgence": "A divulging"
		}, {
			"docile": "Easy to manage"
		}, {
			"docket": "The registry of judgments of a court"
		}, {
			"doe": "The female of the deer"
		}, {
			"dogma": "A statement of religious faith or duty formulated by a body claiming authority"
		}, {
			"dogmatic": "Making statements without argument or evidence"
		}, {
			"dogmatize": "To make positive assertions without supporting them by argument or evidence"
		}, {
			"doleful": "Melancholy"
		}, {
			"dolesome": "Melancholy"
		}, {
			"dolor": "Lamentation"
		}, {
			"dolorous": "Expressing or causing sorrow or pain"
		}, {
			"domain": "A sphere or field of action or interest"
		}, {
			"domesticity": "Life in or fondness for one's home and family"
		}, {
			"domicile": "The place where one lives"
		}, {
			"dominance": "Ascendancy"
		}, {
			"dominant": "Conspicuously prominent"
		}, {
			"dominate": "To influence controllingly"
		}, {
			"domination": "Control by the exercise of power or constituted authority"
		}, {
			"domineer": "To rule with insolence or unnecessary annoyance"
		}, {
			"donate": "To bestow as a gift, especially for a worthy cause"
		}, {
			"donator": "One who makes a donation or present"
		}, {
			"donee": "A person to whom a donation is made"
		}, {
			"donor": "One who makes a donation or present"
		}, {
			"dormant": "Being in a state of or resembling sleep"
		}, {
			"doublet": "One of a pair of like things"
		}, {
			"doubly": "In twofold degree or extent"
		}, {
			"dowry": "The property which a wife brings to her husband in marriage"
		}, {
			"drachma": "A modern and an ancient Greek coin"
		}, {
			"dragnet": "A net to be drawn along the bottom of the water"
		}, {
			"dragoon": "In the British army, a cavalryman"
		}, {
			"drainage": "The means of draining collectively, as a system of conduits, trenches, pipes, etc"
		}, {
			"dramatist": "One who writes plays"
		}, {
			"dramatize": "To relate or represent in a dramatic or theatrical manner"
		}, {
			"drastic": "Acting vigorously"
		}, {
			"drought": "Dry weather, especially when so long continued as to cause vegetation to wither"
		}, {
			"drowsy": "Heavy with sleepiness"
		}, {
			"drudgery": "Hard and constant work in any menial or dull occupation"
		}, {
			"dubious": "Doubtful"
		}, {
			"duckling": "A young duck"
		}, {
			"ductile": "Capable of being drawn out, as into wire or a thread"
		}, {
			"duet": "A composition for two voices or instruments"
		}, {
			"dun": "To make a demand or repeated demands on for payment"
		}, {
			"duplex": "Having two parts"
		}, {
			"duplicity": "Double-dealing"
		}, {
			"durance": "Confinement"
		}, {
			"duration": "The period of time during which anything lasts"
		}, {
			"duteous": "Showing submission to natural superiors"
		}, {
			"dutiable": "Subject to a duty, especially a customs duty"
		}, {
			"dutiful": "Obedient"
		}, {
			"dwindle": "To diminish or become less"
		}, {
			"dyne": "The force which, applied to a mass of one gram for 1 second, would give it a velocity of 1 cm/s"
		}, {
			"earnest": "Ardent in spirit and speech"
		}, {
			"earthenware": "Anything made of clay and baked in a kiln or dried in the sun"
		}, {
			"eatable": "Edible"
		}, {
			"ebullient": "Showing enthusiasm or exhilaration of feeling"
		}, {
			"eccentric": "Peculiar"
		}, {
			"eccentricity": "Idiosyncrasy"
		}, {
			"eclipse": "The obstruction of a heavenly body by its entering into the shadow of another body"
		}, {
			"economize": "To spend sparingly"
		}, {
			"ecstasy": "Rapturous excitement or exaltation"
		}, {
			"ecstatic": "Enraptured"
		}, {
			"edible": "Suitable to be eaten"
		}, {
			"edict": "That which is uttered or proclaimed by authority as a rule of action"
		}, {
			"edify": "To build up, or strengthen, especially in morals or religion"
		}, {
			"editorial": "An article in a periodical written by the editor and published as an official argument"
		}, {
			"educe": "To draw out"
		}, {
			"efface": "To obliterate"
		}, {
			"effect": "A consequence"
		}, {
			"effective": "Fit for a destined purpose"
		}, {
			"effectual": "Efficient"
		}, {
			"effeminacy": "Womanishness"
		}, {
			"effeminate": "Having womanish traits or qualities"
		}, {
			"effervesce": "To bubble up"
		}, {
			"effervescent": "Giving off bubbles of gas"
		}, {
			"effete": "Exhausted, as having performed its functions"
		}, {
			"efficacious": "Effective"
		}, {
			"efficacy": "The power to produce an intended effect as shown in the production of it"
		}, {
			"efficiency": "The state of possessing adequate skill or knowledge for the performance of a duty"
		}, {
			"efficient": "Having and exercising the power to produce effects or results"
		}, {
			"efflorescence": "The state of being flowery, or a flowery appearance"
		}, {
			"efflorescent": "Opening in flower"
		}, {
			"effluvium": "A noxious or ill-smelling exhalation from decaying or putrefying matter"
		}, {
			"effrontery": "Unblushing impudence"
		}, {
			"effulgence": "Splendor"
		}, {
			"effuse": "To pour forth"
		}, {
			"effusion": "an outpouring"
		}, {
			"egoism": "The theory that places man's chief good in the completeness of self"
		}, {
			"egoist": "One who advocates or practices egoism"
		}, {
			"egotism": "Self-conceit"
		}, {
			"egotist": "One given to self-mention or who is constantly telling of his own views and experiences"
		}, {
			"egregious": "Extreme"
		}, {
			"egress": "Any place of exit"
		}, {
			"eject": "To expel"
		}, {
			"elapse": "To quietly terminate: said of time"
		}, {
			"elasticity": "That property of matter by which a body tends to return to a former shape after being changed"
		}, {
			"electrolysis": "The process of decomposing a chemical compound by the passage of an electric current"
		}, {
			"electrotype": "A metallic copy of any surface, as a coin"
		}, {
			"elegy": "A lyric poem lamenting the dead"
		}, {
			"element": "A component or essential part"
		}, {
			"elicit": "To educe or extract gradually or without violence"
		}, {
			"eligible": "Qualified for selection"
		}, {
			"eliminate": "To separate and cast aside"
		}, {
			"Elizabethan": "Relating to Elizabeth, queen of England, or to her era"
		}, {
			"elocution": "The art of correct intonation, inflection, and gesture in public speaking or reading"
		}, {
			"eloquent": "Having the ability to express emotion or feeling in lofty and impassioned speech"
		}, {
			"elucidate": "To bring out more clearly the facts concerning"
		}, {
			"elude": "To evade the search or pursuit of by dexterity or artifice"
		}, {
			"elusion": "Evasion"
		}, {
			"emaciate": "To waste away in flesh"
		}, {
			"emanate": "To flow forth or proceed, as from some source"
		}, {
			"emancipate": "To release from bondage"
		}, {
			"embargo": "Authoritative stoppage of foreign commerce or of any special trade"
		}, {
			"embark": "To make a beginning in some occupation or scheme"
		}, {
			"embarrass": "To render flustered or agitated"
		}, {
			"embellish": "To make beautiful or elegant by adding attractive or ornamental features"
		}, {
			"embezzle": "To misappropriate secretly"
		}, {
			"emblazon": "To set forth publicly or in glowing terms"
		}, {
			"emblem": "A symbol"
		}, {
			"embody": "To express, formulate, or exemplify in a concrete, compact or visible form"
		}, {
			"embolden": "To give courage to"
		}, {
			"embolism": "An obstruction or plugging up of an artery or other blood-vessel"
		}, {
			"embroil": "To involve in dissension or strife"
		}, {
			"emerge": "To come into view or into existence"
		}, {
			"emergence": "A coming into view"
		}, {
			"emergent": "Coming into view"
		}, {
			"emeritus": "Retired from active service but retained to an honorary position"
		}, {
			"emigrant": "One who moves from one place to settle in another"
		}, {
			"emigrate": "To go from one country, state, or region for the purpose of settling or residing in another"
		}, {
			"eminence": "An elevated position with respect to rank, place, character, condition, etc"
		}, {
			"eminent": "High in station, merit, or esteem"
		}, {
			"emit": "To send or give out"
		}, {
			"emphasis": "Any special impressiveness added to an utterance or act, or stress laid upon some word"
		}, {
			"emphasize": "To articulate or enunciate with special impressiveness upon a word, or a group of words"
		}, {
			"emphatic": "Spoken with any special impressiveness laid upon an act, word, or set of words"
		}, {
			"employee": "One who works for wages or a salary"
		}, {
			"employer": "One who uses or engages the services of other persons for pay"
		}, {
			"emporium": "A bazaar or shop"
		}, {
			"empower": "To delegate authority to"
		}, {
			"emulate": "To imitate with intent to equal or surpass"
		}, {
			"enact": "To make into law, as by legislative act"
		}, {
			"enamor": "To inspire with ardent love"
		}, {
			"encamp": "To pitch tents for a resting-place"
		}, {
			"encomium": "A formal or discriminating expression of praise"
		}, {
			"encompass": "To encircle"
		}, {
			"encore": "The call for a repetition, as of some part of a play or performance"
		}, {
			"encourage": "To inspire with courage, hope, or strength of mind"
		}, {
			"encroach": "To invade partially or insidiously and appropriate the possessions of another"
		}, {
			"encumber": "To impede with obstacles"
		}, {
			"encyclical": "Intended for general circulation"
		}, {
			"encyclopedia": "A work containing information on subjects, or exhaustive of one subject"
		}, {
			"endanger": "To expose to peril"
		}, {
			"endear": "To cause to be loved"
		}, {
			"endemic": "Peculiar to some specified country or people"
		}, {
			"endue": "To endow with some quality, gift, or grace, usually spiritual"
		}, {
			"endurable": "Tolerable"
		}, {
			"endurance": "The ability to suffer pain, distress, hardship, or stress of any kind without succumbing"
		}, {
			"energetic": "Working vigorously"
		}, {
			"enervate": "To render ineffective or inoperative"
		}, {
			"enfeeble": "To debilitate"
		}, {
			"enfranchise": "To endow with a privilege, especially with the right to vote"
		}, {
			"engender": "To produce"
		}, {
			"engrave": "To cut or carve in or upon some surface"
		}, {
			"engross": "To occupy completely"
		}, {
			"enhance": "To intensify"
		}, {
			"enigma": "A riddle"
		}, {
			"enjoin": "To command"
		}, {
			"enkindle": "To set on fire"
		}, {
			"enlighten": "To cause to see clearly"
		}, {
			"enlist": "To enter voluntarily the military service by formal enrollment"
		}, {
			"enmity": "Hatred"
		}, {
			"ennoble": "To dignify"
		}, {
			"enormity": "Immensity"
		}, {
			"enormous": "Gigantic"
		}, {
			"enrage": "To infuriate"
		}, {
			"enrapture": "To delight extravagantly or intensely"
		}, {
			"enshrine": "To keep sacred"
		}, {
			"ensnare": "To entrap"
		}, {
			"entail": "To involve; necessitate"
		}, {
			"entangle": "To involve in difficulties, confusion, or complications"
		}, {
			"enthrall": "To bring or hold under any overmastering influence"
		}, {
			"enthrone": "To invest with sovereign power"
		}, {
			"enthuse": "To yield to or display intense and rapturous feeling"
		}, {
			"enthusiastic": "Full of zeal and fervor"
		}, {
			"entirety": "A complete thing"
		}, {
			"entomology": "The branch of zoology that treats of insects"
		}, {
			"entrails n": "The internal parts of an animal"
		}, {
			"entreaty": "An earnest request"
		}, {
			"entree": "The act of entering"
		}, {
			"entrench": "To fortify or protect, as with a trench or ditch and wall"
		}, {
			"entwine": "To interweave"
		}, {
			"enumerate": "To name one by one"
		}, {
			"epic": "A poem celebrating in formal verse the mythical achievements of great personages, heroes, etc"
		}, {
			"epicure": "One who cultivates a delicate taste for eating and drinking"
		}, {
			"Epicurean": "Indulging, ministering, or pertaining to daintiness of appetite"
		}, {
			"epicycle": "A circle that rolls upon the external or internal circumference of another circle"
		}, {
			"epicycloid": "A curve traced by a point on the circumference of a circle which rolls upon another circle"
		}, {
			"epidemic": "Wide-spread occurrence of a disease in a certain region"
		}, {
			"epidermis": "The outer skin"
		}, {
			"epigram": "A pithy phrasing of a shrewd observation"
		}, {
			"epilogue": "The close of a narrative or dramatic poem"
		}, {
			"epiphany": "Any appearance or bodily manifestation of a deity"
		}, {
			"episode": "An incident or story in a literary work, separable from yet growing out of it"
		}, {
			"epitaph": "An inscription on a tomb or monument in honor or in memory of the dead"
		}, {
			"epithet": "Word used adjectivally to describe some quality or attribute of is objects, as in \"Father Aeneas\""
		}, {
			"epitome": "A simplified representation"
		}, {
			"epizootic": "Prevailing among animals"
		}, {
			"epoch": "A interval of time, memorable for extraordinary events"
		}, {
			"epode": "A species of lyric poems"
		}, {
			"equalize": "To render uniform"
		}, {
			"equanimity": "Evenness of mind or temper"
		}, {
			"equestrian": "Pertaining to horses or horsemanship"
		}, {
			"equilibrium": "A state of balance"
		}, {
			"equitable": "Characterized by fairness"
		}, {
			"equity": "Fairness or impartiality"
		}, {
			"equivalent": "Equal in value, force, meaning, or the like"
		}, {
			"equivocal": "Ambiguous"
		}, {
			"equivocate": "To use words of double meaning"
		}, {
			"eradicate": "To destroy thoroughly"
		}, {
			"errant": "Roving or wandering, as in search of adventure or opportunity for gallant deeds"
		}, {
			"erratic": "Irregular"
		}, {
			"erroneous": "Incorrect"
		}, {
			"erudite": "Very-learned"
		}, {
			"erudition": "Extensive knowledge of literature, history, language, etc"
		}, {
			"eschew": "To keep clear of"
		}, {
			"espy": "To keep close watch"
		}, {
			"esquire": "A title of dignity, office, or courtesy"
		}, {
			"essence": "That which makes a thing to be what it is"
		}, {
			"esthetic": "Pertaining to beauty, taste, or the fine arts"
		}, {
			"estimable": "Worthy of respect"
		}, {
			"estrange": "To alienate"
		}, {
			"estuary": "A wide lower part of a tidal river"
		}, {
			"et cetera": "And so forth"
		}, {
			"eugenic": "Relating to the development and improvement of race"
		}, {
			"eulogize": "To speak or write a laudation of a person's life or character"
		}, {
			"eulogy": "A spoken or written laudation of a person's life or character"
		}, {
			"euphemism": "A figure of speech by which a phrase less offensive is substituted"
		}, {
			"euphonious": "Characterized by agreeableness of sound"
		}, {
			"euphony": "Agreeableness of sound"
		}, {
			"eureka": "I have found it"
		}, {
			"evade": "To avoid by artifice"
		}, {
			"evanesce": "To vanish gradually"
		}, {
			"evanescent": "Fleeting"
		}, {
			"evangelical": "Seeking the conversion of sinners"
		}, {
			"evangelist": "A preacher who goes from place to place holding services"
		}, {
			"evasion": "Escape"
		}, {
			"eventual": "Ultimate"
		}, {
			"evert": "To turn inside out"
		}, {
			"evict": "To dispossess pursuant to judicial decree"
		}, {
			"evidential": "Indicative"
		}, {
			"evince": "To make manifest or evident"
		}, {
			"evoke": "To call or summon forth"
		}, {
			"evolution": "Development or growth"
		}, {
			"evolve": "To unfold or expand"
		}, {
			"exacerbate": "To make more sharp, severe, or virulent"
		}, {
			"exaggerate": "To overstate"
		}, {
			"exasperate": "To excite great anger in"
		}, {
			"excavate": "To remove by digging or scooping out"
		}, {
			"exceed": "To go beyond, as in measure, quality, value, action, power, skill, etc"
		}, {
			"excel": "To be superior or distinguished"
		}, {
			"excellence": "Possession of eminently or unusually good qualities"
		}, {
			"excellency": "A title of honor bestowed upon various high officials"
		}, {
			"excellent": "Possessing distinguished merit"
		}, {
			"excerpt": "An extract or selection from written or printed matter"
		}, {
			"excess": "That which passes the ordinary, proper, or required limit, measure, or experience"
		}, {
			"excitable": "Nervously high-strung"
		}, {
			"excitation": "Intensified emotion or action"
		}, {
			"exclamation": "An abrupt or emphatic expression of thought or of feeling"
		}, {
			"exclude": "To shut out purposely or forcibly"
		}, {
			"exclusion": "Non-admission"
		}, {
			"excrescence": "Any unnatural addition, outgrowth, or development"
		}, {
			"excretion": "The getting rid of waste matter"
		}, {
			"excruciate": "To inflict severe pain or agony upon"
		}, {
			"excursion": "A journey"
		}, {
			"excusable": "Justifiable"
		}, {
			"execrable": "Abominable"
		}, {
			"execration": "An accursed thing"
		}, {
			"executor": "A person nominated by the will of another to execute the will"
		}, {
			"exegesis": "Biblical exposition or interpretation"
		}, {
			"exemplar": "A model, pattern, or original to be copied or imitated"
		}, {
			"exemplary": "Fitted to serve as a model or example worthy of imitation"
		}, {
			"exemplify": "To show by example"
		}, {
			"exempt": "Free, clear, or released, as from some liability, or restriction affecting others"
		}, {
			"exert": "To make an effort"
		}, {
			"exhale": "To breathe forth"
		}, {
			"exhaust": "To empty by draining off the contents"
		}, {
			"exhaustible": "Causing or tending to cause exhaustion"
		}, {
			"exhaustion": "Deprivation of strength or energy"
		}, {
			"exhaustive": "Thorough and complete in execution"
		}, {
			"exhilarate": "To fill with high or cheerful spirits"
		}, {
			"exhume": "To dig out of the earth (what has been buried)"
		}, {
			"exigency": "A critical period or condition"
		}, {
			"exigent": "Urgent"
		}, {
			"existence": "Possession or continuance of being"
		}, {
			"exit": "A way or passage out"
		}, {
			"exodus": "A going forth or departure from a place or country, especially of many people"
		}, {
			"exonerate": "To relieve or vindicate from accusation, imputation, or blame"
		}, {
			"exorbitance": "Extravagance or enormity"
		}, {
			"exorbitant": "Going beyond usual and proper limits"
		}, {
			"exorcise": "To cast or drive out by religious or magical means"
		}, {
			"exotic": "Foreign"
		}, {
			"expand": "To increase in range or scope"
		}, {
			"expanse": "A continuous area or stretch"
		}, {
			"expansion": "Increase of amount, size, scope, or the like"
		}, {
			"expatriate": "To drive from one's own country"
		}, {
			"expect": "To look forward to as certain or probable"
		}, {
			"expectancy": "The act or state of looking forward to as certain or probable"
		}, {
			"expectorate": "To cough up and spit forth"
		}, {
			"expediency": "Fitness to meet the requirements of a particular case"
		}, {
			"expedient": "Contributing to personal advantage"
		}, {
			"expedite": "To hasten the movement or progress of"
		}, {
			"expeditious": "Speedy"
		}, {
			"expend": "To spend"
		}, {
			"expense": "The laying out or expending or money or other resources, as time or strength"
		}, {
			"expiate": "To make satisfaction or amends for"
		}, {
			"explicate": "To clear from involvement"
		}, {
			"explicit": "Definite"
		}, {
			"explode": "To cause to burst in pieces by force from within"
		}, {
			"explosion": "A sudden and violent outbreak"
		}, {
			"explosive": "Pertaining to a sudden and violent outbreak"
		}, {
			"exposition": "Formal presentation"
		}, {
			"expository": "Pertaining to a formal presentation"
		}, {
			"expostulate": "To discuss"
		}, {
			"exposure": "An open situation or position in relation to the sun, elements, or points of the compass"
		}, {
			"expressive": "Full of meaning"
		}, {
			"expulsion": "Forcible ejection"
		}, {
			"extant": "Still existing and known"
		}, {
			"extemporaneous": "Done or made without much or any preparation"
		}, {
			"extempore": "Without studied or special preparation"
		}, {
			"extensible": "Capable of being thrust out"
		}, {
			"extension": "A reaching or stretching out, as in space, time or scope"
		}, {
			"extensive": "Extended widely in space, time, or scope"
		}, {
			"extensor": "A muscle that causes extension"
		}, {
			"extenuate": "To diminish the gravity or importance of"
		}, {
			"exterior": "That which is outside"
		}, {
			"external": "Anything relating or belonging to the outside"
		}, {
			"extinct": "Being no longer in existence"
		}, {
			"extinguish": "To render extinct"
		}, {
			"extol": "To praise in the highest terms"
		}, {
			"extort": "To obtain by violence, threats, compulsion, or the subjection of another to some necessity"
		}, {
			"extortion": "The practice of obtaining by violence or compulsion"
		}, {
			"extradite": "To surrender the custody of"
		}, {
			"extradition": "The surrender by a government of a person accused of crime to the justice of another government"
		}, {
			"extrajudicial": "Happening out of court"
		}, {
			"extraneous": "Having no essential relation to a subject"
		}, {
			"extraordinary": "Unusual"
		}, {
			"extravagance": "Undue expenditure of money"
		}, {
			"extravagant": "Needlessly free or lavish in expenditure"
		}, {
			"extremist": "One who supports extreme measures or holds extreme views"
		}, {
			"extremity": "The utmost point, side, or border, or that farthest removed from a mean position"
		}, {
			"extricate": "Disentangle"
		}, {
			"extrude": "To drive out or away"
		}, {
			"exuberance": "Rich supply"
		}, {
			"exuberant": "Marked by great plentifulness"
		}, {
			"fabricate": "To invent fancifully or falsely"
		}, {
			"fabulous": "Incredible"
		}, {
			"facet": "One of the small triangular plane surfaces of a diamond or other gem"
		}, {
			"facetious": "Amusing"
		}, {
			"facial": "Pertaining to the face"
		}, {
			"facile": "Not difficult to do"
		}, {
			"facilitate": "To make more easy"
		}, {
			"facility": "Ease"
		}, {
			"facsimile": "An exact copy or reproduction"
		}, {
			"faction": "A number of persons combined for a common purpose"
		}, {
			"factious": "Turbulent"
		}, {
			"fallacious": "Illogical"
		}, {
			"fallacy": "Any unsound or delusive mode of reasoning, or anything based on such reasoning"
		}, {
			"fallible": "Capable of erring"
		}, {
			"fallow": "Land broken up and left to become mellow or to rest"
		}, {
			"famish": "To suffer extremity of hunger or thirst"
		}, {
			"fanatic": "A religious zealot"
		}, {
			"fancier": "One having a taste for or interest in special objects"
		}, {
			"fanciless": "Unimaginative"
		}, {
			"fastidious": "Hard to please"
		}, {
			"fathom": "A measure of length, 6 feet"
		}, {
			"fatuous": "Idiotic"
		}, {
			"faulty": "Imperfect"
		}, {
			"faun": "One of a class of deities of the woods and herds represented as half human, with goats feet"
		}, {
			"fawn": "A young deer"
		}, {
			"fealty": "Loyalty"
		}, {
			"feasible": "That may be done, performed, or effected; practicable"
		}, {
			"federate": "To league together"
		}, {
			"feint": "Any sham, pretense, or deceptive movement"
		}, {
			"felicitate": "To wish joy or happiness to, especially in view of a coming event"
		}, {
			"felicity": "A state of well-founded happiness"
		}, {
			"felon": "A criminal or depraved person"
		}, {
			"felonious": "Showing criminal or evil purpose"
		}, {
			"felony": "One of the highest class of offenses, and punishable with death or imprisonment"
		}, {
			"feminine": "Characteristic of woman or womankind"
		}, {
			"fernery": "A place in which ferns are grown"
		}, {
			"ferocious": "Of a wild, fierce, and savage nature"
		}, {
			"ferocity": "Savageness"
		}, {
			"fervent": "Ardent in feeling"
		}, {
			"fervid": "Intense"
		}, {
			"fervor": "Ardor or intensity of feeling"
		}, {
			"festal": "Joyous"
		}, {
			"festive": "Merry"
		}, {
			"fete": "A festival or feast"
		}, {
			"fetus": "The young in the womb or in the egg"
		}, {
			"feudal": "Pertaining to the relation of lord and vassal"
		}, {
			"feudalism": "The feudal system"
		}, {
			"fez": "A brimless felt cap in the shape of a truncated cone, usually red with a black tassel"
		}, {
			"fiasco": "A complete or humiliating failure"
		}, {
			"fickle": "Unduly changeable in feeling, judgment, or purpose"
		}, {
			"fictitious": "Created or formed by the imagination"
		}, {
			"fidelity": "Loyalty"
		}, {
			"fiducial": "Indicative of faith or trust"
		}, {
			"fief": "A landed estate held under feudal tenure"
		}, {
			"filibuster": "One who attempts to obstruct legislation"
		}, {
			"finale": "Concluding performance"
		}, {
			"finality": "The state or quality of being final or complete"
		}, {
			"finally": "At last"
		}, {
			"financial": "Monetary"
		}, {
			"financier": "One skilled in or occupied with financial affairs or operations"
		}, {
			"finery": "That which is used to decorate the person or dress"
		}, {
			"finesse": "Subtle contrivance used to gain a point"
		}, {
			"finite": "Limited"
		}, {
			"fiscal": "Pertaining to the treasury or public finances of a government"
		}, {
			"fishmonger": "One who sells fish"
		}, {
			"fissure": "A crack or crack-like depression"
		}, {
			"fitful": "Spasmodic"
		}, {
			"fixture": "One who or that which is expected to remain permanently in its position"
		}, {
			"flag-officer": "The captain of a flag-ship"
		}, {
			"flagrant": "Openly scandalous"
		}, {
			"flamboyant": "Characterized by extravagance and in general by want of good taste"
		}, {
			"flatulence": "Accumulation of gas in the stomach and bowels"
		}, {
			"flection": "The act of bending"
		}, {
			"fledgling": "A young bird"
		}, {
			"flexible": "Pliable"
		}, {
			"flimsy": "Thin and weak"
		}, {
			"flippant": "Having a light, pert, trifling disposition"
		}, {
			"floe": "A collection of tabular masses of floating polar ice"
		}, {
			"flora": "The aggregate of plants growing without cultivation in a district"
		}, {
			"floral": "Pertaining to flowers"
		}, {
			"florid": "Flushed with red"
		}, {
			"florist": "A dealer in flowers"
		}, {
			"fluctuate": "To pass backward and forward irregularly from one state or degree to another"
		}, {
			"fluctuation": "Frequent irregular change back and forth from one state or degree to another"
		}, {
			"flue": "A smoke-duct in a chimney"
		}, {
			"fluent": "Having a ready or easy flow of words or ideas"
		}, {
			"fluential": "Pertaining to streams"
		}, {
			"flux": "A state of constant movement, change, or renewal"
		}, {
			"foggy": "Obscure"
		}, {
			"foible": "A personal weakness or failing"
		}, {
			"foist": "To palm off"
		}, {
			"foliage": "Any growth of leaves"
		}, {
			"folio": "A sheet of paper folded once, or of a size adapted to folding once"
		}, {
			"folk-lore": "The traditions, beliefs, and customs of the common people"
		}, {
			"fondle": "To handle tenderly and lovingly"
		}, {
			"foolery": "Folly"
		}, {
			"foot-note": "A note of explanation or comment at the foot of a page or column"
		}, {
			"foppery": "Dandyism"
		}, {
			"foppish": "Characteristic of one who is unduly devoted to dress and the niceties of manners"
		}, {
			"forbearance": "Patient endurance or toleration of offenses"
		}, {
			"forby": "Besides"
		}, {
			"forcible": "Violent"
		}, {
			"forecourt": "A court opening directly from the street"
		}, {
			"forejudge": "To judge of before hearing evidence"
		}, {
			"forepeak": "The extreme forward part of a ship's hold, under the lowest deck"
		}, {
			"foreshore": "That part of a shore uncovered at low tide"
		}, {
			"forebode": "To be an omen or warning sign of, especially of evil"
		}, {
			"forecast": "To predict"
		}, {
			"forecastle": "That part of the upper deck of a ship forward of the after fore-shrouds"
		}, {
			"foreclose": "To bar by judicial proceedings the equitable right of a mortgagor to redeem property"
		}, {
			"forefather": "An ancestor"
		}, {
			"forego": "To deny oneself the pleasure or profit of"
		}, {
			"foreground": "That part of a landscape or picture situated or represented as nearest the spectator"
		}, {
			"forehead": "The upper part of the face, between the eyes and the hair"
		}, {
			"foreign": "Belonging to, situated in, or derived from another country"
		}, {
			"foreigner": "A citizen of a foreign country"
		}, {
			"foreknowledge": "Prescience"
		}, {
			"foreman": "The head man"
		}, {
			"foreordain": "To predetermine"
		}, {
			"foreordination": "Predestination"
		}, {
			"forerun": "To go before as introducing or ushering in"
		}, {
			"foresail": "A square sail"
		}, {
			"foresee": "To discern beforehand"
		}, {
			"foresight": "Provision against harm or need"
		}, {
			"foretell": "To predict"
		}, {
			"forethought": "Premeditation"
		}, {
			"forfeit": "To lose possession of through failure to fulfill some obligation"
		}, {
			"forfend": "To ward off"
		}, {
			"forgery": "Counterfeiting"
		}, {
			"forgo": "To deny oneself"
		}, {
			"formation": "Relative disposition of parts"
		}, {
			"formidable": "Difficult to accomplish"
		}, {
			"formula": "Fixed rule or set form"
		}, {
			"forswear": "To renounce upon oath"
		}, {
			"forte": "A strong point"
		}, {
			"forth": "Into notice or view"
		}, {
			"forthright": "With directness"
		}, {
			"fortify": "To provide with defensive works"
		}, {
			"fortitude": "Patient courage"
		}, {
			"foursome": "Consisting of four"
		}, {
			"fracture": "A break"
		}, {
			"frailty": "Liability to be broken or destroyed"
		}, {
			"fragile": "Capable of being broken"
		}, {
			"frankincense": "A gum or resin which on burning yields aromatic fumes"
		}, {
			"frantic": "Frenzied"
		}, {
			"fraternal": "Brotherly"
		}, {
			"fraudulence": "Deceitfulness"
		}, {
			"fraudulent": "Counterfeit"
		}, {
			"fray": "To fret at the edge so as to loosen or break the threads"
		}, {
			"freemason": "A member of an ancient secret fraternity originally confined to skilled artisans"
		}, {
			"freethinker": "One who rejects authority or inspiration in religion"
		}, {
			"free trade": "Commerce unrestricted by tariff or customs"
		}, {
			"frequency": "The comparative number of any kind of occurrences within a given time or space"
		}, {
			"fresco": "The art of painting on a surface of plaster, particularly on walls and ceilings"
		}, {
			"freshness": "The state, quality, or degree of being fresh"
		}, {
			"fretful": "Disposed to peevishness"
		}, {
			"frightful": "Apt to induce terror or alarm"
		}, {
			"frigid": "Lacking warmth"
		}, {
			"frigidarium": "A room kept at a low temperature for preserving fruits, meat, etc"
		}, {
			"frivolity": "A trifling act, thought, saying, or practice"
		}, {
			"frivolous": "Trivial"
		}, {
			"frizz": "To give a crinkled, fluffy appearance to"
		}, {
			"frizzle": "To cause to crinkle or curl, as the hair"
		}, {
			"frolicsome": "Prankish"
		}, {
			"frontier": "The part of a nation's territory that abuts upon another country"
		}, {
			"frowzy": "Slovenly in appearance"
		}, {
			"frugal": "Economical"
		}, {
			"fruition": "Fulfillment"
		}, {
			"fugacious": "Fleeting"
		}, {
			"fulcrum": "The support on or against which a lever rests, or the point about which it turns"
		}, {
			"fulminate": "To cause to explode"
		}, {
			"fulsome": "Offensive from excess of praise or commendation"
		}, {
			"fumigate": "To subject to the action of smoke or fumes, especially for disinfection"
		}, {
			"functionary": "An official"
		}, {
			"fundamental": "Basal"
		}, {
			"fungible": "That may be measured, counted, or weighed"
		}, {
			"fungous": "Spongy"
		}, {
			"fungus": "A plant destitute of chlorophyll, as a mushroom"
		}, {
			"furbish": "To restore brightness or beauty to"
		}, {
			"furlong": "A measure, one-eighth of a mile"
		}, {
			"furlough": "A temporary absence of a soldier or sailor by permission of the commanding officer"
		}, {
			"furrier": "A dealer in or maker of fur goods"
		}, {
			"further": "More distant or advanced"
		}, {
			"furtherance": "Advancement"
		}, {
			"furtive": "Stealthy or sly, like the actions of a thief"
		}, {
			"fuse": "To unite or blend as by melting together"
		}, {
			"fusible": "Capable of being melted by heat"
		}, {
			"futile": "Of no avail or effect"
		}, {
			"futurist": "A person of expectant temperament"
		}, {
			"gauge": "An instrument for measuring"
		}, {
			"gaiety": "Festivity"
		}, {
			"gaily": "Merrily"
		}, {
			"gait": "Carriage of the body in going"
		}, {
			"gallant": "Possessing a brave or chivalrous spirit"
		}, {
			"galore": "Abundant"
		}, {
			"galvanic": "Pertaining or relating to electricity produced by chemical action"
		}, {
			"galvanism": "Current electricity, especially that arising from chemical action"
		}, {
			"galvanize": "To imbue with life or animation"
		}, {
			"gamble": "To risk money or other possession on an event, chance, or contingency"
		}, {
			"gambol": "Playful leaping or frisking"
		}, {
			"gamester": "A gambler"
		}, {
			"gamut": "The whole range or sequence"
		}, {
			"garnish": "In cookery, to surround with additions for embellishment"
		}, {
			"garrison": "The military force stationed in a fort, town, or other place for its defense"
		}, {
			"garrote": "To execute by strangling"
		}, {
			"garrulous": "Given to constant trivial talking"
		}, {
			"gaseous": "Light and unsubstantial"
		}, {
			"gastric": "Of, pertaining to, or near the stomach"
		}, {
			"gastritis": "Inflammation of the stomach"
		}, {
			"gastronomy": "The art of preparing and serving appetizing food"
		}, {
			"gendarme": "In continental Europe, particularly in France, a uniformed and armed police officer"
		}, {
			"genealogy": "A list, in the order of succession, of ancestors and their descendants"
		}, {
			"genealogist": "A tracer of pedigrees"
		}, {
			"generality": "The principal portion"
		}, {
			"generalize": "To draw general inferences"
		}, {
			"generally": "Ordinarily"
		}, {
			"generate": "To produce or cause to be"
		}, {
			"generic": "Noting a genus or kind; opposed to specific"
		}, {
			"generosity": "A disposition to give liberally or to bestow favors heartily"
		}, {
			"genesis": "Creation"
		}, {
			"geniality": "Warmth and kindliness of disposition"
		}, {
			"genital": "Of or pertaining to the animal reproductive organs"
		}, {
			"genitive": "Indicating source, origin, possession, or the like"
		}, {
			"genteel": "Well-bred or refined"
		}, {
			"gentile": "Belonging to a people not Jewish"
		}, {
			"geology": "The department of natural science that treats of the constitution and structure of the earth"
		}, {
			"germane": "Relevant"
		}, {
			"germinate": "To begin to develop into an embryo or higher form"
		}, {
			"gestation": "Pregnancy"
		}, {
			"gesticulate": "To make gestures or motions, as in speaking, or in place of speech"
		}, {
			"gesture": "A movement or action of the hands or face, expressive of some idea or emotion"
		}, {
			"ghastly": "Hideous"
		}, {
			"gibe": "To utter taunts or reproaches"
		}, {
			"giddy": "Affected with a whirling or swimming sensation in the head"
		}, {
			"gigantic": "Tremendous"
		}, {
			"giver": "One who gives, in any sense"
		}, {
			"glacial": "Icy, or icily cold"
		}, {
			"glacier": "A field or stream of ice"
		}, {
			"gladden": "To make joyous"
		}, {
			"glazier": "One who cuts and fits panes of glass, as for windows"
		}, {
			"glimmer": "A faint, wavering, unsteady light"
		}, {
			"glimpse": "A momentary look"
		}, {
			"globose": "Spherical"
		}, {
			"globular": "Spherical"
		}, {
			"glorious": "Of excellence and splendor"
		}, {
			"glutinous": "Sticky"
		}, {
			"gluttonous": "Given to excess in eating"
		}, {
			"gnash": "To grind or strike the teeth together, as from rage"
		}, {
			"Gordian knot": "Any difficulty the only issue out of which is by bold or unusual manners"
		}, {
			"gourmand": "A connoisseur in the delicacies of the table"
		}, {
			"gosling": "A young goose"
		}, {
			"gossamer": "Flimsy"
		}, {
			"gourd": "A melon, pumpkin, squash, or some similar fruit having a hard rind"
		}, {
			"graceless": "Ungracious"
		}, {
			"gradation": "A step, degree, rank, or relative position in an order or series"
		}, {
			"gradient": "Moving or advancing by steps"
		}, {
			"granary": "A storehouse for grain after it is thrashed or husked"
		}, {
			"grandeur": "The quality of being grand or admirably great"
		}, {
			"grandiloquent": "Speaking in or characterized by a pompous or bombastic style"
		}, {
			"grandiose": "Having an imposing style or effect"
		}, {
			"grantee": "The person to whom property is transferred by deed"
		}, {
			"grantor": "The maker of a deed"
		}, {
			"granular": "Composed of small grains or particles"
		}, {
			"granulate": "To form into grains or small particles"
		}, {
			"granule": "A small grain or particle"
		}, {
			"grapple": "To take hold of"
		}, {
			"gratification": "Satisfaction"
		}, {
			"gratify": "To please, as by satisfying a physical or mental desire or need"
		}, {
			"gratuitous": "Voluntarily"
		}, {
			"gratuity n. That which is given without demand or": "Tip"
		}, {
			"gravity": "Seriousness"
		}, {
			"gregarious": "Not habitually solitary or living alone"
		}, {
			"grenadier": "A member of a regiment composed of men of great stature"
		}, {
			"grief": "Sorrow"
		}, {
			"grievance": "That which oppresses, injures, or causes grief and at the same time a sense of wrong"
		}, {
			"grievous": "Creating affliction"
		}, {
			"grimace": "A distortion of the features, occasioned by some feeling of pain, disgust, etc"
		}, {
			"grindstone": "A flat circular stone, used for sharpening tools"
		}, {
			"grisly": "Fear-inspiring"
		}, {
			"grotesque": "Incongruously composed or ill-proportioned"
		}, {
			"grotto": "A small cavern"
		}, {
			"ground": "A pavement or floor or any supporting surface on which one may walk"
		}, {
			"guess": "Surmise"
		}, {
			"guile": "Duplicity"
		}, {
			"guileless": "Frank"
		}, {
			"guinea": "An English monetary unit"
		}, {
			"guise": "The external appearance as produced by garb or costume"
		}, {
			"gullible": "Credulous"
		}, {
			"gumption": "Common sense"
		}, {
			"gusto": "Keen enjoyment"
		}, {
			"guy": "Stay-rope"
		}, {
			"guzzle": "To swallow greedily or hastily; gulp"
		}, {
			"gynecocracy": "Female supremacy"
		}, {
			"gynecology": "The science that treats of the functions and diseases peculiar to women"
		}, {
			"gyrate": "To revolve"
		}, {
			"gyroscope": "An instrument for illustrating the laws of rotation"
		}, {
			"habitable": "Fit to be dwelt in"
		}, {
			"habitant": "Dweller"
		}, {
			"habitual": "According to usual practice"
		}, {
			"habitude": "Customary relation or association"
		}, {
			"hackney": "To make stale or trite by repetition"
		}, {
			"haggard": "Worn and gaunt in appearance"
		}, {
			"halcyon": "Calm"
		}, {
			"hale": "Of sound and vigorous health"
		}, {
			"handwriting": "Penmanship"
		}, {
			"hanger-on": "A parasite"
		}, {
			"happy-go-lucky": "Improvident"
		}, {
			"harangue": "A tirade"
		}, {
			"harass": "To trouble with importunities, cares, or annoyances"
		}, {
			"harbinger": "One who or that which foreruns and announces the coming of any person or thing"
		}, {
			"hard-hearted": "Lacking pity or sympathy"
		}, {
			"hardihood": "Foolish daring"
		}, {
			"harmonious": "Concordant in sound"
		}, {
			"havoc": "Devastation"
		}, {
			"hawthorn": "A thorny shrub much used in England for hedges"
		}, {
			"hazard": "Risk"
		}, {
			"head first": "Precipitately, as in diving"
		}, {
			"head foremost": "Precipitately, as in diving"
		}, {
			"heartrending": "Very depressing"
		}, {
			"heathenish": "Irreligious"
		}, {
			"heedless": "Thoughtless"
		}, {
			"heifer": "A young cow"
		}, {
			"heinous": "Odiously sinful"
		}, {
			"hemorrhage": "Discharge of blood from a ruptured or wounded blood-vessel"
		}, {
			"hemorrhoids n": "Tumors composed of enlarged and thickened blood-vessels, at the lower end of the rectum"
		}, {
			"henchman": "A servile assistant and subordinate"
		}, {
			"henpeck": "To worry or harass by ill temper and petty annoyances"
		}, {
			"heptagon": "A figure having seven sides and seven angles"
		}, {
			"heptarchy": "A group of seven governments"
		}, {
			"herbaceous": "Having the character of a herb"
		}, {
			"herbarium": "A collection of dried plants scientifically arranged for study"
		}, {
			"herbivorous": "Feeding on herbs or other vegetable matter, as animals"
		}, {
			"hereditary": "Passing naturally from parent to child"
		}, {
			"heredity": "Transmission of physical or mental qualities, diseases, etc., from parent to offspring"
		}, {
			"heresy": "An opinion or doctrine subversive of settled beliefs or accepted principles"
		}, {
			"heretic": "One who holds opinions contrary to the recognized standards or tenets of any philosophy"
		}, {
			"heritage": "Birthright"
		}, {
			"hernia": "Protrusion of any internal organ in whole or in part from its normal position"
		}, {
			"hesitancy": "A pausing to consider"
		}, {
			"hesitant": "Vacillating"
		}, {
			"hesitation": "Vacillation"
		}, {
			"heterodox": "At variance with any commonly accepted doctrine or opinion"
		}, {
			"heterogeneity": "Unlikeness of constituent parts"
		}, {
			"heterogeneous": "Consisting of dissimilar elements or ingredients of different kinds"
		}, {
			"heteromorphic": "Deviating from the normal form or standard type"
		}, {
			"hexangular": "Having six angles"
		}, {
			"hexapod": "Having six feet"
		}, {
			"hexagon": "A figure with six angles"
		}, {
			"hiatus": "A break or vacancy where something necessary to supply the connection is wanting"
		}, {
			"hibernal": "Pertaining to winter"
		}, {
			"Hibernian": "Pertaining to Ireland, or its people"
		}, {
			"hideous": "Appalling"
		}, {
			"hilarious": "Boisterously merry"
		}, {
			"hillock": "A small hill or mound"
		}, {
			"hinder": "To obstruct"
		}, {
			"hindmost": "Farthest from the front"
		}, {
			"hindrance": "An obstacle"
		}, {
			"hirsute": "Having a hairy covering"
		}, {
			"hoard": "To gather and store away for the sake of accumulation"
		}, {
			"hoarse": "Having the voice harsh or rough, as from a cold or fatigue"
		}, {
			"homage": "Reverential regard or worship"
		}, {
			"homogeneity": "Congruity of the members or elements or parts"
		}, {
			"homogeneous": "Made up of similar parts or elements"
		}, {
			"homologous": "Identical in nature, make-up, or relation"
		}, {
			"homonym": "A word agreeing in sound with but different in meaning from another"
		}, {
			"homophone": "A word agreeing in sound with but different in meaning from another"
		}, {
			"honorarium": "A token fee or payment to a professional man for services"
		}, {
			"hoodwink": "To deceive"
		}, {
			"horde": "A gathered multitude of human beings"
		}, {
			"hosiery": "A stocking"
		}, {
			"hospitable": "Disposed to treat strangers or guests with generous kindness"
		}, {
			"hospitality": "The practice of receiving and entertaining strangers and guests with kindness"
		}, {
			"hostility": "Enmity"
		}, {
			"huckster": "One who retails small wares"
		}, {
			"humane": "Compassionate"
		}, {
			"humanitarian": "A philanthropist"
		}, {
			"humanize": "To make gentle or refined"
		}, {
			"humbug": "Anything intended or calculated to deceive or mislead"
		}, {
			"humiliate": "To put to shame"
		}, {
			"hussar": "A light-horse trooper armed with saber and carbine"
		}, {
			"hustle": "To move with haste and promptness"
		}, {
			"hybrid": "Cross-bred"
		}, {
			"hydra": "The seven- or nine-headed water-serpent slain by Hercules"
		}, {
			"hydraulic": "Involving the moving of water, of the force exerted by water in motion"
		}, {
			"hydrodynamics": "The branch of mechanics that treats of the dynamics of fluids"
		}, {
			"hydroelectric": "Pertaining to electricity developed water or steam"
		}, {
			"hydromechanics": "The mechanics of fluids"
		}, {
			"hydrometer": "An instrument for determining the density of solids and liquids by flotation"
		}, {
			"hydrostatics": "The branch of science that treats of the pressure and equilibrium of fluids"
		}, {
			"hydrous": "Watery"
		}, {
			"hygiene": "The branch of medical science that relates to improving health"
		}, {
			"hypercritical": "Faultfinding"
		}, {
			"hypnosis": "An artificial trance-sleep"
		}, {
			"hypnotic": "Tending to produce sleep"
		}, {
			"hypnotism": "An artificially induced somnambulistic state in which the mind readily acts on suggestion"
		}, {
			"hypnotize": "To produce a somnambulistic state in which the mind readily acts on suggestions"
		}, {
			"hypocrisy": "Extreme insincerity"
		}, {
			"hypocrite": "One who makes false professions of his views or beliefs"
		}, {
			"hypodermic": "Pertaining to the area under the skin"
		}, {
			"hypotenuse": "The side of a right-angled triangle opposite the right angle"
		}, {
			"hypothesis": "A proposition taken for granted as a premise from which to reach a conclusion"
		}, {
			"hysteria": "A nervous affection occurring typically in paroxysms of laughing and crying"
		}, {
			"ichthyic": "Fish-like"
		}, {
			"ichthyology": "The branch of zoology that treats of fishes"
		}, {
			"ichthyosaurs": "A fossil reptile"
		}, {
			"icily": "Frigidly"
		}, {
			"iciness": "The state of being icy"
		}, {
			"icon": "An image or likeness"
		}, {
			"iconoclast": "An image-breaker"
		}, {
			"idealize": "To make to conform to some mental or imaginary standard"
		}, {
			"idiom": "A use of words peculiar to a particular language"
		}, {
			"idiosyncrasy": "A mental quality or habit peculiar to an individual"
		}, {
			"idolize": "To regard with inordinate love or admiration"
		}, {
			"ignoble": "Low in character or purpose"
		}, {
			"ignominious": "Shameful"
		}, {
			"Iliad": "A Greek epic poem describing scenes from the siege of Troy"
		}, {
			"illegal": "Not according to law"
		}, {
			"illegible": "Undecipherable"
		}, {
			"illegitimate": "Unlawfully begotten"
		}, {
			"illiberal": "Stingy"
		}, {
			"illicit": "Unlawful"
		}, {
			"illimitable": "Boundless"
		}, {
			"illiterate": "Having little or no book-learning"
		}, {
			"ill-natured": "Surly"
		}, {
			"illogical": "Contrary to the rules of sound thought"
		}, {
			"illuminant": "That which may be used to produce light"
		}, {
			"illuminate": "To supply with light"
		}, {
			"illumine": "To make bright or clear"
		}, {
			"illusion": "An unreal image presented to the senses"
		}, {
			"illusive": "Deceptive"
		}, {
			"illusory": "Deceiving or tending to deceive, as by false appearance"
		}, {
			"imaginable": "That can be imagined or conceived in the mind"
		}, {
			"imaginary": "Fancied"
		}, {
			"imbibe": "To drink or take in"
		}, {
			"imbroglio": "A misunderstanding attended by ill feeling, perplexity, or strife"
		}, {
			"imbrue": "To wet or moisten"
		}, {
			"imitation": "That which is made as a likeness or copy"
		}, {
			"imitator": "One who makes in imitation"
		}, {
			"immaculate": "Without spot or blemish"
		}, {
			"immaterial": "Of no essential consequence"
		}, {
			"immature": "Not full-grown"
		}, {
			"immeasurable": "Indefinitely extensive"
		}, {
			"immense": "Very great in degree, extent, size, or quantity"
		}, {
			"immerse": "To plunge or dip entirely under water or other fluid"
		}, {
			"immersion": "The act of plunging or dipping entirely under water or another fluid"
		}, {
			"immigrant": "A foreigner who enters a country to settle there"
		}, {
			"immigrate": "To come into a country or region from a former habitat"
		}, {
			"imminence": "Impending evil or danger"
		}, {
			"imminent": "Dangerous and close at hand"
		}, {
			"immiscible": "Separating, as oil and water"
		}, {
			"immoral": "Habitually engaged in licentious or lewd practices"
		}, {
			"immortalize": "To cause to last or to be known or remembered throughout a great or indefinite length of time"
		}, {
			"immovable": "Steadfast"
		}, {
			"immune": "Exempt, as from disease"
		}, {
			"immutable": "Unchangeable"
		}, {
			"impair": "To cause to become less or worse"
		}, {
			"impalpable": "Imperceptible to the touch"
		}, {
			"impartial": "Unbiased"
		}, {
			"impassable": "That can not be passed through or over"
		}, {
			"impassible": "Not moved or affected by feeling"
		}, {
			"impassive": "Unmoved by or not exhibiting feeling"
		}, {
			"impatience": "Unwillingness to brook delays or wait the natural course of things"
		}, {
			"impeccable": "Blameless"
		}, {
			"impecunious": "Having no money"
		}, {
			"impede": "To be an obstacle or to place obstacles in the way of"
		}, {
			"impel": "To drive or urge forward"
		}, {
			"impend": "To be imminent"
		}, {
			"imperative": "Obligatory"
		}, {
			"imperceptible": "Indiscernible"
		}, {
			"imperfectible": "That can not be perfected"
		}, {
			"imperil": "To endanger"
		}, {
			"imperious": "Insisting on obedience"
		}, {
			"impermissible": "Not permissible"
		}, {
			"impersonal": "Not relating to a particular person or thing"
		}, {
			"impersonate": "To appear or act in the character of"
		}, {
			"impersuadable": "Unyielding"
		}, {
			"impertinence": "Rudeness"
		}, {
			"imperturbable": "Calm"
		}, {
			"impervious": "Impenetrable"
		}, {
			"impetuosity": "Rashness"
		}, {
			"impetuous": "Impulsive"
		}, {
			"impetus": "Any impulse or incentive"
		}, {
			"impiety": "Irreverence toward God"
		}, {
			"impious": "Characterized by irreverence or irreligion"
		}, {
			"implausible": "Not plausible"
		}, {
			"impliable": "Capable of being inferred"
		}, {
			"implicate": "To show or prove to be involved in or concerned"
		}, {
			"implicit": "Implied"
		}, {
			"imply": "To signify"
		}, {
			"impolitic": "Inexpedient"
		}, {
			"importation": "The act or practice of bringing from one country into another"
		}, {
			"importunate": "Urgent in character, request, or demand"
		}, {
			"importune": "To harass with persistent demands or entreaties"
		}, {
			"impotent": "Destitute of or lacking in power, physical, moral, or intellectual"
		}, {
			"impoverish": "To make indigent or poor"
		}, {
			"impracticable": "Not feasible"
		}, {
			"impregnable": "That can not be taken by assault"
		}, {
			"impregnate": "To make pregnant"
		}, {
			"impromptu": "Anything done or said on the impulse of the moment"
		}, {
			"improper": "Not appropriate, suitable, or becoming"
		}, {
			"impropriety": "The state or quality of being unfit, unseemly, or inappropriate"
		}, {
			"improvident": "Lacking foresight or thrift"
		}, {
			"improvise": "To do anything extemporaneously or offhand"
		}, {
			"imprudent": "Heedless"
		}, {
			"impudence": "Insolent disrespect"
		}, {
			"impugn": "To assail with arguments, insinuations, or accusations"
		}, {
			"impulsion": "Impetus"
		}, {
			"impulsive": "Unpremeditated"
		}, {
			"impunity": "Freedom from punishment"
		}, {
			"impure": "Tainted"
		}, {
			"impute": "To attribute"
		}, {
			"inaccessible": "Difficult of approach"
		}, {
			"inaccurate": "Not exactly according to the facts"
		}, {
			"inactive": "Inert"
		}, {
			"inadequate": "Insufficient"
		}, {
			"inadmissible": "Not to be approved, considered, or allowed, as testimony"
		}, {
			"inadvertent": "Accidental"
		}, {
			"inadvisable": "Unadvisable"
		}, {
			"inane": "Silly"
		}, {
			"inanimate": "Destitute of animal life"
		}, {
			"inapprehensible": "Not to be understood"
		}, {
			"inapt": "Awkward or slow"
		}, {
			"inarticulate": "Speechless"
		}, {
			"inaudible": "That can not be heard"
		}, {
			"inborn": "Implanted by nature"
		}, {
			"inbred": "Innate"
		}, {
			"incandescence": "The state of being white or glowing with heat"
		}, {
			"incandescent": "White or glowing with heat"
		}, {
			"incapacitate": "To deprive of power, capacity, competency, or qualification"
		}, {
			"incapacity": "Want of power to apprehend, understand, and manage"
		}, {
			"incarcerate": "To imprison"
		}, {
			"incendiary": "Chemical or person who starts a fire-literally or figuratively"
		}, {
			"incentive": "That which moves the mind or inflames the passions"
		}, {
			"inception": "The beginning"
		}, {
			"inceptive": "Beginning"
		}, {
			"incessant": "Unceasing"
		}, {
			"inchmeal": "Piecemeal"
		}, {
			"inchoate": "Incipient"
		}, {
			"inchoative": "That which begins, or expresses beginning"
		}, {
			"incidence": "Casual occurrence"
		}, {
			"incident": "A happening in general, especially one of little importance"
		}, {
			"incidentally": "Without intention"
		}, {
			"incinerate": "To reduce to ashes"
		}, {
			"incipience": "Beginning"
		}, {
			"incipient": "Initial"
		}, {
			"incisor": "A front or cutting tooth"
		}, {
			"incite": "To rouse to a particular action"
		}, {
			"incitement": "That which moves to action, or serves as an incentive or stimulus"
		}, {
			"incoercible": "Incapable of being forced, constrained, or compelled"
		}, {
			"incoherence": "Want of connection, or agreement, as of parts or ideas in thought, speech, etc"
		}, {
			"incoherent": "Not logically coordinated, as to parts, elements, or details"
		}, {
			"incombustible": "That can not be burned"
		}, {
			"incomparable": "Matchless"
		}, {
			"incompatible": "Discordant"
		}, {
			"incompetence": "General lack of capacity or fitness"
		}, {
			"incompetent": "Not having the abilities desired or necessary for any purpose"
		}, {
			"incomplete": "Lacking some element, part, or adjunct necessary or required"
		}, {
			"incomprehensible": "Not understandable"
		}, {
			"incompressible": "Resisting all attempts to reduce volume by pressure"
		}, {
			"inconceivable": "Incomprehensible"
		}, {
			"incongruous": "Unsuitable for the time, place, or occasion"
		}, {
			"inconsequential": "Valueless"
		}, {
			"inconsiderable": "Small in quantity or importance"
		}, {
			"inconsistent": "Contradictory"
		}, {
			"inconstant": "Changeable"
		}, {
			"incontrovertible": "Indisputable"
		}, {
			"inconvenient": "Interfering with comfort or progress"
		}, {
			"indefensible": "Untenable"
		}, {
			"indefinitely": "In a vague or uncertain way"
		}, {
			"indelible": "That can not be blotted out, effaced, destroyed, or removed"
		}, {
			"indescribable": "That can not be described"
		}, {
			"indestructible": "That can not be destroyed"
		}, {
			"indicant": "That which points out"
		}, {
			"indicator": "One who or that which points out"
		}, {
			"indict": "To find and declare chargeable with crime"
		}, {
			"indigence": "Poverty"
		}, {
			"indigenous": "Native"
		}, {
			"indigent": "Poor"
		}, {
			"indigestible": "Not digestible, or difficult to digest"
		}, {
			"indigestion": "Difficulty or failure in the alimentary canal in changing food into absorptive nutriment"
		}, {
			"indignant": "Having such anger and scorn as is aroused by meanness or wickedness"
		}, {
			"indignity": "Unmerited contemptuous conduct or treatment"
		}, {
			"indiscernible": "Not perceptible"
		}, {
			"indiscreet": "Lacking wise judgment"
		}, {
			"indiscriminate": "Promiscuous"
		}, {
			"indispensable": "Necessary or requisite for the purpose"
		}, {
			"indistinct": "Vague"
		}, {
			"indivertible": "That can not be turned aside"
		}, {
			"indivisible": "Not separable into parts"
		}, {
			"indolence": "Laziness"
		}, {
			"indolent": "Habitually inactive or idle"
		}, {
			"indomitable": "Unconquerable"
		}, {
			"induct": "To bring in"
		}, {
			"indulgence": "The yielding to inclination, passion, desire, or propensity in oneself or another"
		}, {
			"indulgent": "Yielding to the desires or humor of oneself or those under one's care"
		}, {
			"inebriate": "To intoxicate"
		}, {
			"inedible": "Not good for food"
		}, {
			"ineffable": "Unutterable"
		}, {
			"inefficient": "Not accomplishing an intended purpose"
		}, {
			"inefficiency": "That which does not accomplish an intended purpose"
		}, {
			"ineligible": "Not suitable to be selected or chosen"
		}, {
			"inept": "Not fit or suitable"
		}, {
			"inert": "Inanimate"
		}, {
			"inestimable": "Above price"
		}, {
			"inevitable": "Unavoidable"
		}, {
			"inexcusable": "Not to be justified"
		}, {
			"inexhaustible": "So large or furnishing so great a supply as not to be emptied, wasted, or spent"
		}, {
			"inexorable": "Unrelenting"
		}, {
			"inexpedient": "Unadvisable"
		}, {
			"inexpensive": "Low-priced"
		}, {
			"inexperience": "Lack of or deficiency in experience"
		}, {
			"inexplicable": "Such as can not be made plain"
		}, {
			"inexpressible": "Unutterable"
		}, {
			"inextensible": "Of unchangeable length or area"
		}, {
			"infallible": "Exempt from error of judgment, as in opinion or statement"
		}, {
			"infamous": "Publicly branded or notorious, as for vice, or crime"
		}, {
			"infamy": "Total loss or destitution of honor or reputation"
		}, {
			"inference": "The derivation of a judgment from any given material of knowledge on the ground of law"
		}, {
			"infernal": "Akin to or befitting hell or its occupants"
		}, {
			"infest": "To be present in such numbers as to be a source of annoyance, trouble, or danger"
		}, {
			"infidel": "One who denies the existence of God"
		}, {
			"infidelity": "Disloyalty"
		}, {
			"infinite": "Measureless"
		}, {
			"infinity": "Boundless or immeasurable extension or duration"
		}, {
			"infirm": "Lacking in bodily or mental strength"
		}, {
			"infirmary": "A place for the reception or treatment of the sick"
		}, {
			"infirmity": "A physical, mental, or moral weakness or flaw"
		}, {
			"inflammable": "Easily set on fire or excited"
		}, {
			"inflammation": "A morbid process in some part of the body characterized by heat, swelling, and pain"
		}, {
			"inflexible": "That can not be altered or varied"
		}, {
			"influence": "Ability to sway the will of another"
		}, {
			"influential": "Having the power to sway the will of another"
		}, {
			"influx": "Infusion"
		}, {
			"infrequence": "Rareness"
		}, {
			"infrequent": "Uncommon"
		}, {
			"infringe": "To trespass upon"
		}, {
			"infuse": "To instill, introduce, or inculcate, as principles or qualities"
		}, {
			"infusion": "The act of imbuing, or pouring in"
		}, {
			"ingenious": "Evincing skill, originality, or cleverness, as in contrivance or arrangement"
		}, {
			"ingenuity": "Cleverness in contriving, combining, or originating"
		}, {
			"ingenuous": "Candid, frank, or open in character or quality"
		}, {
			"inglorious": "Shameful"
		}, {
			"ingraft": "To set or implant deeply and firmly"
		}, {
			"ingratiate": "To win confidence or good graces for oneself"
		}, {
			"ingratitude": "Insensibility to kindness"
		}, {
			"ingredient": "Component"
		}, {
			"inherence": "The state of being permanently existing in something"
		}, {
			"inherent": "Intrinsic"
		}, {
			"inhibit": "To hold back or in"
		}, {
			"inhospitable": "Not disposed to entertain strangers gratuitously"
		}, {
			"inhuman": "Savage"
		}, {
			"inhume": "To place in the earth, as a dead body"
		}, {
			"inimical": "Adverse"
		}, {
			"iniquity": "Gross wrong or injustice"
		}, {
			"initiate": "To perform the first act or rite"
		}, {
			"inject": "To introduce, as a fluid, by injection"
		}, {
			"injunction": "Mandate"
		}, {
			"inkling": "A hint"
		}, {
			"inland": "Remote from the sea"
		}, {
			"inlet": "A small body of water leading into a larger"
		}, {
			"inmost": "Deepest within"
		}, {
			"innocuous": "Harmless"
		}, {
			"innovate": "To introduce or strive to introduce new things"
		}, {
			"innuendo": "Insinuation"
		}, {
			"innumerable": "Countless"
		}, {
			"inoffensive": "Causing nothing displeasing or disturbing"
		}, {
			"inopportune": "Unsuitable or inconvenient, especially as to time"
		}, {
			"inquire": "To ask information about"
		}, {
			"inquisition": "A court or tribunal for examination and punishment of heretics"
		}, {
			"inquisitive": "Given to questioning, especially out of curiosity"
		}, {
			"inquisitor": "One who makes an investigation"
		}, {
			"inroad": "Forcible encroachment or trespass"
		}, {
			"insatiable": "That desires or craves immoderately or unappeasably"
		}, {
			"inscribe": "To enter in a book, or on a list, roll, or document, by writing"
		}, {
			"inscrutable": "Impenetrably mysterious or profound"
		}, {
			"insecure": "Not assured of safety"
		}, {
			"insensible": "Imperceptible"
		}, {
			"insentient": "Lacking the power of feeling or perceiving"
		}, {
			"inseparable": "That can not be separated"
		}, {
			"insidious": "Working ill by slow and stealthy means"
		}, {
			"insight": "Intellectual discernment"
		}, {
			"insignificance": "Lack of import or of importance"
		}, {
			"insignificant": "Without importance, force, or influence"
		}, {
			"insinuate": "To imply"
		}, {
			"insipid": "Tasteless"
		}, {
			"insistence": "Urgency"
		}, {
			"insistent": "Urgent"
		}, {
			"insolence": "Pride or haughtiness exhibited in contemptuous and overbearing treatment of others"
		}, {
			"insolent": "Impudent"
		}, {
			"insomnia": "Sleeplessness"
		}, {
			"inspector": "An official appointed to examine or oversee any matter of public interest or importance"
		}, {
			"instance": "A single occurrence or happening of a given kind"
		}, {
			"instant": "A very brief portion of time"
		}, {
			"instantaneous": "Done without perceptible lapse of time"
		}, {
			"instigate": "To provoke"
		}, {
			"instigator": "One who incites to evil"
		}, {
			"instill": "To infuse"
		}, {
			"instructive": "Conveying knowledge"
		}, {
			"insufficiency": "Inadequacy"
		}, {
			"insufficient": "Inadequate for some need, purpose, or use"
		}, {
			"insular": "Pertaining to an island"
		}, {
			"insulate": "To place in a detached state or situation"
		}, {
			"insuperable": "Invincible"
		}, {
			"insuppressible": "Incapable of being concealed"
		}, {
			"insurgence": "Uprising"
		}, {
			"insurgent": "One who takes part in forcible opposition to the constituted authorities of a place"
		}, {
			"insurrection": "The state of being in active resistance to authority"
		}, {
			"intangible": "Not perceptible to the touch"
		}, {
			"integrity": "Uprightness of character and soundness of moral principle"
		}, {
			"intellect": "The faculty of perception or thought"
		}, {
			"intellectual": "Characterized by intelligence"
		}, {
			"intelligence": "Capacity to know or understand"
		}, {
			"intelligible": "Comprehensible"
		}, {
			"intemperance": "Immoderate action or indulgence, as of the appetites"
		}, {
			"intension": "The act of stringing or stretching, or state of being strained"
		}, {
			"intensive": "Adding emphasis or force"
		}, {
			"intention": "That upon which the mind is set"
		}, {
			"interact": "To act reciprocally"
		}, {
			"intercede": "To mediate between persons"
		}, {
			"intercept": "To interrupt the course of"
		}, {
			"intercession": "Entreaty in behalf of others"
		}, {
			"intercessor": "A mediator"
		}, {
			"interdict": "Authoritative act of prohibition"
		}, {
			"interim": "Time between acts or periods"
		}, {
			"interlocutor": "One who takes part in a conversation or oral discussion"
		}, {
			"interlude": "An action or event considered as coming between others of greater length"
		}, {
			"intermediate": "Being in a middle place or degree or between extremes"
		}, {
			"interminable": "Having no limit or end"
		}, {
			"intermission": "A recess"
		}, {
			"intermit": "To cause to cease temporarily"
		}, {
			"intermittent": "A temporary discontinuance"
		}, {
			"interpolation": "Verbal interference"
		}, {
			"interpose": "To come between other things or persons"
		}, {
			"interposition": "A coming between"
		}, {
			"interpreter": "A person who makes intelligible the speech of a foreigner by oral translation"
		}, {
			"interrogate": "To examine formally by questioning"
		}, {
			"interrogative": "Having the nature or form of a question"
		}, {
			"interrogatory": "A question or inquiry"
		}, {
			"interrupt": "To stop while in progress"
		}, {
			"intersect": "To cut through or into so as to divide"
		}, {
			"intervale": "A low tract of land between hills, especially along a river"
		}, {
			"intervene": "To interfere for some end"
		}, {
			"intestacy": "The condition resulting from one's dying not having made a valid will"
		}, {
			"intestate": "Not having made a valid will"
		}, {
			"intestine": "That part of the digestive tube below or behind the stomach, extending to the anus"
		}, {
			"intimacy": "Close or confidential friendship"
		}, {
			"intimidate": "To cause to become frightened"
		}, {
			"intolerable": "Insufferable"
		}, {
			"intolerance": "Inability or unwillingness to bear or endure"
		}, {
			"intolerant": "Bigoted"
		}, {
			"intoxicant": "Anything that unduly exhilarates or excites"
		}, {
			"intoxicate": "To make drunk"
		}, {
			"intracellular": "Occurring or situated within a cell"
		}, {
			"intramural": "Situated within the walls of a city"
		}, {
			"intrepid": "Fearless and bold"
		}, {
			"intricacy": "Perplexity"
		}, {
			"intricate": "Difficult to follow or understand"
		}, {
			"intrigue": "A plot or scheme, usually complicated and intended to accomplish something by secret ways"
		}, {
			"intrinsic": "Inherent"
		}, {
			"introductory": "Preliminary"
		}, {
			"introgression": "Entrance"
		}, {
			"intromit": "To insert"
		}, {
			"introspect": "To look into"
		}, {
			"introspection": "The act of observing and analyzing one's own thoughts and feelings"
		}, {
			"introversion": "The act of turning or directing inward, physically or mentally"
		}, {
			"introvert": "To turn within"
		}, {
			"intrude": "To come in without leave or license"
		}, {
			"intrusion": "The act of entering without warrant or invitation; encroachment"
		}, {
			"intuition": "Instinctive knowledge or feeling"
		}, {
			"inundate": "To fill with an overflowing abundance"
		}, {
			"inundation": "Flood"
		}, {
			"inure": "To harden or toughen by use, exercise, or exposure"
		}, {
			"invalid": "Having no force, weight, or cogency"
		}, {
			"invalidate": "To render of no force or effect"
		}, {
			"invaluable": "Exceedingly precious"
		}, {
			"invariable": "Unchangeable"
		}, {
			"invasion": "Encroachment, as by an act of intrusion or trespass"
		}, {
			"invective": "An utterance intended to cast censure, or reproach"
		}, {
			"inveigh": "To utter vehement censure or invective"
		}, {
			"inventive": "Quick at contrivance"
		}, {
			"inverse": "Contrary in tendency or direction"
		}, {
			"inversion": "Change of order so that the first shall become last and the last first"
		}, {
			"invert": "To turn inside out, upside down, or in opposite direction"
		}, {
			"investigator": "One who investigates"
		}, {
			"investor": "One who invests money"
		}, {
			"inveterate": "Habitual"
		}, {
			"invidious": "Showing or feeling envy"
		}, {
			"invigorate": "To animate"
		}, {
			"invincible": "Not to be conquered, subdued, or overcome"
		}, {
			"inviolable": "Incapable of being injured or disturbed"
		}, {
			"invoke": "To call on for assistance or protection"
		}, {
			"involuntary": "Unwilling"
		}, {
			"involution": "Complication"
		}, {
			"involve": "To draw into entanglement, literally or figuratively"
		}, {
			"invulnerable": "That can not be wounded or hurt"
		}, {
			"inwardly": "With no outward manifestation"
		}, {
			"iota": "A small or insignificant mark or part"
		}, {
			"irascible": "Prone to anger"
		}, {
			"irate": "Moved to anger"
		}, {
			"ire": "Wrath"
		}, {
			"iridescence": "A many-colored appearance"
		}, {
			"iridescent": "Exhibiting changing rainbow-colors due to the interference of the light"
		}, {
			"irk": "To afflict with pain, vexation, or fatigue"
		}, {
			"irksome": "Wearisome"
		}, {
			"irony": "Censure or ridicule under cover of praise or compliment"
		}, {
			"irradiance": "Luster"
		}, {
			"irradiate": "To render clear and intelligible"
		}, {
			"irrational": "Not possessed of reasoning powers or understanding"
		}, {
			"irreducible": "That can not be lessened"
		}, {
			"irrefragable": "That can not be refuted or disproved"
		}, {
			"irrefrangible": "That can not be broken or violated"
		}, {
			"irrelevant": "Inapplicable"
		}, {
			"irreligious": "Indifferent or opposed to religion"
		}, {
			"irreparable": "That can not be rectified or made amends for"
		}, {
			"irrepressible": "That can not be restrained or kept down"
		}, {
			"irresistible": "That can not be successfully withstood or opposed"
		}, {
			"irresponsible": "Careless of or unable to meet responsibilities"
		}, {
			"irreverence": "The quality showing or expressing a deficiency of veneration, especially for sacred things"
		}, {
			"irreverent": "Showing or expressing a deficiency of veneration, especially for sacred things"
		}, {
			"irreverential": "Showing or expressing a deficiency of veneration, especially for sacred things"
		}, {
			"irreversible": "Irrevocable"
		}, {
			"irrigant": "Serving to water lands by artificial means"
		}, {
			"irrigate": "To water, as land, by ditches or other artificial means"
		}, {
			"irritable": "Showing impatience or ill temper on little provocation"
		}, {
			"irritancy": "The quality of producing vexation"
		}, {
			"irritant": "A mechanical, chemical, or pathological agent of inflammation, pain, or tension"
		}, {
			"irritate": "To excite ill temper or impatience in"
		}, {
			"irruption": "Sudden invasion"
		}, {
			"isle": "An island"
		}, {
			"islet": "A little island"
		}, {
			"isobar": "A line joining points at which the barometric pressure is the same at a specified moment"
		}, {
			"isochronous": "Relating to or denoting equal intervals of time"
		}, {
			"isolate": "To separate from others of its kind"
		}, {
			"isothermal": "Having or marking equality of temperature"
		}, {
			"itinerant": "Wandering"
		}, {
			"itinerary": "A detailed account or diary of a journey"
		}, {
			"itinerate": "To wander from place to place"
		}, {
			"jargon": "Confused, unintelligible speech or highly technical speech"
		}, {
			"jaundice": "A morbid condition, due to obstructed excretion of bile or characterized by yellowing of the skin"
		}, {
			"jeopardize": "To imperil"
		}, {
			"Jingo": "One of a party in Great Britain in favor of spirited and demonstrative foreign policy"
		}, {
			"jocose": "Done or made in jest"
		}, {
			"jocular": "Inclined to joke"
		}, {
			"joggle": "A sudden irregular shake or a push causing such a shake"
		}, {
			"journalize": "To keep a diary"
		}, {
			"jovial": "Merry"
		}, {
			"jubilation": "Exultation"
		}, {
			"judgment": "The faculty by the exercise of which a deliberate conclusion is reached"
		}, {
			"judicature": "Distribution and administration of justice by trial and judgment"
		}, {
			"judicial": "Pertaining to the administration of justice"
		}, {
			"judiciary": "That department of government which administers the law relating to civil and criminal justice"
		}, {
			"judicious": "Prudent"
		}, {
			"juggle": "To play tricks of sleight of hand"
		}, {
			"jugglery": "The art or practice of sleight of hand"
		}, {
			"jugular": "Pertaining to the throat"
		}, {
			"juicy": "Succulent"
		}, {
			"junction": "The condition of being joined"
		}, {
			"juncture": "An articulation, joint, or seam"
		}, {
			"junta": "A council or assembly that deliberates in secret upon the affairs of government"
		}, {
			"juridical": "Assumed by law to exist"
		}, {
			"jurisdiction": "Lawful power or right to exercise official authority"
		}, {
			"jurisprudence": "The science of rights in accordance with positive law"
		}, {
			"juror": "One who serves on a jury or is sworn in for jury duty in a court of justice"
		}, {
			"joust": "To engage in a tilt with lances on horseback"
		}, {
			"justification": "Vindication"
		}, {
			"juvenile": "Characteristic of youth"
		}, {
			"juxtapose": "To place close together"
		}, {
			"keepsake": "Anything kept or given to be kept for the sake of the giver"
		}, {
			"kerchief": "A square of linen, silk, or other material, used as a covering for the head or neck"
		}, {
			"kernel": "A grain or seed"
		}, {
			"kiln": "An oven or furnace for baking, burning, or drying industrial products"
		}, {
			"kiloliter": "One thousand liters"
		}, {
			"kilometer": "A length of 1,000 meters"
		}, {
			"kilowatt": "One thousand watts"
		}, {
			"kimono": "A loose robe, fastening with a sash, the principal outer garment in Japan"
		}, {
			"kind-hearted": "Having a kind and sympathetic nature"
		}, {
			"kingling": "A petty king"
		}, {
			"kingship": "Royal state"
		}, {
			"kinsfolk n": "Relatives"
		}, {
			"knavery": "Deceitfulness in dealing"
		}, {
			"knead": "To mix and work into a homogeneous mass, especially with the hands"
		}, {
			"knickknack": "A small article, more for ornament that use"
		}, {
			"knight errant": "One of the wandering knights who in the middle ages went forth in search of adventure"
		}, {
			"knighthood": "Chivalry"
		}, {
			"laborious": "Toilsome"
		}, {
			"labyrinth": "A maze"
		}, {
			"lacerate": "To tear rudely or raggedly"
		}, {
			"lackadaisical": "Listless"
		}, {
			"lactation": "The secretion of milk"
		}, {
			"lacteal": "Milky"
		}, {
			"lactic": "Pertaining to milk"
		}, {
			"laddie": "A lad"
		}, {
			"ladle": "A cup-shaped vessel with a long handle, intended for dipping up and pouring liquids"
		}, {
			"laggard": "Falling behind"
		}, {
			"landholder": "Landowner"
		}, {
			"landlord": "A man who owns and lets a tenement or tenements"
		}, {
			"landmark": "A familiar object in the landscape serving as a guide to an area otherwise easily lost track of"
		}, {
			"landscape": "A rural view, especially one of picturesque effect, as seen from a distance or an elevation"
		}, {
			"languid": "Relaxed"
		}, {
			"languor": "Lassitude of body or depression"
		}, {
			"lapse": "A slight deviation from what is right, proper, or just"
		}, {
			"lascivious": "Lustful"
		}, {
			"lassie": "A little lass"
		}, {
			"latent": "Dormant"
		}, {
			"latency": "The state of being dormant"
		}, {
			"later": "At a subsequent time"
		}, {
			"lateral": "Directed toward the side"
		}, {
			"latish": "Rather late"
		}, {
			"lattice": "Openwork of metal or wood, formed by crossing or interlacing strips or bars"
		}, {
			"laud": "To praise in words or song"
		}, {
			"laudable": "Praiseworthy"
		}, {
			"laudation": "High praise"
		}, {
			"laudatory": "Pertaining to, expressing, or containing praise"
		}, {
			"laundress": "Washerwoman"
		}, {
			"laureate": "Crowned with laurel, as a mark of distinction"
		}, {
			"lave": "To wash or bathe"
		}, {
			"lawgiver": "A legislator"
		}, {
			"lawmaker": "A legislator"
		}, {
			"lax": "Not stringent or energetic"
		}, {
			"laxative": "Having power to open or loosen the bowels"
		}, {
			"lea": "A field"
		}, {
			"leaflet": "A little leaf or a booklet"
		}, {
			"leaven": "To make light by fermentation, as dough"
		}, {
			"leeward": "That side or direction toward which the wind blows"
		}, {
			"left-handed": "Using the left hand or arm more dexterously than the right"
		}, {
			"legacy": "A bequest"
		}, {
			"legalize": "To give the authority of law to"
		}, {
			"legging": "A covering for the leg"
		}, {
			"legible": "That may be read with ease"
		}, {
			"legionary": "A member of an ancient Roman legion or of the modern French Legion of Honor"
		}, {
			"legislate": "To make or enact a law or laws"
		}, {
			"legislative": "That makes or enacts laws"
		}, {
			"legislator": "A lawgiver"
		}, {
			"legitimacy": "Accordance with law"
		}, {
			"legitimate": "Having the sanction of law or established custom"
		}, {
			"leisure": "Spare time"
		}, {
			"leniency": "Forbearance"
		}, {
			"lenient": "Not harsh"
		}, {
			"leonine": "Like a lion"
		}, {
			"lethargy": "Prolonged sluggishness of body or mind"
		}, {
			"levee": "An embankment beside a river or stream or an arm of the sea, to prevent overflow"
		}, {
			"lever": "That which exerts, or through which one may exert great power"
		}, {
			"leviathan": "Any large animal, as a whale"
		}, {
			"levity": "Frivolity"
		}, {
			"levy": "To impose and collect by force or threat of force"
		}, {
			"lewd": "Characterized by lust or lasciviousness"
		}, {
			"lexicographer": "One who makes dictionaries"
		}, {
			"lexicography": "The making of dictionaries"
		}, {
			"lexicon": "A dictionary"
		}, {
			"liable": "Justly or legally responsible"
		}, {
			"libel": "Defamation"
		}, {
			"liberalism": "Opposition to conservatism"
		}, {
			"liberate": "To set free or release from bondage"
		}, {
			"licentious": "Wanton"
		}, {
			"licit": "Lawful"
		}, {
			"liege": "Sovereign"
		}, {
			"lien": "A legal claim or hold on property, as security for a debt or charge"
		}, {
			"lieu": "Stead"
		}, {
			"lifelike": "Realistic"
		}, {
			"lifelong": "Lasting or continuous through life"
		}, {
			"lifetime": "The time that life continues"
		}, {
			"ligament": "That which binds objects together"
		}, {
			"ligature": "Anything that constricts, or serves for binding or tying"
		}, {
			"light-hearted": "Free from care"
		}, {
			"ligneous": "Having the texture of appearance of wood"
		}, {
			"likelihood": "A probability"
		}, {
			"likely": "Plausible"
		}, {
			"liking": "Fondness"
		}, {
			"limitation": "A restriction"
		}, {
			"linear": "Of the nature of a line"
		}, {
			"liner": "A vessel belonging to a steamship-line"
		}, {
			"lingo": "Language"
		}, {
			"lingua": "The tongue"
		}, {
			"lingual": "Pertaining to the use of the tongue in utterance"
		}, {
			"linguist": "One who is acquainted with several languages"
		}, {
			"linguistics": "The science of languages, or of the origin, history, and significance of words"
		}, {
			"liniment": "A liquid preparation for rubbing on the skin in cases of bruises, inflammation, etc"
		}, {
			"liquefacient": "Possessing a liquefying nature or power"
		}, {
			"liquefy": "To convert into a liquid or into liquid form"
		}, {
			"liqueur": "An alcoholic cordial sweetened and flavored with aromatic substances"
		}, {
			"liquidate": "To deliver the amount or value of"
		}, {
			"liquor": "Any alcoholic or intoxicating liquid"
		}, {
			"listless": "Inattentive"
		}, {
			"literacy": "The state or condition of knowing how to read and write"
		}, {
			"literal": "Following the exact words"
		}, {
			"literature": "The written or printed productions of the human mind collectively"
		}, {
			"lithe": "Supple"
		}, {
			"lithesome": "Nimble"
		}, {
			"lithograph": "A print made by printing from stone"
		}, {
			"lithotype": "In engraving, an etched stone surface for printing"
		}, {
			"litigant": "A party to a lawsuit"
		}, {
			"litigate": "To cause to become the subject-matter of a suit at law"
		}, {
			"litigious": "Quarrelsome"
		}, {
			"littoral": "Of, pertaining to, or living on a shore"
		}, {
			"liturgy": "A ritual"
		}, {
			"livelihood": "Means of subsistence"
		}, {
			"livid": "Black-and-blue, as contused flesh"
		}, {
			"loam": "A non-coherent mixture of sand and clay"
		}, {
			"loath": "Averse"
		}, {
			"loathe": "To abominate"
		}, {
			"locative": "Indicating place, or the place where or wherein an action occurs"
		}, {
			"loch": "A lake"
		}, {
			"locomotion": "The act or power of moving from one place to another"
		}, {
			"lode": "A somewhat continuous unstratified metal- bearing vein"
		}, {
			"lodgment": "The act of furnishing with temporary quarters"
		}, {
			"logic": "The science of correct thinking"
		}, {
			"logical": "Capable of or characterized by clear reasoning"
		}, {
			"logician": "An expert reasoner"
		}, {
			"loiterer": "One who consumes time idly"
		}, {
			"loneliness": "Solitude"
		}, {
			"longevity": "Unusually prolonged life"
		}, {
			"loot": "To plunder"
		}, {
			"loquacious": "Talkative"
		}, {
			"lordling": "A little lord"
		}, {
			"lough": "A lake or loch"
		}, {
			"louse": "A small insect parasitic on and sucking the blood of mammals"
		}, {
			"lovable": "Amiable"
		}, {
			"low-spirited": "Despondent"
		}, {
			"lowly": "Rudely"
		}, {
			"lucid": "Mentally sound"
		}, {
			"lucrative": "Highly profitable"
		}, {
			"ludicrous": "Laughable"
		}, {
			"luminary": "One of the heavenly bodies as a source of light"
		}, {
			"luminescent": "Showing increase of light"
		}, {
			"luminescence": "Showing increase"
		}, {
			"luminosity": "The quality of giving or radiating light"
		}, {
			"luminous": "Giving or radiating light"
		}, {
			"lunacy": "Mental unsoundness"
		}, {
			"lunar": "Pertaining to the moon"
		}, {
			"lunatic": "An insane person"
		}, {
			"lune": "The moon"
		}, {
			"lurid": "Ghastly and sensational"
		}, {
			"luscious": "Rich, sweet, and delicious"
		}, {
			"lustrous": "Shining"
		}, {
			"luxuriance": "Excessive or superfluous growth or quantity"
		}, {
			"luxuriant": "Abundant or superabundant in growth"
		}, {
			"luxuriate": "To live sumptuously"
		}, {
			"lying": "Untruthfulness"
		}, {
			"lyre": "One of the most ancient of stringed instruments of the harp class"
		}, {
			"lyric": "Fitted for expression in song"
		}, {
			"macadamize": "To cover or pave, as a path or roadway, with small broken stone"
		}, {
			"machinery": "The parts of a machine or engine, taken collectively"
		}, {
			"machinist": "One who makes or repairs machines, or uses metal-working tools"
		}, {
			"macrocosm": "The whole of any sphere or department of nature or knowledge to which man is related"
		}, {
			"madden": "To inflame with passion"
		}, {
			"Madonna": "A painted or sculptured representation of the Virgin, usually with the infant Jesus"
		}, {
			"magician": "A sorcerer"
		}, {
			"magisterial": "Having an air of authority"
		}, {
			"magistracy": "The office or dignity of a magistrate"
		}, {
			"magnanimous": "Generous in treating or judging others"
		}, {
			"magnate": "A person of rank or importance"
		}, {
			"magnet": "A body possessing that peculiar form of polarity found in nature in the lodestone"
		}, {
			"magnetize": "To make a magnet of, permanently, or temporarily"
		}, {
			"magnificence": "The exhibition of greatness of action, character, intellect, wealth, or power"
		}, {
			"magnificent": "Grand or majestic in appearance, quality, or action"
		}, {
			"magnitude": "Importance"
		}, {
			"maharaja": "A great Hindu prince"
		}, {
			"maidenhood": "Virginity"
		}, {
			"maintain": "To hold or preserve in any particular state or condition"
		}, {
			"maintenance": "That which supports or sustains"
		}, {
			"maize": "Indian corn: usually in the United States called simply corn"
		}, {
			"makeup": "The arrangements or combination of the parts of which anything is composed"
		}, {
			"malady": "Any physical disease or disorder, especially a chronic or deep-seated one"
		}, {
			"malaria": "A fever characterized by alternating chills, fever, and sweating"
		}, {
			"malcontent": "One who is dissatisfied with the existing state of affairs"
		}, {
			"malediction": "The calling down of a curse or curses"
		}, {
			"malefactor": "One who injures another"
		}, {
			"maleficent": "Mischievous"
		}, {
			"malevolence": "Ill will"
		}, {
			"malevolent": "Wishing evil to others"
		}, {
			"malign": "To speak evil of, especially to do so falsely and severely"
		}, {
			"malignant": "Evil in nature or tending to do great harm or mischief"
		}, {
			"malleable": "Pliant"
		}, {
			"mallet": "A wooden hammer"
		}, {
			"maltreat": "To treat ill, unkindly, roughly, or abusively"
		}, {
			"man-trap": "A place or structure dangerous to human life"
		}, {
			"mandate": "A command"
		}, {
			"mandatory": "Expressive of positive command, as distinguished from merely directory"
		}, {
			"mane": "The long hair growing upon and about the neck of certain animals, as the horse and the lion"
		}, {
			"man-eater": "An animal that devours human beings"
		}, {
			"maneuver": "To make adroit or artful moves: manage affairs by strategy"
		}, {
			"mania": "Insanity"
		}, {
			"maniac": "a person raving with madness"
		}, {
			"manifesto": "A public declaration, making announcement, explanation or defense of intentions, or motives"
		}, {
			"manlike": "Like a man"
		}, {
			"manliness": "The qualities characteristic of a true man, as bravery, resolution, etc"
		}, {
			"mannerism": "Constant or excessive adherence to one manner, style, or peculiarity, as of action or conduct"
		}, {
			"manor": "The landed estate of a lord or nobleman"
		}, {
			"mantel": "The facing, sometimes richly ornamented, about a fireplace, including the usual shelf above it"
		}, {
			"mantle": "A cloak"
		}, {
			"manufacturer": "A person engaged in manufacturing as a business"
		}, {
			"manumission": "Emancipation"
		}, {
			"manumit": "To set free from bondage"
		}, {
			"marine": "Of or pertaining to the sea or matters connected with the sea"
		}, {
			"maritime": "Situated on or near the sea"
		}, {
			"maroon": "To put ashore and abandon (a person) on a desolate coast or island"
		}, {
			"martial": "Pertaining to war or military operations"
		}, {
			"Martian": "Pertaining to Mars, either the Roman god of war or the planet"
		}, {
			"martyrdom": "Submission to death or persecution for the sake of faith or principle"
		}, {
			"marvel": "To be astonished and perplexed because of (something)"
		}, {
			"masonry": "The art or work of constructing, as buildings, walls, etc., with regularly arranged stones"
		}, {
			"masquerade": "A social party composed of persons masked and costumed so as to be disguised"
		}, {
			"massacre": "The unnecessary and indiscriminate killing of human beings"
		}, {
			"massive": "Of considerable bulk and weight"
		}, {
			"masterpiece": "A superior production"
		}, {
			"mastery": "The attainment of superior skill"
		}, {
			"material": "That of which anything is composed or may be constructed"
		}, {
			"materialize": "To take perceptible or substantial form"
		}, {
			"maternal": "Pertaining or peculiar to a mother or to motherhood"
		}, {
			"matinee": "An entertainment (especially theatrical) held in the daytime"
		}, {
			"matricide": "The killing, especially the murdering, of one's mother"
		}, {
			"matrimony": "The union of a man and a woman in marriage"
		}, {
			"matrix": "That which contains and gives shape or form to anything"
		}, {
			"matter of fact": "Something that has actual and undeniable existence or reality"
		}, {
			"maudlin": "Foolishly and tearfully affectionate"
		}, {
			"mausoleum": "A tomb of more than ordinary size or architectural pretensions"
		}, {
			"mawkish": "Sickening or insipid"
		}, {
			"maxim": "A principle accepted as true and acted on as a rule or guide"
		}, {
			"maze": "A labyrinth"
		}, {
			"mead": "A meadow"
		}, {
			"meager": "scanty"
		}, {
			"mealy-mouthed": "Afraid to express facts or opinions plainly"
		}, {
			"meander": "To wind and turn while proceeding in a course"
		}, {
			"mechanics": "The branch of physics that treats the phenomena caused by the action of forces"
		}, {
			"medallion": "A large medal"
		}, {
			"meddlesome": "Interfering"
		}, {
			"medial": "Of or pertaining to the middle"
		}, {
			"mediate": "To effect by negotiating as an agent between parties"
		}, {
			"medicine": "A substance possessing or reputed to possess curative or remedial properties"
		}, {
			"medieval": "Belonging or relating to or descriptive of the middle ages"
		}, {
			"mediocre": "Ordinary"
		}, {
			"meditation": "The turning or revolving of a subject in the mind"
		}, {
			"medley": "A composition of different songs or parts of songs arranged to run as a continuous whole"
		}, {
			"meliorate": "To make better or improve, as in quality or social or physical condition"
		}, {
			"mellifluous": "Sweetly or smoothly flowing"
		}, {
			"melodious": "Characterized by a sweet succession of sounds"
		}, {
			"melodrama": "A drama with a romantic story or plot and sensational situation and incidents"
		}, {
			"memento": "A souvenir"
		}, {
			"memorable": "Noteworthy"
		}, {
			"menace": "A threat"
		}, {
			"menagerie": "A collection of wild animals, especially when kept for exhibition"
		}, {
			"mendacious": "Untrue"
		}, {
			"mendicant": "A beggar"
		}, {
			"mentality": "Intellectuality"
		}, {
			"mentor": "A wise and faithful teacher, guide, and friend"
		}, {
			"mercantile": "Conducted or acting on business principles; commercial"
		}, {
			"mercenary": "Greedy"
		}, {
			"merciful": "Disposed to pity and forgive"
		}, {
			"merciless": "Cruel"
		}, {
			"meretricious": "Alluring by false or gaudy show"
		}, {
			"mesmerize": "To hypnotize"
		}, {
			"messieurs n": "Gentlemen"
		}, {
			"metal": "An element that forms a base by combining with oxygen, is usually hard, heavy, and lustrous"
		}, {
			"metallurgy": "The art or science of extracting a metal from ores, as by smelting"
		}, {
			"metamorphosis": "A passing from one form or shape into another"
		}, {
			"metaphor": "A figure of speech in which one object is likened to another, by speaking as if the other"
		}, {
			"metaphysical": "Philosophical"
		}, {
			"metaphysician": "One skilled in metaphysics"
		}, {
			"metaphysics": "The principles of philosophy as applied to explain the methods of any particular science"
		}, {
			"mete": "To apportion"
		}, {
			"metempsychosis": "Transition of the soul of a human being at death into another body, whether human or beast"
		}, {
			"meticulous": "Over-cautious"
		}, {
			"metonymy": "A figure of speech that consists in the naming of a thing by one of its attributes"
		}, {
			"metric": "Relating to measurement"
		}, {
			"metronome": "An instrument for indicating and marking exact time in music"
		}, {
			"metropolis": "A chief city, either the capital or the largest or most important city of a state"
		}, {
			"metropolitan": "Pertaining to a chief city"
		}, {
			"mettle": "Courage"
		}, {
			"mettlesome": "Having courage or spirit"
		}, {
			"microcosm": "The world or universe on a small scale"
		}, {
			"micrometer": "An instrument for measuring very small angles or dimensions"
		}, {
			"microphone": "An apparatus for magnifying faint sounds"
		}, {
			"microscope": "An instrument for assisting the eye in the vision of minute objects or features of objects"
		}, {
			"microscopic": "Adapted to or characterized by minute observation"
		}, {
			"microscopy": "The art of examing objects with the microscope"
		}, {
			"midsummer": "The middle of the summer"
		}, {
			"midwife": "A woman who makes a business of assisting at childbirth"
		}, {
			"mien": "The external appearance or manner of a person"
		}, {
			"migrant": "Wandering"
		}, {
			"migrate": "To remove or pass from one country, region, or habitat to another"
		}, {
			"migratory": "Wandering"
		}, {
			"mileage": "A distance in miles"
		}, {
			"militant": "Of a warlike or combative disposition or tendency"
		}, {
			"militarism": "A policy of maintaining great standing armies"
		}, {
			"militate": "To have weight or influence (in determining a question)"
		}, {
			"militia": "Those citizens, collectively, who are enrolled and drilled in temporary military organizations"
		}, {
			"Milky Way": "The galaxy"
		}, {
			"millet": "A grass cultivated for forage and cereal"
		}, {
			"mimic": "To imitate the speech or actions of"
		}, {
			"miniature": "Much smaller than reality or that the normal size"
		}, {
			"minimize": "To reduce to the smallest possible amount or degree"
		}, {
			"minion": "A servile favorite"
		}, {
			"ministration": "Any religious ceremonial"
		}, {
			"ministry": "A service"
		}, {
			"minority": "The smaller in number of two portions into which a number or a group is divided"
		}, {
			"minute": "Exceedingly small in extent or quantity"
		}, {
			"minutia": "A small or unimportant particular or detail"
		}, {
			"mirage": "An optical effect looking like a sheet of water in the desert"
		}, {
			"misadventure": "An unlucky accident"
		}, {
			"misanthropic": "Hating mankind"
		}, {
			"misanthropy": "Hatred of mankind"
		}, {
			"misapprehend": "To misunderstand"
		}, {
			"misbehave": "To behave ill"
		}, {
			"misbehavior": "Ill or improper behavior"
		}, {
			"mischievous": "Fond of tricks"
		}, {
			"miscount": "To make a mistake in counting"
		}, {
			"miscreant": "A villain"
		}, {
			"misdeed": "A wrong or improper act"
		}, {
			"misdemeanor": "Evil conduct, small crime"
		}, {
			"miser": "A person given to saving and hoarding unduly"
		}, {
			"mishap": "Misfortune"
		}, {
			"misinterpret": "To misunderstand"
		}, {
			"mislay": "To misplace"
		}, {
			"mismanage": "To manage badly, improperly, or unskillfully"
		}, {
			"misnomer": "A name wrongly or mistakenly applied"
		}, {
			"misogamy": "Hatred of marriage"
		}, {
			"misogyny": "Hatred of women"
		}, {
			"misplace": "To put into a wrong place"
		}, {
			"misrepresent": "To give a wrong impression"
		}, {
			"misrule": "To misgovern"
		}, {
			"missal": "The book containing the service for the celebration of mass"
		}, {
			"missile": "Any object, especially a weapon, thrown or intended to be thrown"
		}, {
			"missive": "A message in writing"
		}, {
			"mistrust": "To regard with suspicion or jealousy"
		}, {
			"misty": "Lacking clearness"
		}, {
			"misunderstand": "To Take in a wrong sense"
		}, {
			"misuse": "To maltreat"
		}, {
			"mite": "A very small amount, portion, or particle"
		}, {
			"miter": "The junction of two bodies at an equally divided angle"
		}, {
			"mitigate": "To make milder or more endurable"
		}, {
			"mnemonics": "A system of principles and formulas designed to assist the recollection in certain instances"
		}, {
			"moat": "A ditch on the outside of a fortress wall"
		}, {
			"mobocracy": "Lawless control of public affairs by the mob or populace"
		}, {
			"moccasin": "A foot-covering made of soft leather or buckskin"
		}, {
			"mockery": "Ridicule"
		}, {
			"moderation": "Temperance"
		}, {
			"moderator": "The presiding officer of a meeting"
		}, {
			"modernity": "The state or character of being modern"
		}, {
			"modernize": "To make characteristic of the present or of recent times"
		}, {
			"modification": "A change"
		}, {
			"modify": "To make somewhat different"
		}, {
			"modish": "Fashionable"
		}, {
			"modulate": "To vary in tone, inflection, pitch or other quality of sound"
		}, {
			"mollify": "To soothe"
		}, {
			"molt": "To cast off, as hair, feathers, etc"
		}, {
			"momentary": "Lasting but a short time"
		}, {
			"momentous": "Very significant"
		}, {
			"momentum": "An impetus"
		}, {
			"monarchy": "Government by a single, sovereign ruler"
		}, {
			"monastery": "A dwelling-place occupied in common by persons under religious vows of seclusion"
		}, {
			"monetary": "Financial"
		}, {
			"mongrel": "The progeny resulting from the crossing of different breeds or varieties"
		}, {
			"monition": "Friendly counsel given by way of warning and implying caution or reproof"
		}, {
			"monitory": "Admonition or warning"
		}, {
			"monocracy": "Government by a single person"
		}, {
			"monogamy": "The habit of pairing, or having but one mate"
		}, {
			"monogram": "A character consisting of two or more letters interwoven into one, usually initials of a name"
		}, {
			"monograph": "A treatise discussing a single subject or branch of a subject"
		}, {
			"monolith": "Any structure or sculpture in stone formed of a single piece"
		}, {
			"monologue": "A story or drama told or performed by one person"
		}, {
			"monomania": "The unreasonable pursuit of one idea"
		}, {
			"monopoly": "The control of a thing, as a commodity, to enable a person to raise its price"
		}, {
			"monosyllable": "A word of one syllable"
		}, {
			"monotone": "The sameness or monotony of utterance"
		}, {
			"monotonous": "Unchanging and tedious"
		}, {
			"monotony": "A lack of variety"
		}, {
			"monsieur n. A French title of respect, equivalent to": "and sir"
		}, {
			"monstrosity": "Anything unnaturally huge or distorted"
		}, {
			"moonbeam": "A ray of moonlight"
		}, {
			"morale": "A state of mind with reference to confidence, courage, zeal, and the like"
		}, {
			"moralist": "A writer on ethics"
		}, {
			"morality": "Virtue"
		}, {
			"moralize": "To render virtuous"
		}, {
			"moratorium": "An emergency legislation authorizing a government suspend some action temporarily"
		}, {
			"morbid": "Caused by or denoting a diseased or unsound condition of body or mind"
		}, {
			"mordacious": "Biting or giving to biting"
		}, {
			"mordant": "Biting"
		}, {
			"moribund": "On the point of dying"
		}, {
			"morose": "Gloomy"
		}, {
			"morphology": "the science of organic forms"
		}, {
			"motley": "Composed of heterogeneous or inharmonious elements"
		}, {
			"motto": "An expressive word or pithy sentence enunciating some guiding rule of life, or faith"
		}, {
			"mountaineer": "One who travels among or climbs mountains for pleasure or exercise"
		}, {
			"mountainous": "Full of or abounding in mountains"
		}, {
			"mouthful": "As much as can be or is usually put into the or exercise"
		}, {
			"muddle": "To confuse or becloud, especially with or as with drink"
		}, {
			"muffle": "To deaden the sound of, as by wraps"
		}, {
			"mulatto": "The offspring of a white person and a black person"
		}, {
			"muleteer": "A mule-driver"
		}, {
			"multiform": "Having many shapes, or appearances"
		}, {
			"multiplicity": "the condition of being manifold or very various"
		}, {
			"mundane": "Worldly, as opposed to spiritual or celestial"
		}, {
			"municipal": "Of or pertaining to a town or city, or to its corporate or local government"
		}, {
			"municipality": "A district enjoying municipal government"
		}, {
			"munificence": "A giving characterized by generous motives and extraordinary liberality"
		}, {
			"munificent": "Extraordinarily generous"
		}, {
			"muster": "An assemblage or review of troops for parade or inspection, or for numbering off"
		}, {
			"mutation": "The act or process of change"
		}, {
			"mutilate": "To disfigure"
		}, {
			"mutiny": "Rebellion against lawful or constituted authority"
		}, {
			"myriad": "A vast indefinite number"
		}, {
			"mystic": "One who professes direct divine illumination, or relies upon meditation to acquire truth"
		}, {
			"mystification": "The act of artfully perplexing"
		}, {
			"myth": "A fictitious narrative presented as historical, but without any basis of fact"
		}, {
			"mythology": "The whole body of legends cherished by a race concerning gods and heroes"
		}, {
			"nameless": "Having no fame or reputation"
		}, {
			"naphtha": "A light, colorless, volatile, inflammable oil used as a solvent, as in manufacture of paints"
		}, {
			"Narcissus": "The son of the Athenian river-god Cephisus, fabled to have fallen in love with his reflection"
		}, {
			"narrate": "To tell a story"
		}, {
			"narration": "The act of recounting the particulars of an event in the order of time or occurrence"
		}, {
			"narrative": "An orderly continuous account of the successive particulars of an event"
		}, {
			"narrator": "One who narrates anything"
		}, {
			"narrow-minded": "Characterized by illiberal views or sentiments"
		}, {
			"nasal": "Pertaining to the nose"
		}, {
			"natal": "Pertaining to one's birth"
		}, {
			"nationality": "A connection with a particular nation"
		}, {
			"naturally": "According to the usual order of things"
		}, {
			"nausea": "An affection of the stomach producing dizziness and usually an impulse to vomit"
		}, {
			"nauseate": "To cause to loathe"
		}, {
			"nauseous": "Loathsome"
		}, {
			"nautical": "Pertaining to ships, seamen, or navigation"
		}, {
			"naval": "Pertaining to ships"
		}, {
			"navel": "The depression on the abdomen where the umbilical cord of the fetus was attached"
		}, {
			"navigable": "Capable of commercial navigation"
		}, {
			"navigate": "To traverse by ship"
		}, {
			"nebula": "A gaseous body of unorganized stellar substance"
		}, {
			"necessary": "Indispensably requisite or absolutely needed to accomplish a desired result"
		}, {
			"necessitate": "To render indispensable"
		}, {
			"necessity": "That which is indispensably requisite to an end desired"
		}, {
			"necrology": "A list of persons who have died in a certain place or time"
		}, {
			"necromancer": "One who practices the art of foretelling the future by means of communication with the dead"
		}, {
			"necropolis": "A city of the dead"
		}, {
			"necrosis": "the death of part of the body"
		}, {
			"nectar": "Any especially sweet and delicious drink"
		}, {
			"nectarine": "A variety of the peach"
		}, {
			"needlework": "Embroidery"
		}, {
			"needy": "Being in need, want, or poverty"
		}, {
			"nefarious": "Wicked in the extreme"
		}, {
			"negate": "To deny"
		}, {
			"negation": "The act of denying or of asserting the falsity of a proposition"
		}, {
			"neglectful": "Exhibiting or indicating omission"
		}, {
			"negligee": "A loose gown worn by women"
		}, {
			"negligence": "Omission of that which ought to be done"
		}, {
			"negligent": "Apt to omit what ought to be done"
		}, {
			"negligible": "Transferable by assignment, endorsement, or delivery"
		}, {
			"negotiable": "To bargain with others for an agreement, as for a treaty or transfer of property"
		}, {
			"Nemesis": "A goddess; divinity of chastisement and vengeance"
		}, {
			"neocracy": "Government administered by new or untried persons"
		}, {
			"neo-Darwinsim": "Darwinism as modified and extended by more recent students"
		}, {
			"neo-Latin": "Modernized Latin"
		}, {
			"neopaganism": "A new or revived paganism"
		}, {
			"Neolithic": "Pertaining to the later stone age"
		}, {
			"neology": "The coining or using of new words or new meanings of words"
		}, {
			"neophyte": "Having the character of a beginner"
		}, {
			"nestle": "To adjust cozily in snug quarters"
		}, {
			"nestling": "Recently hatched"
		}, {
			"nettle": "To excite sensations of uneasiness or displeasure in"
		}, {
			"network": "Anything that presents a system of cross- lines"
		}, {
			"neural": "Pertaining to the nerves or nervous system"
		}, {
			"neurology": "The science of the nervous system"
		}, {
			"neuter": "Neither masculine nor feminine"
		}, {
			"neutral": "Belonging to or under control of neither of two contestants"
		}, {
			"nevertheless": "Notwithstanding"
		}, {
			"Newtonian": "Of or pertaining to Sir Isaac Newton, the English philosopher"
		}, {
			"niggardly adj": "(no longer acceptable to use)"
		}, {
			"nihilist": "An advocate of the doctrine that nothing either exists or can be known"
		}, {
			"nil": "Nothing"
		}, {
			"nimble": "Light and quick in motion or action"
		}, {
			"nit": "The egg of a louse or some other insect"
		}, {
			"nocturnal": "Of or pertaining to the night"
		}, {
			"noiseless": "Silent"
		}, {
			"noisome": "Very offensive, particularly to the sense of smell"
		}, {
			"noisy": "Clamorous"
		}, {
			"nomad": "Having no fixed abode"
		}, {
			"nomic": "Usual or customary"
		}, {
			"nominal": "Trivial"
		}, {
			"nominate": "To designate as a candidate for any office"
		}, {
			"nomination": "The act or ceremony of naming a man or woman for office"
		}, {
			"nominee": "One who receives a nomination"
		}, {
			"non-existent": "That which does not exist"
		}, {
			"non-resident": "Not residing within a given jurisdiction"
		}, {
			"nonchalance": "A state of mind indicating lack of interest"
		}, {
			"non-combatant": "One attached to the army or navy, but having duties other than that of fighting"
		}, {
			"nondescript": "Indescribable"
		}, {
			"nonentity": "A person or thing of little or no account"
		}, {
			"nonpareil": "One who or that which is of unequaled excellence"
		}, {
			"norm": "A model"
		}, {
			"normalcy": "The state of being normal"
		}, {
			"Norman": "Of or peculiar to Normandy, in northern France"
		}, {
			"nostrum": "Any scheme or recipe of a charlatan character"
		}, {
			"noticeable": "Perceptible"
		}, {
			"notorious": "Unfavorably known to the general public"
		}, {
			"novellette": "A short novel"
		}, {
			"novice": "A beginner in any business or occupation"
		}, {
			"nowadays": "In the present time or age"
		}, {
			"nowhere": "In no place or state"
		}, {
			"noxious": "Hurtful"
		}, {
			"nuance": "A slight degree of difference in anything perceptible to the sense of the mind"
		}, {
			"nucleus": "A central point or part about which matter is aggregated"
		}, {
			"nude": "Naked"
		}, {
			"nugatory": "Having no power or force"
		}, {
			"nuisance": "That which annoys, vexes, or irritates"
		}, {
			"numeration": "The act or art of reading or naming numbers"
		}, {
			"numerical": "Of or pertaining to number"
		}, {
			"nunnery": "A convent for nuns"
		}, {
			"nuptial": "Of or pertaining to marriage, especially to the marriage ceremony"
		}, {
			"nurture": "The process of fostering or promoting growth"
		}, {
			"nutriment": "That which nourishes"
		}, {
			"nutritive": "Having nutritious properties"
		}, {
			"oaken": "Made of or from oak"
		}, {
			"oakum": "Hemp-fiber obtained by untwisting and picking out loosely the yarns of old hemp rope"
		}, {
			"obdurate": "Impassive to feelings of humanity or pity"
		}, {
			"obelisk": "A square shaft with pyramidal top, usually monumental or commemorative"
		}, {
			"obese": "Exceedingly fat"
		}, {
			"obesity": "Excessive fatness"
		}, {
			"obituary": "A published notice of a death"
		}, {
			"objective": "Grasping and representing facts as they are"
		}, {
			"objector": "One who objects, as to a proposition, measure, or ruling"
		}, {
			"obligate": "To hold to the fulfillment of duty"
		}, {
			"obligatory": "Binding in law or conscience"
		}, {
			"oblique": "Slanting; said of lines"
		}, {
			"obliterate": "To cause to disappear"
		}, {
			"oblivion": "The state of having passed out of the memory or of being utterly forgotten"
		}, {
			"oblong": "Longer than broad: applied most commonly to rectangular objects considerably elongated"
		}, {
			"obnoxious": "Detestable"
		}, {
			"obsequies": "Funeral rites"
		}, {
			"obsequious": "Showing a servile readiness to fall in with the wishes or will of another"
		}, {
			"observance": "A traditional form or customary act"
		}, {
			"observant": "Quick to notice"
		}, {
			"observatory": "A building designed for systematic astronomical observations"
		}, {
			"obsolescence": "The condition or process of gradually falling into disuse"
		}, {
			"obsolescent": "Passing out of use, as a word"
		}, {
			"obsolete": "No longer practiced or accepted"
		}, {
			"obstetrician": "A practitioner of midwifery"
		}, {
			"obstetrics": "The branch of medical science concerned with the treatment and care of women during pregnancy"
		}, {
			"obstinacy": "Stubborn adherence to opinion, arising from conceit or the desire to have one's own way"
		}, {
			"obstreperous": "Boisterous"
		}, {
			"obstruct": "To fill with impediments so as to prevent passage, either wholly or in part"
		}, {
			"obstruction": "Hindrance"
		}, {
			"obtrude": "To be pushed or to push oneself into undue prominence"
		}, {
			"obtrusive": "Tending to be pushed or to push oneself into undue prominence"
		}, {
			"obvert": "To turn the front or principal side of (a thing) toward any person or object"
		}, {
			"obviate": "To clear away or provide for, as an objection or difficulty"
		}, {
			"occasion": "An important event or celebration"
		}, {
			"Occident": "The countries lying west of Asia and the Turkish dominions"
		}, {
			"occlude": "To absorb, as a gas by a metal"
		}, {
			"occult": "Existing but not immediately perceptible"
		}, {
			"occupant": "A tenant in possession of property, as distinguished from the actual owner"
		}, {
			"occurrence": "A happening"
		}, {
			"octagon": "A figure with eight sides and eight angles"
		}, {
			"octave": "A note at this interval above or below any other, considered in relation to that other"
		}, {
			"octavo": "A book, or collection of paper in which the sheets are so folded as to make eight leaves"
		}, {
			"octogenarian": "A person of between eighty and ninety years"
		}, {
			"ocular": "Of or pertaining to the eye"
		}, {
			"oculist": "One versed or skilled in treating diseases of the eye"
		}, {
			"oddity": "An eccentricity"
		}, {
			"ode": "The form of lyric poetry anciently intended to be sung"
		}, {
			"odious": "Hateful"
		}, {
			"odium": "A feeling of extreme repugnance, or of dislike and disgust"
		}, {
			"odoriferous": "Having or diffusing an odor or scent, especially an agreeable one"
		}, {
			"odorous": "Having an odor, especially a fragrant one"
		}, {
			"off": "Farther or more distant"
		}, {
			"offhand": "Without preparation"
		}, {
			"officiate": "To act as an officer or leader"
		}, {
			"officious": "Intermeddling with what is not one's concern"
		}, {
			"offshoot": "Something that branches off from the parent stock"
		}, {
			"ogre": "A demon or monster that was supposed to devour human beings"
		}, {
			"ointment": "A fatty preparation with a butter-like consistency in which a medicinal substance exists"
		}, {
			"olfactory": "of or pertaining to the sense of smell"
		}, {
			"olive-branch": "A branch of the olive-tree, as an emblem of peace"
		}, {
			"ominous": "Portentous"
		}, {
			"omission": "Exclusion"
		}, {
			"omnipotence": "Unlimited and universal power"
		}, {
			"Omnipotent": "Possessed of unlimited and universal power"
		}, {
			"omniscience": "Unlimited or infinite knowledge"
		}, {
			"omniscient": "Characterized by unlimited or infinite knowledge"
		}, {
			"omnivorous": "Eating or living upon food of all kinds indiscriminately"
		}, {
			"onerous": "Burdensome or oppressive"
		}, {
			"onrush": "Onset"
		}, {
			"onset": "An assault, especially of troops, upon an enemy or fortification"
		}, {
			"onslaught": "A violent onset"
		}, {
			"onus": "A burden or responsibility"
		}, {
			"opalescence": "The property of combined refraction and reflection of light, resulting in smoky tints"
		}, {
			"opaque": "Impervious to light"
		}, {
			"operate": "To put in action and supervise the working of"
		}, {
			"operative": "Active"
		}, {
			"operator": "One who works with or controls some machine or scientific apparatus"
		}, {
			"operetta": "A humorous play in dialogue and music, of more than one act"
		}, {
			"opinion": "A conclusion or judgment held with confidence, but falling short of positive knowledge"
		}, {
			"opponent": "One who supports the opposite side in a debate, discussion, struggle, or sport"
		}, {
			"opportune": "Especially fit as occurring, said, or done at the right moment"
		}, {
			"opportunist": "One who takes advantage of circumstances to gain his ends"
		}, {
			"opportunity": "Favorable or advantageous chance or opening"
		}, {
			"opposite": "Radically different or contrary in action or movement"
		}, {
			"opprobrium": "The state of being scornfully reproached or accused of evil"
		}, {
			"optic": "Pertaining to the eye or vision"
		}, {
			"optician": "One who makes or deals in optical instruments or eye-glasses"
		}, {
			"optics": "The science that treats of light and vision, and all that is connected with sight"
		}, {
			"optimism": "The view that everything in nature and the history of mankind is ordered for the best"
		}, {
			"option": "The right, power, or liberty of choosing"
		}, {
			"optometry": "Measurement of the powers of vision"
		}, {
			"opulence": "Affluence"
		}, {
			"opulent": "Wealthy"
		}, {
			"oral": "Uttered through the mouth"
		}, {
			"orate": "To deliver an elaborate or formal public speech"
		}, {
			"oration": "An elaborate or formal public speech"
		}, {
			"orator": "One who delivers an elaborate or formal speech"
		}, {
			"oratorio": "A composition for solo voices, chorus, and orchestra, generally taken from the Scriptures"
		}, {
			"oratory": "The art of public speaking"
		}, {
			"ordeal": "Anything that severely tests courage, strength, patience, conscience, etc"
		}, {
			"ordinal": "That form of the numeral that shows the order of anything in a series, as first, second, third"
		}, {
			"ordination": "A consecration to the ministry"
		}, {
			"ordnance": "A general name for all kinds of weapons and their appliances used in war"
		}, {
			"orgies": "Wild or wanton revelry"
		}, {
			"origin": "The beginning of that which becomes or is made to be"
		}, {
			"original": "Not copied nor produced by imitation"
		}, {
			"originate": "To cause or constitute the beginning or first stage of the existence of"
		}, {
			"ornate": "Ornamented to a marked degree"
		}, {
			"orthodox": "Holding the commonly accepted faith"
		}, {
			"orthodoxy": "Acceptance of the common faith"
		}, {
			"orthogonal": "Having or determined by right angles"
		}, {
			"orthopedic": "Relating to the correcting or preventing of deformity"
		}, {
			"orthopedist": "One who practices the correcting or preventing of deformity"
		}, {
			"oscillate": "To swing back and forth"
		}, {
			"osculate": "To kiss"
		}, {
			"ossify": "to convert into bone"
		}, {
			"ostentation": "A display dictated by vanity and intended to invite applause or flattery"
		}, {
			"ostracism": "Exclusion from intercourse or favor, as in society or politics"
		}, {
			"ostracize": "To exclude from public or private favor"
		}, {
			"ought": "To be under moral obligation to be or do"
		}, {
			"oust": "To eject"
		}, {
			"out-and-out": "Genuinely"
		}, {
			"outbreak": "A sudden and violent breaking forth, as of something that has been pent up or restrained"
		}, {
			"outburst": "A violent issue, especially of passion in an individual"
		}, {
			"outcast": "One rejected and despised, especially socially"
		}, {
			"outcry": "A vehement or loud cry or clamor"
		}, {
			"outdo": "To surpass"
		}, {
			"outlandish": "Of barbarous, uncouth, and unfamiliar aspect or action"
		}, {
			"outlast": "To last longer than"
		}, {
			"outlaw": "A habitual lawbreaker"
		}, {
			"outlive": "To continue to exist after"
		}, {
			"out-of-the-way": "Remotely situated"
		}, {
			"outpost": "A detachment of troops stationed at a distance from the main body to guard against surprise"
		}, {
			"outrage": "A gross infringement of morality or decency"
		}, {
			"outrageous": "Shocking in conduct"
		}, {
			"outreach": "To reach or go beyond"
		}, {
			"outride": "To ride faster than"
		}, {
			"outrigger": "A part built or arranged to project beyond a natural outline for support"
		}, {
			"outright": "Entirely"
		}, {
			"outskirt": "A border region"
		}, {
			"outstretch": "To extend"
		}, {
			"outstrip": "To go beyond"
		}, {
			"outweigh": "To surpass in importance or excellence"
		}, {
			"overdo": "To overtax the strength of"
		}, {
			"overdose": "An excessive dose, usually so large a dose of a medicine that its effect is toxic"
		}, {
			"overeat": "To eat to excess"
		}, {
			"overhang": "A portion of a structure which projects or hangs over"
		}, {
			"overleap": "To leap beyond"
		}, {
			"overlord": "One who holds supremacy over another"
		}, {
			"overpass": "To pass across or over, as a river"
		}, {
			"overpay": "To pay or reward in excess"
		}, {
			"overpower": "To gain supremacy or victory over by superior power"
		}, {
			"overproduction": "Excessive production"
		}, {
			"overreach": "To stretch out too far"
		}, {
			"overrun": "To infest or ravage"
		}, {
			"oversee": "To superintend"
		}, {
			"overseer": "A supervisor"
		}, {
			"overshadow": "To cast into the shade or render insignificant by comparison"
		}, {
			"overstride": "To step beyond"
		}, {
			"overthrow": "To vanquish an established ruler or government"
		}, {
			"overtone": "A harmonic"
		}, {
			"overture": "An instrumental prelude to an opera, oratorio, or ballet"
		}, {
			"overweight": "Preponderance"
		}, {
			"pacify": "To bring into a peaceful state"
		}, {
			"packet": "A bundle, as of letters"
		}, {
			"pact": "A covenant"
		}, {
			"pagan": "A worshiper of false gods"
		}, {
			"pageant": "A dramatic representation, especially a spectacular one"
		}, {
			"palate": "The roof of the mouth"
		}, {
			"palatial": "Magnificent"
		}, {
			"paleontology": "The branch of biology that treats of ancient life and fossil organisms"
		}, {
			"palette": "A thin tablet, with a hole for the thumb, upon which artists lay their colors for painting"
		}, {
			"palinode": "A retraction"
		}, {
			"pall": "To make dull by satiety"
		}, {
			"palliate": "To cause to appear less guilty"
		}, {
			"pallid": "Of a pale or wan appearance"
		}, {
			"palpable": "perceptible by feeling or touch"
		}, {
			"palsy": "Paralysis"
		}, {
			"paly": "Lacking color or brilliancy"
		}, {
			"pamphlet": "A brief treatise or essay, usually on a subject of current interest"
		}, {
			"pamphleteer": "To compose or issue pamphlets, especially controversial ones"
		}, {
			"panacea": "A remedy or medicine proposed for or professing to cure all diseases"
		}, {
			"Pan-American": "Including or pertaining to the whole of America, both North and South"
		}, {
			"pandemic": "Affecting a whole people or all classes, as a disease"
		}, {
			"pandemonium": "A fiendish or riotous uproar"
		}, {
			"panegyric": "A formal and elaborate eulogy, written or spoken, of a person or of an act"
		}, {
			"panel": "A rectangular piece set in or as in a frame"
		}, {
			"panic": "A sudden, unreasonable, overpowering fear"
		}, {
			"panoply": "A full set of armor"
		}, {
			"panorama": "A series of large pictures representing a continuous scene"
		}, {
			"pantheism": "The worship of nature for itself or its beauty"
		}, {
			"Pantheon": "A circular temple at Rome with a fine Corinthian portico and a great domed roof"
		}, {
			"pantomime": "Sign-language"
		}, {
			"pantoscope": "A very wide-angled photographic lens"
		}, {
			"papacy": "The official head of the Roman Catholic Church"
		}, {
			"papyrus": "The writing-paper of the ancient Egyptians, and later of the Romans"
		}, {
			"parable": "A brief narrative founded on real scenes or events usually with a moral"
		}, {
			"paradox": "A statement or doctrine seemingly in contradiction to the received belief"
		}, {
			"paragon": "A model of excellence"
		}, {
			"parallel": "To cause to correspond or lie in the same direction and equidistant in all parts"
		}, {
			"parallelism": "Essential likeness"
		}, {
			"paralysis": "Loss of the power of contractility in the voluntary or involuntary muscles"
		}, {
			"paralyze": "To deprive of the power to act"
		}, {
			"paramount": "Supreme in authority"
		}, {
			"paramour": "One who is unlawfully and immorally a lover or a mistress"
		}, {
			"paraphernalia": "Miscellaneous articles of equipment or adornment"
		}, {
			"paraphrase": "Translate freely"
		}, {
			"pare": "To cut, shave, or remove (the outside) from anything"
		}, {
			"parentage": "The relation of parent to child, of the producer to the produced, or of cause to effect"
		}, {
			"Pariah": "A member of a degraded class; a social outcast"
		}, {
			"parish": "The ecclesiastical district in charge of a pastor"
		}, {
			"Parisian": "Of or pertaining to the city of Paris"
		}, {
			"parity": "Equality, as of condition or rank"
		}, {
			"parlance": "Mode of speech"
		}, {
			"parley": "To converse in"
		}, {
			"parliament": "A legislative body"
		}, {
			"parlor": "A room for reception of callers or entertainment of guests"
		}, {
			"parody": "To render ludicrous by imitating the language of"
		}, {
			"paronymous": "Derived from the same root or primitive word"
		}, {
			"paroxysm": "A sudden outburst of any kind of activity"
		}, {
			"parricide": "The murder of a parent"
		}, {
			"parse": "To describe, as a sentence, by separating it into its elements and describing each word"
		}, {
			"parsimonious": "Unduly sparing in the use or expenditure of money"
		}, {
			"partible": "Separable"
		}, {
			"participant": "One having a share or part"
		}, {
			"participate": "To receive or have a part or share of"
		}, {
			"partition": "That which separates anything into distinct parts"
		}, {
			"partisan": "Characterized by or exhibiting undue or unreasoning devotion to a party"
		}, {
			"passible": "Capable of feeling of suffering"
		}, {
			"passive": "Unresponsive"
		}, {
			"pastoral": "Having the spirit or sentiment of rural life"
		}, {
			"paternal": "Fatherly"
		}, {
			"paternity": "Fatherhood"
		}, {
			"pathos": "The quality in any form of representation that rouses emotion or sympathy"
		}, {
			"patriarch": "The chief of a tribe or race who rules by paternal right"
		}, {
			"patrician": "Of senatorial or noble rank"
		}, {
			"patrimony": "An inheritance from an ancestor, especially from one's father"
		}, {
			"patriotism": "Love and devotion to one's country"
		}, {
			"patronize": "To exercise an arrogant condescension toward"
		}, {
			"patronymic": "Formed after one's father's name"
		}, {
			"patter": "To mumble something over and over"
		}, {
			"paucity": "Fewness"
		}, {
			"pauper": "One without means of support"
		}, {
			"pauperism": "Dependence on charity"
		}, {
			"pavilion": "An open structure for temporary shelter"
		}, {
			"payee": "A person to whom money has been or is to be paid"
		}, {
			"peaceable": "Tranquil"
		}, {
			"peaceful": "Tranquil"
		}, {
			"peccable": "Capable of sinning"
		}, {
			"peccadillo": "A small breach of propriety or principle"
		}, {
			"peccant": "Guilty"
		}, {
			"pectoral": "Pertaining to the breast or thorax"
		}, {
			"pecuniary": "Consisting of money"
		}, {
			"pedagogics": "The science and art of teaching"
		}, {
			"pedagogue": "A schoolmaster"
		}, {
			"pedagogy": "The science and art of teaching"
		}, {
			"pedal": "A lever for the foot usually applied only to musical instruments, cycles, and other machines"
		}, {
			"pedant": "A scholar who makes needless and inopportune display of his learning"
		}, {
			"peddle": "To go about with a small stock of goods to sell"
		}, {
			"pedestal": "A base or support as for a column, statue, or vase"
		}, {
			"pedestrian": "One who journeys on foot"
		}, {
			"pediatrics": "The department of medical science that relates to the treatment of diseases of childhood"
		}, {
			"pedigree": "One's line of ancestors"
		}, {
			"peddler": "One who travels from house to house with an assortment of goods for retail"
		}, {
			"peerage": "The nobility"
		}, {
			"peerless": "Of unequaled excellence or worth"
		}, {
			"peevish adj": "(irritable)"
		}, {
			"pellucid": "Translucent"
		}, {
			"penalty": "The consequences that follow the transgression of natural or divine law"
		}, {
			"penance": "Punishment to which one voluntarily submits or subjects himself as an expression of penitence"
		}, {
			"penchant": "A bias in favor of something"
		}, {
			"pendant": "Anything that hangs from something else, either for ornament or for use"
		}, {
			"pendulous": "Hanging, especially so as to swing by an attached end or part"
		}, {
			"pendulum": "A weight hung on a rod, serving by its oscillation to regulate the rate of a clock"
		}, {
			"penetrable": "That may be pierced by physical, moral, or intellectual force"
		}, {
			"penetrate": "To enter or force a way into the interior parts of"
		}, {
			"penetration": "Discernment"
		}, {
			"peninsular": "Pertaining to a piece of land almost surrounded by water"
		}, {
			"penitence": "Sorrow for sin with desire to amend and to atone"
		}, {
			"penitential": "Pertaining to sorrow for sin with desire to amend and to atone"
		}, {
			"pennant": "A small flag"
		}, {
			"pension": "A periodical allowance to an individual on account of past service done by him/her"
		}, {
			"pentagram": "A figure having five points or lobes"
		}, {
			"pentavalent": "Quinqeuvalent"
		}, {
			"pentad": "The number five"
		}, {
			"pentagon": "A figure, especially, with five angles and five sides"
		}, {
			"pentahedron": "A solid bounded by five plane faces"
		}, {
			"pentameter": "In prosody, a line of verse containing five units or feet"
		}, {
			"pentathlon": "The contest of five associated exercises in the great games and the same contestants"
		}, {
			"penultimate": "A syllable or member of a series that is last but one"
		}, {
			"penurious": "Excessively sparing in the use of money"
		}, {
			"penury": "Indigence"
		}, {
			"perambulate": "To walk about"
		}, {
			"perceive": "To have knowledge of, or receive impressions concerning, through the medium of the body senses"
		}, {
			"perceptible": "Cognizable"
		}, {
			"perception": "Knowledge through the senses of the existence and properties of matter or the external world"
		}, {
			"percipience": "The act of perceiving"
		}, {
			"percipient": "One who or that which perceives"
		}, {
			"percolate": "To filter"
		}, {
			"percolator": "A filter"
		}, {
			"percussion": "The sharp striking of one body against another"
		}, {
			"peremptory": "Precluding question or appeal"
		}, {
			"perennial": "Continuing though the year or through many years"
		}, {
			"perfectible": "Capable of being made perfect"
		}, {
			"perfidy": "Treachery"
		}, {
			"perforate": "To make a hole or holes through"
		}, {
			"perform": "To accomplish"
		}, {
			"perfumery": "The preparation of perfumes"
		}, {
			"perfunctory": "Half-hearted"
		}, {
			"perhaps": "Possibly"
		}, {
			"perigee": "The point in the orbit of the moon when it is nearest the earth"
		}, {
			"periodicity": "The habit or characteristic of recurrence at regular intervals"
		}, {
			"peripatetic": "Walking about"
		}, {
			"perjure": "To swear falsely to"
		}, {
			"perjury": "A solemn assertion of a falsity"
		}, {
			"permanence": "A continuance in the same state, or without any change that destroys the essential form or nature"
		}, {
			"permanent": "Durable"
		}, {
			"permeate": "To pervade"
		}, {
			"permissible": "That may be allowed"
		}, {
			"permutation": "Reciprocal change, different ordering of same items"
		}, {
			"pernicious": "Tending to kill or hurt"
		}, {
			"perpendicular": "Straight up and down"
		}, {
			"perpetrator": "The doer of a wrong or a criminal act"
		}, {
			"perpetuate": "To preserve from extinction or oblivion"
		}, {
			"perquisite": "Any profit from service beyond the amount fixed as salary or wages"
		}, {
			"persecution": "Harsh or malignant oppression"
		}, {
			"perseverance": "A persistence in purpose and effort"
		}, {
			"persevere": "To continue striving in spite of discouragements"
		}, {
			"persiflage": "Banter"
		}, {
			"persist": "To continue steadfast against opposition"
		}, {
			"persistence": "A fixed adherence to a resolve, course of conduct, or the like"
		}, {
			"personage": "A man or woman as an individual, especially one of rank or high station"
		}, {
			"personal": "Not general or public"
		}, {
			"personality": "The attributes, taken collectively, that make up the character and nature of an individual"
		}, {
			"personnel": "The force of persons collectively employed in some service"
		}, {
			"perspective": "The relative importance of facts or matters from any special point of view"
		}, {
			"perspicacious": "Astute"
		}, {
			"perspicacity": "Acuteness or discernment"
		}, {
			"perspicuous": "Lucid"
		}, {
			"perspiration": "Sweat"
		}, {
			"perspire": "To excrete through the pores of the skin"
		}, {
			"persuade": "To win the mind of by argument, eloquence, evidence, or reflection"
		}, {
			"persuadable": "capable of influencing to action by entreaty, statement, or anything that moves the feelings"
		}, {
			"pertinacious": "Persistent or unyielding"
		}, {
			"pertinacity": "Unyielding adherence"
		}, {
			"pertinent": "Relevant"
		}, {
			"perturb": "To disturb greatly"
		}, {
			"perturbation": "Mental excitement or confusion"
		}, {
			"perusal": "The act of reading carefully or thoughtfully"
		}, {
			"pervade": "To pass or spread through every part"
		}, {
			"pervasion": "The state of spreading through every part"
		}, {
			"pervasive": "Thoroughly penetrating or permeating"
		}, {
			"perverse": "Unreasonable"
		}, {
			"perversion": "Diversion from the true meaning or proper purpose"
		}, {
			"perversity": "Wickedness"
		}, {
			"pervert": "One who has forsaken a doctrine regarded as true for one esteemed false"
		}, {
			"pervious": "Admitting the entrance or passage of another substance"
		}, {
			"pestilence": "A raging epidemic"
		}, {
			"pestilent": "Having a malign influence or effect"
		}, {
			"pestilential": "having the nature of or breeding pestilence"
		}, {
			"peter": "To fail or lose power, efficiency, or value"
		}, {
			"petrify": "To convert into a substance of stony hardness and character"
		}, {
			"petulance": "The character or condition of being impatient, capricious or petulant"
		}, {
			"petulant": "Displaying impatience"
		}, {
			"pharmacopoeia": "A book containing the formulas and methods of preparation of medicines for the use of druggists"
		}, {
			"pharmacy": "The art or business of compounding and dispensing medicines"
		}, {
			"phenomenal": "Extraordinary or marvelous"
		}, {
			"phenomenon": "Any unusual occurrence"
		}, {
			"philander": "To play at courtship with a woman"
		}, {
			"philanthropic": "Benevolent"
		}, {
			"philanthropist": "One who endeavors to help his fellow men"
		}, {
			"philanthropy": "Active humanitarianism"
		}, {
			"philately": "The study and collection of stamps"
		}, {
			"philharmonic": "Fond of music"
		}, {
			"philogynist": "One who is fond of women"
		}, {
			"philologist": "An expert in linguistics"
		}, {
			"philology": "The study of language in connection with history and literature"
		}, {
			"philosophize": "To seek ultimate causes and principles"
		}, {
			"philosophy": "The general principles, laws, or causes that furnish the rational explanation of anything"
		}, {
			"phlegmatic": "Not easily roused to feeling or action"
		}, {
			"phonetic": "Representing articulate sounds or speech"
		}, {
			"phonic": "Pertaining to the nature of sound"
		}, {
			"phonogram": "A graphic character symbolizing an articulate sound"
		}, {
			"phonology": "The science of human vocal sounds"
		}, {
			"phosphorescence": "The property of emitting light"
		}, {
			"photoelectric": "Pertaining to the combined action of light and electricity"
		}, {
			"photometer": "Any instrument for measuring the intensity of light or comparing the intensity of two lights"
		}, {
			"photometry": "The art of measuring the intensity of light"
		}, {
			"physicist": "A specialist in the science that treats of the phenomena associated with matter and energy"
		}, {
			"physics": "The science that treats of the phenomena associated with matter and energy"
		}, {
			"physiocracy": "The doctrine that land and its products are the only true wealth"
		}, {
			"physiognomy": "The external appearance merely"
		}, {
			"physiography": "Description of nature"
		}, {
			"physiology": "The science of organic functions"
		}, {
			"physique": "The physical structure or organization of a person"
		}, {
			"picayune": "Of small value"
		}, {
			"piccolo": "A small flute"
		}, {
			"piece": "A loose or separated part, as distinguished from the whole or the mass"
		}, {
			"piecemeal": "Gradually"
		}, {
			"pillage": "Open robbery, as in war"
		}, {
			"pillory": "A wooden framework in which an offender is fastened to boards and is exposed to public scorn"
		}, {
			"pincers": "An instrument having two lever-handles and two jaws working on a pivot"
		}, {
			"pinchers": "An instrument having two jaws working on a pivot"
		}, {
			"pinnacle": "A high or topmost point, as a mountain-peak"
		}, {
			"pioneer": "One among the first to explore a country"
		}, {
			"pious": "Religious"
		}, {
			"pique": "To excite a slight degree of anger in"
		}, {
			"piteous": "Compassionate"
		}, {
			"pitiable": "Contemptible"
		}, {
			"pitiful": "Wretched"
		}, {
			"pitiless": "Hard-hearted"
		}, {
			"pittance": "Any small portion or meager allowance"
		}, {
			"placate": "To bring from a state of angry or hostile feeling to one of patience or friendliness"
		}, {
			"placid": "Serene"
		}, {
			"plagiarism": "The stealing of passages from the writings of another and publishing them as one's own"
		}, {
			"planisphere": "A polar projection of the heavens on a chart"
		}, {
			"plasticity": "The property of some substances through which the form of the mass can readily be changed"
		}, {
			"platitude": "A written or spoken statement that is flat, dull, or commonplace"
		}, {
			"plaudit": "An expression of applause"
		}, {
			"plausible": "Seeming likely to be true, though open to doubt"
		}, {
			"playful": "Frolicsome"
		}, {
			"playwright": "A maker of plays for the stage"
		}, {
			"plea": "An argument to obtain some desired action"
		}, {
			"pleasant": "Agreeable"
		}, {
			"pleasurable": "Affording gratification"
		}, {
			"plebeian": "Common"
		}, {
			"pledgee": "The person to whom anything is pledged"
		}, {
			"pledgeor": "One who gives a pledge"
		}, {
			"plenary": "Entire"
		}, {
			"plenipotentiary": "A person fully empowered to transact any business"
		}, {
			"plenitude": "Abundance"
		}, {
			"plenteous": "Abundant"
		}, {
			"plumb": "A weight suspended by a line to test the verticality of something"
		}, {
			"plummet": "A piece of lead for making soundings, adjusting walls to the vertical"
		}, {
			"pluperfect": "Expressing past time or action prior to some other past time or action"
		}, {
			"plural": "Containing or consisting of more than one"
		}, {
			"plurality": "A majority"
		}, {
			"plutocracy": "A wealthy class in a political community who control the government by means of their money"
		}, {
			"pneumatic": "Pertaining to or consisting of air or gas"
		}, {
			"poesy": "Poetry"
		}, {
			"poetaster": "An inferior poet"
		}, {
			"poetic": "Pertaining to poetry"
		}, {
			"poetics": "The rules and principles of poetry"
		}, {
			"poignancy": "Severity or acuteness, especially of pain or grief"
		}, {
			"poignant": "Severely painful or acute to the spirit"
		}, {
			"poise": "Equilibrium"
		}, {
			"polar": "Pertaining to the poles of a sphere, especially of the earth"
		}, {
			"polemics": "The art of controversy or disputation"
		}, {
			"pollen": "The fine dust-like grains or powder formed within the anther of a flowering plant"
		}, {
			"pollute": "To contaminate"
		}, {
			"polyarchy": "Government by several or many persons of what- ever class"
		}, {
			"polycracy": "The rule of many"
		}, {
			"polygamy": "the fact or condition of having more than one wife or husband at once"
		}, {
			"polyglot": "Speaking several tongues"
		}, {
			"polygon": "A figure having many angles"
		}, {
			"polyhedron": "A solid bounded by plane faces, especially by more than four"
		}, {
			"polysyllable": "Having several syllables, especially more than three syllables"
		}, {
			"polytechnic": "Pertaining to, embracing, or practicing many arts"
		}, {
			"polytheism": "The doctrine or belief that there are more gods than one"
		}, {
			"pommel": "To beat with something thick or bulky"
		}, {
			"pomposity": "The quality of being marked by an assumed stateliness and impressiveness of manner"
		}, {
			"pompous": "Marked by an assumed stateliness and impressiveness of manner"
		}, {
			"ponder": "To meditate or reflect upon"
		}, {
			"ponderous": "Unusually weighty or forcible"
		}, {
			"pontiff": "The Pope"
		}, {
			"populace": "The common people"
		}, {
			"populous": "Containing many inhabitants, especially in proportion to the territory"
		}, {
			"portend": "To indicate as being about to happen, especially by previous signs"
		}, {
			"portent": "Anything that indicates what is to happen"
		}, {
			"portfolio": "A portable case for holding writing-materials, drawings, etc"
		}, {
			"posit": "To present in an orderly manner"
		}, {
			"position": "The manner in which a thing is placed"
		}, {
			"positive": "Free from doubt or hesitation"
		}, {
			"posse": "A force of men"
		}, {
			"possess": "To own"
		}, {
			"possession": "The having, holding, or detention of property in one's power or command"
		}, {
			"possessive": "Pertaining to the having, holding, or detention of property in one's power or command"
		}, {
			"possessor": "One who owns, enjoys, or controls anything, as property"
		}, {
			"possible": "Being not beyond the reach of power natural, moral, or supernatural"
		}, {
			"postdate": "To make the date of any writing later than the real date"
		}, {
			"posterior": "The hinder part"
		}, {
			"postgraduate": "Pertaining to studies that are pursued after receiving a degree"
		}, {
			"postscript": "Something added to a letter after the writer's signature"
		}, {
			"potency": "Power"
		}, {
			"potent": "Physically powerful"
		}, {
			"potentate": "One possessed of great power or sway"
		}, {
			"potential": "Anything that may be possible"
		}, {
			"potion": "A dose of liquid medicine"
		}, {
			"powerless": "Impotent"
		}, {
			"practicable": "Feasible"
		}, {
			"prate": "To talk about vainly or foolishly"
		}, {
			"prattle": "To utter in simple or childish talk"
		}, {
			"preamble": "A statement introductory to and explanatory of what follows"
		}, {
			"precarious": "Perilous"
		}, {
			"precaution": "A provision made in advance for some possible emergency or danger"
		}, {
			"precede": "To happen first"
		}, {
			"precedence": "Priority in place, time, or rank"
		}, {
			"precedent": "An instance that may serve as a guide or basis for a rule"
		}, {
			"precedential": "Of the nature of an instance that may serve as a guide or basis for a rule"
		}, {
			"precession": "The act of going forward"
		}, {
			"precipice": "A high and very steep or approximately vertical cliff"
		}, {
			"precipitant": "Moving onward quickly and heedlessly"
		}, {
			"precipitate": "To force forward prematurely"
		}, {
			"precise": "Exact"
		}, {
			"precision": "Accuracy of limitation, definition, or adjustment"
		}, {
			"preclude": "To prevent"
		}, {
			"precocious": "Having the mental faculties prematurely developed"
		}, {
			"precursor": "A forerunner or herald"
		}, {
			"predatory": "Prone to pillaging"
		}, {
			"predecessor": "An incumbent of a given office previous to another"
		}, {
			"predicament": "A difficult, trying situation or plight"
		}, {
			"predicate": "To state as belonging to something"
		}, {
			"predict": "To foretell"
		}, {
			"prediction": "A prophecy"
		}, {
			"predominance": "Ascendancy or preponderance"
		}, {
			"predominant": "Superior in power, influence, effectiveness, number, or degree"
		}, {
			"predominate": "To be chief in importance, quantity, or degree"
		}, {
			"preeminence": "Special eminence"
		}, {
			"preempt": "To secure the right of preference in the purchase of public land"
		}, {
			"preemption": "The right or act of purchasing before others"
		}, {
			"preengage": "To preoccupy"
		}, {
			"preestablish": "To settle or arrange beforehand"
		}, {
			"preexist": "To exist at a period or in a state earlier than something else"
		}, {
			"preexistence": "Existence antecedent to something"
		}, {
			"preface": "A brief explanation or address to the reader, at the beginning of a book"
		}, {
			"prefatory": "Pertaining to a brief explanation to the reader at the beginning of a book"
		}, {
			"prefer": "To hold in higher estimation"
		}, {
			"preferable": "More desirable than others"
		}, {
			"preference": "An object of favor or choice"
		}, {
			"preferential": "Possessing, giving, or constituting preference or priority"
		}, {
			"preferment": "Preference"
		}, {
			"prefix": "To attach at the beginning"
		}, {
			"prehensible": "Capable of being grasped"
		}, {
			"prehensile": "Adapted for grasping or holding"
		}, {
			"prehension": "The act of laying hold of or grasping"
		}, {
			"prejudice": "A judgment or opinion formed without due examination of the facts"
		}, {
			"prelacy": "A system of church government"
		}, {
			"prelate": "One of a higher order of clergy having direct authority over other clergy"
		}, {
			"prelude": "An introductory or opening performance"
		}, {
			"premature": "Coming too soon"
		}, {
			"premier": "First in rank or position"
		}, {
			"premise": "A judgment as a conclusion"
		}, {
			"premonition": "Foreboding"
		}, {
			"preoccupation": "The state of having the mind, attention, or inclination preoccupied"
		}, {
			"preoccupy": "To fill the mind of a person to the exclusion of other subjects"
		}, {
			"preordain": "To foreordain"
		}, {
			"preparation": "An act or proceeding designed to bring about some event"
		}, {
			"preparatory": "Having to do with what is preliminary"
		}, {
			"preponderant": "Prevalent"
		}, {
			"preponderate": "To exceed in influence or power"
		}, {
			"prepossession": "A preconceived liking"
		}, {
			"preposterous": "Utterly ridiculous or absurd"
		}, {
			"prerogative": "Having superior rank or precedence"
		}, {
			"presage": "To foretell"
		}, {
			"prescience": "Knowledge of events before they take place"
		}, {
			"prescient": "Foreknowing"
		}, {
			"prescript": "Prescribed as a rule or model"
		}, {
			"prescriptible": "Derived from authoritative direction"
		}, {
			"prescription": "An authoritative direction"
		}, {
			"presentient": "Perceiving or feeling beforehand"
		}, {
			"presentiment": "Foreboding"
		}, {
			"presentment": "Semblance"
		}, {
			"preservation": "Conservation"
		}, {
			"presumption": "That which may be logically assumed to be true until disproved"
		}, {
			"presumptuous": "Assuming too much"
		}, {
			"pretension": "A bold or presumptuous assertion"
		}, {
			"pretentious": "Marked by pretense, conceit, or display"
		}, {
			"preternatural": "Extraordinary"
		}, {
			"pretext": "A fictitious reason or motive"
		}, {
			"prevalence": "Frequency"
		}, {
			"prevalent": "Of wide extent or frequent occurrence"
		}, {
			"prevaricate": "To use ambiguous or evasive language for the purpose of deceiving or diverting attention"
		}, {
			"prevention": "Thwarting"
		}, {
			"prickle": "To puncture slightly with fine, sharp points"
		}, {
			"priggish": "Conceited"
		}, {
			"prim": "Stiffly proper"
		}, {
			"prima": "First"
		}, {
			"primer": "An elementary reading-book for children"
		}, {
			"primeval": "Belonging to the first ages"
		}, {
			"primitive": "Pertaining to the beginning or early times"
		}, {
			"principal": "Most important"
		}, {
			"principality": "The territory of a reigning prince"
		}, {
			"principle": "A general truth or proposition"
		}, {
			"priory": "A monastic house"
		}, {
			"pristine": "Primitive"
		}, {
			"privateer": "A vessel owned and officered by private persons, but carrying on maritime war"
		}, {
			"privilege": "A right or immunity not enjoyed by all, or that may be enjoyed only under special conditions"
		}, {
			"privity": "Knowledge shared with another or others regarding a private matter"
		}, {
			"privy": "Participating with another or others in the knowledge of a secret transaction"
		}, {
			"probate": "Relating to making proof, as of a will"
		}, {
			"probation": "Any proceeding designed to ascertain or test character, qualification, or the like"
		}, {
			"probe": "To search through and through"
		}, {
			"probity": "Virtue or integrity tested and confirmed"
		}, {
			"procedure": "A manner or method of acting"
		}, {
			"proceed": "To renew motion or action, as after rest or interruption"
		}, {
			"proclamation": "Any announcement made in a public manner"
		}, {
			"procrastinate": "To put off till tomorrow or till a future time"
		}, {
			"procrastination": "Delay"
		}, {
			"proctor": "An agent acting for another"
		}, {
			"prodigal": "One wasteful or extravagant, especially in the use of money or property"
		}, {
			"prodigious": "Immense"
		}, {
			"prodigy": "A person or thing of very remarkable gifts or qualities"
		}, {
			"productive": "Yielding in abundance"
		}, {
			"profession": "Any calling or occupation involving special mental or other special disciplines"
		}, {
			"professor": "A public teacher of the highest grade in a university or college"
		}, {
			"proffer": "To offer to another for acceptance"
		}, {
			"proficiency": "An advanced state of acquirement, as in some knowledge, art, or science"
		}, {
			"proficient": "Possessing ample and ready knowledge or of skill in any art, science, or industry"
		}, {
			"profile": "An outline or contour"
		}, {
			"profiteer": "One who profits"
		}, {
			"profligacy": "Shameless viciousness"
		}, {
			"profligate": "Abandoned to vice"
		}, {
			"profuse": "Produced or displayed in overabundance"
		}, {
			"progeny": "Offspring"
		}, {
			"progression": "A moving forward or proceeding in course"
		}, {
			"prohibition": "A decree or an order forbidding something"
		}, {
			"prohibitionist": "One who favors the prohibition by law of the manufacture and sale of alcoholic beverages"
		}, {
			"prohibitory": "Involving or equivalent to prohibition, especially of the sale of alcoholic beverages"
		}, {
			"projection": "A prominence"
		}, {
			"proletarian": "A person of the lowest or poorest class"
		}, {
			"prolific": "Producing offspring or fruit"
		}, {
			"prolix": "Verbose"
		}, {
			"prologue": "A prefatory statement or explanation to a poem, discourse, or performance"
		}, {
			"prolong": "To extend in time or duration"
		}, {
			"promenade": "To walk for amusement or exercise"
		}, {
			"prominence": "The quality of being noticeable or distinguished"
		}, {
			"prominent": "Conspicuous in position, character, or importance"
		}, {
			"promiscuous": "Brought together without order, distinction, or design (for sex)"
		}, {
			"promissory": "Expressing an engagement to pay"
		}, {
			"promontory": "A high point of land extending outward from the coastline into the sea"
		}, {
			"promoter": "A furtherer, forwarder, or encourager"
		}, {
			"promulgate": "To proclaim"
		}, {
			"propaganda": "Any institution or systematic scheme for propagating a doctrine or system"
		}, {
			"propagate": "To spread abroad or from person to person"
		}, {
			"propel": "To drive or urge forward"
		}, {
			"propellant": "Propelling"
		}, {
			"propeller": "One who or that which propels"
		}, {
			"prophecy": "Any prediction or foretelling"
		}, {
			"prophesy": "To predict or foretell, especially under divine inspiration and guidance"
		}, {
			"propitious": "Kindly disposed"
		}, {
			"proportionate": "Being in proportion"
		}, {
			"propriety": "Accordance with recognized usage, custom, or principles"
		}, {
			"propulsion": "A driving onward or forward"
		}, {
			"prosaic": "Unimaginative"
		}, {
			"proscenium": "That part of the stage between the curtain and the orchestra"
		}, {
			"proscribe": "To reject, as a teaching or a practice, with condemnation or denunciation"
		}, {
			"proscription": "Any act of condemnation and rejection from favor and privilege"
		}, {
			"proselyte": "One who has been won over from one religious belief to another"
		}, {
			"prosody": "The science of poetical forms"
		}, {
			"prospector": "One who makes exploration, search, or examination, especially for minerals"
		}, {
			"prospectus": "A paper or pamphlet containing information of a proposed undertaking"
		}, {
			"prostrate": "Lying prone, or with the head to the ground"
		}, {
			"protagonist": "A leader in any enterprise or contest"
		}, {
			"protection": "Preservation from harm, danger, annoyance, or any other evil"
		}, {
			"protective": "Sheltering"
		}, {
			"protector": "A defender"
		}, {
			"protege": "One specially cared for and favored by another usually older person"
		}, {
			"Protestant": "A Christian who denies the authority of the Pope and holds the right of special judgment"
		}, {
			"protomartyr": "The earliest victim in any cause"
		}, {
			"protocol": "A declaration or memorandum of agreement less solemn and formal than a treaty"
		}, {
			"protoplasm": "The substance that forms the principal portion of an animal or vegetable cell"
		}, {
			"prototype": "A work, original in character, afterward imitated in form or spirit"
		}, {
			"protract": "To prolong"
		}, {
			"protrude": "To push out or thrust forth"
		}, {
			"protrusion": "The act of protruding"
		}, {
			"protuberance": "Something that swells out from a surrounding surface"
		}, {
			"protuberant": "Bulging"
		}, {
			"protuberate": "To swell or bulge beyond the surrounding surface"
		}, {
			"proverb": "A brief, pithy saying, condensing in witty or striking form the wisdom of experience"
		}, {
			"provident": "Anticipating and making ready for future wants or emergencies"
		}, {
			"providential": "Effected by divine guidance"
		}, {
			"provincial": "Uncultured in thought and manner"
		}, {
			"proviso": "A clause in a contract, will, etc., by which its operation is rendered conditional"
		}, {
			"provocation": "An action or mode of conduct that excites resentment"
		}, {
			"prowess": "Strength, skill, and intrepidity in battle"
		}, {
			"proximately": "Immediately"
		}, {
			"proxy": "A person who is empowered by another to represent him or her in a given matter"
		}, {
			"prudence": "Caution"
		}, {
			"prudential": "Proceeding or marked by caution"
		}, {
			"prudery": "An undue display of modesty or delicacy"
		}, {
			"prurient": "Inclined to lascivious thoughts and desires"
		}, {
			"pseudapostle": "A pretended or false apostle"
		}, {
			"pseudonym": "A fictitious name, especially when assumed by a writer"
		}, {
			"pseudonymity": "The state or character of using a fictitious name"
		}, {
			"psychiatry": "The branch of medicine that relates to mental disease"
		}, {
			"psychic": "Pertaining to the mind or soul"
		}, {
			"psychopathic": "Morally irresponsible"
		}, {
			"psychotherapy": "The treatment of mental disease"
		}, {
			"pudgy": "Small and fat"
		}, {
			"puerile": "Childish"
		}, {
			"pugnacious": "Quarrelsome"
		}, {
			"puissant": "Possessing strength"
		}, {
			"pulmonary": "Pertaining to the lungs"
		}, {
			"punctilious": "Strictly observant of the rules or forms prescribed by law or custom"
		}, {
			"punctual": "Observant and exact in points of time"
		}, {
			"pungent": "Affecting the sense of smell"
		}, {
			"pungency": "The quality of affecting the sense of smell"
		}, {
			"punitive": "Pertaining to punishment"
		}, {
			"pupilage": "The state or period of being a student"
		}, {
			"purgatory": "An intermediate state where souls are made fit for paradise or heaven by expiatory suffering"
		}, {
			"purl": "To cause to whirl, as in an eddy"
		}, {
			"purloin": "To steal"
		}, {
			"purport": "Intent"
		}, {
			"purveyor": "one who supplies"
		}, {
			"pusillanimous": "Without spirit or bravery"
		}, {
			"putrescent": "Undergoing decomposition of animal or vegetable matter accompanied by fetid odors"
		}, {
			"pyre": "A heap of combustibles arranged for burning a dead body"
		}, {
			"pyromania": "An insane propensity to set things on fire"
		}, {
			"pyrotechnic": "Pertaining to fireworks or their manufacture"
		}, {
			"pyx": "A vessel or casket, usually of precious metal, in which the host is preserved"
		}, {
			"quackery": "Charlatanry"
		}, {
			"quadrate": "To divide into quarters"
		}, {
			"quadruple": "To multiply by four"
		}, {
			"qualification": "A requisite for an employment, position, right, or privilege"
		}, {
			"qualify": "To endow or furnish with requisite ability, character, knowledge, skill, or possessions"
		}, {
			"qualm": "A fit of nausea"
		}, {
			"quandary": "A puzzling predicament"
		}, {
			"quantity": "Magnitude"
		}, {
			"quarantine": "The enforced isolation of any person or place infected with contagious disease"
		}, {
			"quarrelsome": "Irascible"
		}, {
			"quarter": "One of four equal parts into which anything is or may be divided"
		}, {
			"quarterly": "Occurring or made at intervals of three months"
		}, {
			"quartet": "A composition for four voices or four instruments"
		}, {
			"quarto": "An eight-page newspaper of any size"
		}, {
			"quay": "A wharf or artificial landing-place on the shore of a harbor or projecting into it"
		}, {
			"querulous": "Habitually complaining"
		}, {
			"query": "To make inquiry"
		}, {
			"queue": "A file of persons waiting in order of their arrival, as for admittance"
		}, {
			"quibble": "An utterly trivial distinction or objection"
		}, {
			"quiescence": "Quiet"
		}, {
			"quiescent": "Being in a state of repose or inaction"
		}, {
			"quiet": "Making no noise"
		}, {
			"quietus": "A silencing, suppressing, or ending"
		}, {
			"quintessence": "The most essential part of anything"
		}, {
			"quintet": "Musical composition arranged for five voices or instruments"
		}, {
			"quite": "Fully"
		}, {
			"Quixotic": "Chivalrous or romantic to a ridiculous or extravagant degree"
		}, {
			"rabid": "Affected with rabies or hydrophobia"
		}, {
			"racy": "Exciting or exhilarating to the mind"
		}, {
			"radiance": "Brilliant or sparkling luster"
		}, {
			"radiate": "To extend in all directions, as from a source or focus"
		}, {
			"radical": "One who holds extreme views or advocates extreme measures"
		}, {
			"radix": "That from or on which something is developed"
		}, {
			"raillery": "Good-humored satire"
		}, {
			"ramify": "To divide or subdivide into branches or subdivisions"
		}, {
			"ramose": "Branch-like"
		}, {
			"rampant": "Growing, climbing, or running without check or restraint"
		}, {
			"rampart": "A bulwark or construction to oppose assault or hostile entry"
		}, {
			"rancor": "Malice"
		}, {
			"rankle": "To produce irritation or festering"
		}, {
			"rapacious": "Disposed to seize by violence or by unlawful or greedy methods"
		}, {
			"rapid": "Having great speed"
		}, {
			"rapine": "The act of seizing and carrying off property by superior force, as in war"
		}, {
			"rapt": "Enraptured"
		}, {
			"raptorial": "Seizing and devouring living prey"
		}, {
			"ration": "To provide with a fixed allowance or portion, especially of food"
		}, {
			"rationalism": "The formation of opinions by relying upon reason alone, independently of authority"
		}, {
			"raucous": "Harsh"
		}, {
			"ravage": "To lay waste by pillage, rapine, devouring, or other destructive methods"
		}, {
			"ravenous": "Furiously voracious or hungry"
		}, {
			"ravine": "A deep gorge or hollow, especially one worn by a stream or flow of water"
		}, {
			"reaction": "Tendency towards a former, or opposite state of things, as after reform, revolution, or inflation"
		}, {
			"reactionary": "Pertaining to, of the nature of, causing, or favoring reaction"
		}, {
			"readily": "Without objection or reluctance"
		}, {
			"readjust": "To put in order after disarrangement"
		}, {
			"ready": "In a state of preparedness for any given purpose or occasion"
		}, {
			"realism": "The principle and practice of depicting persons and scenes as they are believed really to exist"
		}, {
			"rearrange": "To arrange again or in a different order"
		}, {
			"reassure": "To give new confidence"
		}, {
			"rebellious": "Insubordinate"
		}, {
			"rebuff": "A peremptory or unexpected rejection of advances or approaches"
		}, {
			"rebuild": "To build again or anew"
		}, {
			"rebut": "To oppose by argument or a sufficient answer"
		}, {
			"recant": "To withdraw formally one's belief (in something previously believed or maintained)"
		}, {
			"recapitulate": "To repeat again the principal points of"
		}, {
			"recapture": "To capture again"
		}, {
			"recede": "To move back or away"
		}, {
			"receivable": "Capable of being or fit to be received - often money"
		}, {
			"receptive": "Having the capacity, quality, or ability of receiving, as truths or impressions"
		}, {
			"recessive": "Having a tendency to go back"
		}, {
			"recidivist": "A confirmed criminal"
		}, {
			"reciprocal": "Mutually interchangeable or convertible"
		}, {
			"reciprocate": "To give and take mutually"
		}, {
			"reciprocity": "Equal mutual rights and benefits granted and enjoyed"
		}, {
			"recitation": "The act of reciting or repeating, especially in public and from memory"
		}, {
			"reck": "To have a care or thought for"
		}, {
			"reckless": "Foolishly headless of danger"
		}, {
			"reclaim": "To demand or to obtain the return or restoration of"
		}, {
			"recline": "To cause to assume a leaning or recumbent attitude or position"
		}, {
			"recluse": "One who lives in retirement or seclusion"
		}, {
			"reclusory": "A hermitage"
		}, {
			"recognizance": "An acknowledgment entered into before a court with condition to do some particular act"
		}, {
			"recognize": "To recall the identity of (a person or thing)"
		}, {
			"recoil": "To start back as in dismay, loathing, or dread"
		}, {
			"recollect": "To recall the knowledge of"
		}, {
			"reconcilable": "Capable of being adjusted or harmonized"
		}, {
			"reconnoiter": "To make a preliminary examination of for military, surveying, or geological purposes"
		}, {
			"reconsider": "To review with care, especially with a view to a reversal of previous action"
		}, {
			"reconstruct": "To rebuild"
		}, {
			"recourse": "Resort to or application for help in exigency or trouble"
		}, {
			"recover": "To regain"
		}, {
			"recreant": "A cowardly or faithless person"
		}, {
			"recreate": "To refresh after labor"
		}, {
			"recrudescence": "The state of becoming raw or sore again"
		}, {
			"recrudescent": "Becoming raw or sore again"
		}, {
			"recruit": "To enlist men for military or naval service"
		}, {
			"rectify": "To correct"
		}, {
			"rectitude": "The quality of being upright in principles and conduct"
		}, {
			"recuperate": "To recover"
		}, {
			"recur": "To happen again or repeatedly, especially at regular intervals"
		}, {
			"recure": "To cure again"
		}, {
			"recurrent": "Returning from time to time, especially at regular or stated intervals"
		}, {
			"redemption": "The recovery of what is mortgaged or pledged, by paying the debt"
		}, {
			"redolent": "Smelling sweet and agreeable"
		}, {
			"redolence": "Smelling sweet and agreeable"
		}, {
			"redoubtable": "Formidable"
		}, {
			"redound": "Rebound"
		}, {
			"redress": "To set right, as a wrong by compensation or the punishment of the wrong-doer"
		}, {
			"reducible": "That may be reduced"
		}, {
			"redundance": "Excess"
		}, {
			"redundant": "Constituting an excess"
		}, {
			"reestablish": "To restore"
		}, {
			"refer": "To direct or send for information or other purpose"
		}, {
			"referrer": "One who refers"
		}, {
			"referable": "Ascribable"
		}, {
			"referee": "An umpire"
		}, {
			"refinery": "A place where some crude material, as sugar or petroleum, is purified"
		}, {
			"reflectible": "Capable of being turned back"
		}, {
			"reflection": "The throwing off or back of light, heat, sound, or any form of energy that travels in waves"
		}, {
			"reflector": "A mirror, as of metal, for reflecting light, heat, or sound in a particular direction"
		}, {
			"reflexible": "Capable of being reflected"
		}, {
			"reform": "Change for the better"
		}, {
			"reformer": "One who carries out a reform"
		}, {
			"refract": "To bend or turn from a direct course"
		}, {
			"refractory": "Not amenable to control"
		}, {
			"refragable": "Capable of being refuted"
		}, {
			"refringency": "Power to refract"
		}, {
			"refringent": "Having the power to refract"
		}, {
			"refusal": "Denial of what is asked"
		}, {
			"refute": "To prove to be wrong"
		}, {
			"regale": "To give unusual pleasure"
		}, {
			"regalia n": "The emblems of royalty"
		}, {
			"regality": "Royalty"
		}, {
			"regenerate": "To reproduce"
		}, {
			"regent": "One who is lawfully deputized to administer the government for the time being in the name of the ruler"
		}, {
			"regicide": "The killing of a king or sovereign"
		}, {
			"regime": "Particular conduct or administration of affairs"
		}, {
			"regimen": "A systematized order or course of living with reference to food, clothing and personal habits"
		}, {
			"regiment": "A body of soldiers"
		}, {
			"regnant": "Exercising royal authority in one's own right"
		}, {
			"regress": "To return to a former place or condition"
		}, {
			"regretful": "Feeling, expressive of, or full of regret"
		}, {
			"rehabilitate": "To restore to a former status, capacity, right rank, or privilege"
		}, {
			"reign": "To hold and exercise sovereign power"
		}, {
			"reimburse": "To pay back as an equivalent of what has been expended"
		}, {
			"rein": "A step attached to the bit for controlling a horse or other draft-animal"
		}, {
			"reinstate": "To restore to a former state, station, or authority"
		}, {
			"reiterate": "To say or do again and again"
		}, {
			"rejoin": "To reunite after separation"
		}, {
			"rejuvenate": "To restore to youth"
		}, {
			"rejuvenescence": "A renewal of youth"
		}, {
			"relapse": "To suffer a return of a disease after partial recovery"
		}, {
			"relegate": "To send off or consign, as to an obscure position or remote destination"
		}, {
			"relent": "To yield"
		}, {
			"relevant": "Bearing upon the matter in hand"
		}, {
			"reliance": "Dependence"
		}, {
			"reliant": "Having confidence"
		}, {
			"relinquish": "To give up using or having"
		}, {
			"reliquary": "A casket, coffer, or repository in which relics are kept"
		}, {
			"relish": "To like the taste or savor of"
		}, {
			"reluctance": "Unwillingness"
		}, {
			"reluctant": "Unwilling"
		}, {
			"remembrance": "Recollection"
		}, {
			"reminiscence": "The calling to mind of incidents within the range of personal knowledge or experience"
		}, {
			"reminiscent": "Pertaining to the recollection of matters of personal interest"
		}, {
			"remiss": "Negligent"
		}, {
			"remission": "Temporary diminution of a disease"
		}, {
			"remodel": "Reconstruct"
		}, {
			"remonstrance": "Reproof"
		}, {
			"remonstrant": "Having the character of a reproof"
		}, {
			"remonstrate": "To present a verbal or written protest to those who have power to right or prevent a wrong"
		}, {
			"remunerate": "To pay or pay for"
		}, {
			"remuneration": "Compensation"
		}, {
			"Renaissance": "The revival of letters, and then of art, which marks the transition from medieval to modern time"
		}, {
			"rendezvous": "A prearranged place of meeting"
		}, {
			"rendition": "Interpretation"
		}, {
			"renovate": "To restore after deterioration, as a building"
		}, {
			"renunciation": "An explicit disclaimer of a right or privilege"
		}, {
			"reorganize": "To change to a more satisfactory form of organization"
		}, {
			"reparable": "Capable of repair"
		}, {
			"reparation": "The act of making amends, as for an injury, loss, or wrong"
		}, {
			"repartee": "A ready, witty, or apt reply"
		}, {
			"repeal": "To render of no further effect"
		}, {
			"repel": "To force or keep back in a manner, physically or mentally"
		}, {
			"repellent": "Having power to force back in a manner, physically or mentally"
		}, {
			"repentance": "Sorrow for something done or left undone, with desire to make things right by undoing the wrong"
		}, {
			"repertory": "A place where things are stored or gathered together"
		}, {
			"repetition": "The act of repeating"
		}, {
			"repine": "To indulge in fretfulness and faultfinding"
		}, {
			"replenish": "To fill again, as something that has been emptied"
		}, {
			"replete": "Full to the uttermost"
		}, {
			"replica": "A duplicate executed by the artist himself, and regarded, equally with the first, as an original"
		}, {
			"repository": "A place in which goods are stored"
		}, {
			"reprehend": "To find fault with"
		}, {
			"reprehensible": "Censurable"
		}, {
			"reprehension": "Expression of blame"
		}, {
			"repress": "To keep under restraint or control"
		}, {
			"repressible": "Able to be kept under restraint or control"
		}, {
			"reprieve": "To grant a respite from punishment to"
		}, {
			"reprimand": "To chide or rebuke for a fault"
		}, {
			"reprisal": "Any infliction or act by way of retaliation on an enemy"
		}, {
			"reprobate": "One abandoned to depravity and sin"
		}, {
			"reproduce": "To make a copy of"
		}, {
			"reproduction": "The process by which an animal or plant gives rise to another of its kind"
		}, {
			"reproof": "An expression of disapproval or blame personally addressed to one censured"
		}, {
			"repudiate": "To refuse to have anything to do with"
		}, {
			"repugnance": "Thorough dislike"
		}, {
			"repugnant": "Offensive to taste and feeling"
		}, {
			"repulse": "The act of beating or driving back, as an attacking or advancing enemy"
		}, {
			"repulsive": "Grossly offensive"
		}, {
			"repute": "To hold in general opinion"
		}, {
			"requiem": "A solemn mass sung for the repose of the souls of the dead"
		}, {
			"requisite": "Necessary"
		}, {
			"requital": "Adequate return for good or ill"
		}, {
			"requite": "To repay either good or evil to, as to a person"
		}, {
			"rescind": "To make void, as an act, by the enacting authority or a superior authority"
		}, {
			"reseat": "To place in position of office again"
		}, {
			"resemblance": "Similarity in quality or form"
		}, {
			"resent": "To be indignant at, as an injury or insult"
		}, {
			"reservoir": "A receptacle where a quantity of some material, especially of a liquid or gas, may be kept"
		}, {
			"residue": "A remainder or surplus after a part has been separated or otherwise treated"
		}, {
			"resilience": "The power of springing back to a former position"
		}, {
			"resilient": "Having the quality of springing back to a former position"
		}, {
			"resistance": "The exertion of opposite effort or effect"
		}, {
			"resistant": "Offering or tending to produce resistance"
		}, {
			"resistive": "Having or exercising the power of resistance"
		}, {
			"resistless": "Powerless"
		}, {
			"resonance": "The quality of being able to reinforce sound by sympathetic vibrations"
		}, {
			"resonate": "To have or produce resonance"
		}, {
			"resource": "That which is restored to, relied upon, or made available for aid or support"
		}, {
			"respite": "Interval of rest"
		}, {
			"resplendent": "Very bright"
		}, {
			"respondent": "Answering"
		}, {
			"restitution": "Restoration of anything to the one to whom it properly belongs"
		}, {
			"resumption": "The act of taking back, or taking again"
		}, {
			"resurgent": "Surging back or again"
		}, {
			"resurrection": "A return from death to life"
		}, {
			"resuscitate": "To restore from apparent death"
		}, {
			"retaliate": "To repay evil with a similar evil"
		}, {
			"retch": "To make an effort to vomit"
		}, {
			"retention": "The keeping of a thing within one's power or possession"
		}, {
			"reticence": "The quality of habitually keeping silent or being reserved in utterance"
		}, {
			"reticent": "Habitually keeping silent or being reserved in utterance"
		}, {
			"retinue": "The body of persons who attend a person of importance in travel or public appearance"
		}, {
			"retort": "A retaliatory speech"
		}, {
			"retouch": "To modify the details of"
		}, {
			"retrace": "To follow backward or toward the place of beginning, as a track or marking"
		}, {
			"retract": "To recall or take back (something that one has said)"
		}, {
			"retrench": "To cut down or reduce in extent or quantity"
		}, {
			"retrieve": "To recover something by searching"
		}, {
			"retroactive": "Operative on, affecting, or having reference to past events, transactions, responsibilities"
		}, {
			"retrograde": "To cause to deteriorate or to move backward"
		}, {
			"retrogression": "A going or moving backward or in a reverse direction"
		}, {
			"retrospect": "A view or contemplation of something past"
		}, {
			"retrospective": "Looking back on the past"
		}, {
			"reunite": "To unite or join again, as after separation"
		}, {
			"revelation": "A disclosing, discovering, or making known of what was before secret, private, or unknown"
		}, {
			"revere": "To regard with worshipful veneration"
		}, {
			"reverent": "Humble"
		}, {
			"reversion": "A return to or toward some former state or condition"
		}, {
			"revert": "To return, or turn or look back, as toward a former position or the like"
		}, {
			"revile": "To heap approach or abuse upon"
		}, {
			"revisal": "Revision"
		}, {
			"revise": "To examine for the correction of errors, or for the purpose of making changes"
		}, {
			"revocation": "Repeal"
		}, {
			"revoke": "To rescind"
		}, {
			"rhapsody": "Rapt or rapturous utterance"
		}, {
			"rhetoric": "The art of discourse"
		}, {
			"rhetorician": "A showy writer or speaker"
		}, {
			"ribald": "Indulging in or manifesting coarse indecency or obscenity"
		}, {
			"riddance": "The act or ridding or delivering from something undesirable"
		}, {
			"ridicule": "Looks or acts expressing amused contempt"
		}, {
			"ridiculous": "Laughable and contemptible"
		}, {
			"rife": "Abundant"
		}, {
			"righteousness": "Rectitude"
		}, {
			"rightful": "Conformed to a just claim according to established laws or usage"
		}, {
			"rigmarole": "Nonsense"
		}, {
			"rigor": "Inflexibility"
		}, {
			"rigorous": "Uncompromising"
		}, {
			"ripplet": "A small ripple, as of water"
		}, {
			"risible": "capable of exciting laughter"
		}, {
			"rivulet": "A small stream or brook"
		}, {
			"robust": "Characterized by great strength or power of endurance"
		}, {
			"rondo": "A musical composition during which the first part or subject is repeated several times"
		}, {
			"rookery": "A place where crows congregate to breed"
		}, {
			"rotary": "Turning around its axis, like a wheel, or so constructed as to turn thus"
		}, {
			"rotate": "To cause to turn on or as on its axis, as a wheel"
		}, {
			"rote": "Repetition of words or sounds as a means of learning them, with slight attention"
		}, {
			"rotund": "Round from fullness or plumpness"
		}, {
			"rudimentary": "Being in an initial, early, or incomplete stage of development"
		}, {
			"rue": "To regret extremely"
		}, {
			"ruffian": "A lawless or recklessly brutal fellow"
		}, {
			"ruminant": "Chewing the cud"
		}, {
			"ruminate": "To chew over again, as food previously swallowed and regurgitated"
		}, {
			"rupture": "To separate the parts of by violence"
		}, {
			"rustic": "Characteristic of dwelling in the country"
		}, {
			"ruth": "Sorrow for another's misery"
		}, {
			"sacrifice": "To make an offering of to deity, especially by presenting on an altar"
		}, {
			"sacrificial": "Offering or offered as an atonement for sin"
		}, {
			"sacrilege": "The act of violating or profaning anything sacred"
		}, {
			"sacrilegious": "Impious"
		}, {
			"safeguard": "To protect"
		}, {
			"sagacious": "Able to discern and distinguish with wise perception"
		}, {
			"salacious": "Having strong sexual desires"
		}, {
			"salience": "The condition of standing out distinctly"
		}, {
			"salient": "Standing out prominently"
		}, {
			"saline": "Constituting or consisting of salt"
		}, {
			"salutary": "Beneficial"
		}, {
			"salutation": "Any form of greeting, hailing, or welcome, whether by word or act"
		}, {
			"salutatory": "The opening oration at the commencement in American colleges"
		}, {
			"salvage": "Any act of saving property"
		}, {
			"salvo": "A salute given by firing all the guns, as at the funeral of an officer"
		}, {
			"sanctimonious": "Making an ostentatious display or hypocritical pretense of holiness or piety"
		}, {
			"sanction": "To approve authoritatively"
		}, {
			"sanctity": "Holiness"
		}, {
			"sanguinary": "Bloody"
		}, {
			"sanguine": "Having the color of blood"
		}, {
			"sanguineous": "Consisting of blood"
		}, {
			"sapid": "Affecting the sense of taste"
		}, {
			"sapience": "Deep wisdom or knowledge"
		}, {
			"sapient": "Possessing wisdom"
		}, {
			"sapiential": "Possessing wisdom"
		}, {
			"saponaceous": "Having the nature or quality of soap"
		}, {
			"sarcasm": "Cutting and reproachful language"
		}, {
			"sarcophagus": "A stone coffin or a chest-like tomb"
		}, {
			"sardonic": "Scornfully or bitterly sarcastic"
		}, {
			"satiate": "To satisfy fully the appetite or desire of"
		}, {
			"satire": "The employment of sarcasm, irony, or keenness of wit in ridiculing vices"
		}, {
			"satiric": "Resembling poetry, in which vice, incapacity ,or corruption is held up to ridicule"
		}, {
			"satirize": "To treat with sarcasm or derisive wit"
		}, {
			"satyr": "A very lascivious person"
		}, {
			"savage": "A wild and uncivilized human being"
		}, {
			"savor": "To perceive by taste or smell"
		}, {
			"scabbard": "The sheath of a sword or similar bladed weapon"
		}, {
			"scarcity": "Insufficiency of supply for needs or ordinary demands"
		}, {
			"scholarly": "Characteristic of an erudite person"
		}, {
			"scholastic": "Pertaining to education or schools"
		}, {
			"scintilla": "The faintest ray"
		}, {
			"scintillate": "To emit or send forth sparks or little flashes of light"
		}, {
			"scope": "A range of action or view"
		}, {
			"scoundrel": "A man without principle"
		}, {
			"scribble": "Hasty, careless writing"
		}, {
			"scribe": "One who writes or is skilled in writing"
		}, {
			"script": "Writing or handwriting of the ordinary cursive form"
		}, {
			"Scriptural": "Pertaining to, contained in, or warranted by the Holy Scriptures"
		}, {
			"scruple": "Doubt or uncertainty regarding a question of moral right or duty"
		}, {
			"scrupulous": "Cautious in action for fear of doing wrong"
		}, {
			"scurrilous": "Grossly indecent or vulgar"
		}, {
			"scuttle": "To sink (a ship) by making holes in the bottom"
		}, {
			"scythe": "A long curved blade for mowing, reaping, etc"
		}, {
			"seance": "A meeting of spirituals for consulting spirits"
		}, {
			"sear": "To burn on the surface"
		}, {
			"sebaceous": "Pertaining to or appearing like fat"
		}, {
			"secant": "Cutting, especially into two parts"
		}, {
			"secede": "To withdraw from union or association, especially from a political or religious body"
		}, {
			"secession": "Voluntary withdrawal from fellowship, especially from political or religious bodies"
		}, {
			"seclude": "To place, keep, or withdraw from the companionship of others"
		}, {
			"seclusion": "Solitude"
		}, {
			"secondary": "Less important or effective than that which is primary"
		}, {
			"secondly": "In the second place in order or succession"
		}, {
			"second-rate": "Second in quality, size, rank, importance, etc"
		}, {
			"secrecy": "Concealment"
		}, {
			"secretary n. One who attends to correspondence, keeps": "or does other writing for others"
		}, {
			"secretive": "Having a tendency to conceal"
		}, {
			"sedate": "Even-tempered"
		}, {
			"sedentary": "Involving or requiring much sitting"
		}, {
			"sediment": "Matter that settles to the bottom of a liquid"
		}, {
			"sedition": "Conduct directed against public order and the tranquillity of the state"
		}, {
			"seditious": "Promotive of conduct directed against public order and the tranquillity of the state"
		}, {
			"seduce": "To entice to surrender chastity"
		}, {
			"sedulous": "Persevering in effort or endeavor"
		}, {
			"seer": "A prophet"
		}, {
			"seethe": "To be violently excited or agitated"
		}, {
			"seignior": "A title of honor or respectful address, equivalent to sir"
		}, {
			"seismograph": "An instrument for recording the phenomena of earthquakes"
		}, {
			"seize": "To catch or take hold of suddenly and forcibly"
		}, {
			"selective": "Having the power of choice"
		}, {
			"self-respect": "Rational self-esteem"
		}, {
			"semblance": "Outward appearance"
		}, {
			"semicivilized": "Half-civilized"
		}, {
			"semiconscious": "Partially conscious"
		}, {
			"semiannual": "Recurring at intervals of six months"
		}, {
			"semicircle": "A half-circle"
		}, {
			"seminar": "Any assemblage of pupils for real research in some specific study under a teacher"
		}, {
			"seminary": "A special school, as of theology or pedagogics"
		}, {
			"senile": "Peculiar to or proceeding from the weakness or infirmity of old age"
		}, {
			"sensation": "A condition of mind resulting from spiritual or inherent feeling"
		}, {
			"sense": "The signification conveyed by some word, phrase, or action"
		}, {
			"sensibility": "Power to perceive or feel"
		}, {
			"sensitive": "Easily affected by outside operations or influences"
		}, {
			"sensorium": "The sensory apparatus"
		}, {
			"sensual": "Pertaining to the body or the physical senses"
		}, {
			"sensuous": "Having a warm appreciation of the beautiful or of the refinements of luxury"
		}, {
			"sentence": "A related group of words containing a subject and a predicate and expressing a complete thought"
		}, {
			"sentience": "Capacity for sensation or sense-perception"
		}, {
			"sentient": "Possessing the power of sense or sense-perception"
		}, {
			"sentinel": "Any guard or watch stationed for protection"
		}, {
			"separable": "Capable of being disjoined or divided"
		}, {
			"separate": "To take apart"
		}, {
			"separatist": "A seceder"
		}, {
			"septennial": "Recurring every seven years"
		}, {
			"sepulcher": "A burial-place"
		}, {
			"sequacious": "Ready to be led"
		}, {
			"sequel": "That which follows in consequence of what has previously happened"
		}, {
			"sequence": "The order in which a number or persons, things, or events follow one another in space or time"
		}, {
			"sequent": "Following in the order of time"
		}, {
			"sequester": "To cause to withdraw or retire, as from society or public life"
		}, {
			"sequestrate": "To confiscate"
		}, {
			"sergeant": "A non-commissioned military officer ranking next above a corporal"
		}, {
			"sergeant-at-arms": "An executive officer in legislative bodies who enforces the orders of the presiding officer"
		}, {
			"sergeant-major": "The highest non-commissioned officer in a regiment"
		}, {
			"service": "Any work done for the benefit of another"
		}, {
			"serviceable": "Durable"
		}, {
			"servitude": "Slavery"
		}, {
			"severance": "Separation"
		}, {
			"severely": "Extremely"
		}, {
			"sextet": "A band of six singers or players"
		}, {
			"sextuple": "Multiplied by six"
		}, {
			"sheer": "Absolute"
		}, {
			"shiftless": "Wanting in resource, energy, or executive ability"
		}, {
			"shrewd": "Characterized by skill at understanding and profiting by circumstances"
		}, {
			"shriek": "A sharp, shrill outcry or scream, caused by agony or terror"
		}, {
			"shrinkage": "A contraction of any material into less bulk or dimension"
		}, {
			"shrivel": "To draw or be drawn into wrinkles"
		}, {
			"shuffle": "A mixing or changing the order of things"
		}, {
			"sibilance": "A hissing sound"
		}, {
			"sibilant": "Made with a hissing sound"
		}, {
			"sibilate": "To give a hissing sound to, as in pronouncing the letter s"
		}, {
			"sidelong": "Inclining or tending to one side"
		}, {
			"sidereal": "Pertaining to stars or constellations"
		}, {
			"siege": "A beleaguerment"
		}, {
			"significance": "Importance"
		}, {
			"significant": "Important, especially as pointing something out"
		}, {
			"signification": "The meaning conveyed by language, actions, or signs"
		}, {
			"similar": "Bearing resemblance to one another or to something else"
		}, {
			"simile": "A comparison which directs the mind to the representative object itself"
		}, {
			"similitude": "Similarity"
		}, {
			"simplify": "To make less complex or difficult"
		}, {
			"simulate": "Imitate"
		}, {
			"simultaneous": "Occurring, done, or existing at the same time"
		}, {
			"sinecure": "Any position having emoluments with few or no duties"
		}, {
			"singe": "To burn slightly or superficially"
		}, {
			"sinister": "Evil"
		}, {
			"sinuosity": "The quality of curving in and out"
		}, {
			"sinuous": "Curving in and out"
		}, {
			"sinus": "An opening or cavity"
		}, {
			"siren": "A sea-nymph, described by Homer as dwelling between the island of Circe and Scylla"
		}, {
			"sirocco": "hot winds from Africa"
		}, {
			"sisterhood": "A body of sisters united by some bond of sympathy or by a religious vow"
		}, {
			"skeptic": "One who doubts any statements"
		}, {
			"skepticism": "The entertainment of doubt concerning something"
		}, {
			"skiff": "Usually, a small light boat propelled by oars"
		}, {
			"skirmish": "Desultory fighting between advanced detachments of two armies"
		}, {
			"sleight": "A trick or feat so deftly done that the manner of performance escapes observation"
		}, {
			"slight": "Of a small importance or significance"
		}, {
			"slothful": "Lazy"
		}, {
			"sluggard": "A person habitually lazy or idle"
		}, {
			"sociable": "Inclined to seek company"
		}, {
			"socialism": "A theory of civil polity that aims to secure the reconstruction of society"
		}, {
			"socialist": "One who advocates reconstruction of society by collective ownership of land and capital"
		}, {
			"sociology": "The philosophical study of society"
		}, {
			"Sol": "The sun"
		}, {
			"solace": "Comfort in grief, trouble, or calamity"
		}, {
			"solar": "Pertaining to the sun"
		}, {
			"solder": "A fusible alloy used for joining metallic surfaces or margins"
		}, {
			"soldier": "A person engaged in military service"
		}, {
			"solecism": "Any violation of established rules or customs"
		}, {
			"solicitor": "One who represents a client in court of justice; an attorney"
		}, {
			"solicitude": "Uneasiness of mind occasioned by desire, anxiety, or fear"
		}, {
			"soliloquy": "A monologue"
		}, {
			"solstice": "The time of year when the sun is at its greatest declination"
		}, {
			"soluble": "Capable of being dissolved, as in a fluid"
		}, {
			"solvent": "Having sufficient funds to pay all debts"
		}, {
			"somber": "Gloomy"
		}, {
			"somniferous": "Tending to produce sleep"
		}, {
			"somnolence": "Oppressive drowsiness"
		}, {
			"somnolent": "Sleepy"
		}, {
			"sonata": "An instrumental composition"
		}, {
			"sonnet": "A poem of fourteen decasyllabic or octosyllabiclines expressing two successive phrases"
		}, {
			"sonorous": "Resonant"
		}, {
			"soothsayer": "One who claims to have supernatural insight or foresight"
		}, {
			"sophism": "A false argument understood to be such by the reasoner himself and intentionally used to deceive"
		}, {
			"sophistical": "Fallacious"
		}, {
			"sophisticate": "To deprive of simplicity of mind or manner"
		}, {
			"sophistry": "Reasoning sound in appearance only, especially when designedly deceptive"
		}, {
			"soprano": "A woman's or boy's voice of high range"
		}, {
			"sorcery": "Witchcraft"
		}, {
			"sordid": "Of degraded character or nature"
		}, {
			"souvenir": "A token of remembrance"
		}, {
			"sparse": "Thinly diffused"
		}, {
			"Spartan": "Exceptionally brave; rigorously severe"
		}, {
			"spasmodic": "Convulsive"
		}, {
			"specialize": "To assume an individual or specific character, or adopt a singular or special course"
		}, {
			"specialty": "An employment limited to one particular line of work"
		}, {
			"specie": "A coin or coins of gold, silver, copper, or other metal"
		}, {
			"species": "A classificatory group of animals or plants subordinate to a genus"
		}, {
			"specimen": "One of a class of persons or things regarded as representative of the class"
		}, {
			"specious": "Plausible"
		}, {
			"spectator": "One who beholds or looks on"
		}, {
			"specter": "Apparition"
		}, {
			"spectrum": "An image formed by rays of light or other radiant energy"
		}, {
			"speculate": "To pursue inquiries and form conjectures"
		}, {
			"speculator": "One who makes an investment that involves a risk of loss, but also a chance of profit"
		}, {
			"sphericity": "The state or condition of being a sphere"
		}, {
			"spheroid": "A body having nearly the form of a sphere"
		}, {
			"spherometer": "An instrument for measuring curvature or radii of spherical surfaces"
		}, {
			"spinous": "Having spines"
		}, {
			"spinster": "A woman who has never been married"
		}, {
			"spontaneous": "Arising from inherent qualities or tendencies without external efficient cause"
		}, {
			"sprightly": "Vivacious"
		}, {
			"spurious": "Not genuine"
		}, {
			"squabble": "To quarrel"
		}, {
			"squalid": "Having a dirty, mean, poverty-stricken appearance"
		}, {
			"squatter": "One who settles on land without permission or right"
		}, {
			"stagnant": "Not flowing: said of water, as in a pool"
		}, {
			"stagnate": "To become dull or inert"
		}, {
			"stagnation": "The condition of not flowing or not changing"
		}, {
			"stagy": "Having a theatrical manner"
		}, {
			"staid": "Of a steady and sober character"
		}, {
			"stallion": "An uncastrated male horse, commonly one kept for breeding"
		}, {
			"stanchion": "A vertical bar, or a pair of bars, used to confine cattle in a stall"
		}, {
			"stanza": "A group of rimed lines, usually forming one of a series of similar divisions in a poem"
		}, {
			"statecraft": "The art of conducting state affairs"
		}, {
			"static": "Pertaining to or designating bodies at rest or forces in equilibrium"
		}, {
			"statics": "The branch of mechanics that treats of the relations that subsist among forces in order"
		}, {
			"stationary": "Not moving"
		}, {
			"statistician": "One who is skilled in collecting and tabulating numerical facts"
		}, {
			"statuesque": "Having the grace, pose, or quietude of a statue"
		}, {
			"statuette": "A figurine"
		}, {
			"stature": "The natural height of an animal body"
		}, {
			"statute": "Any authoritatively declared rule, ordinance, decree, or law"
		}, {
			"stealth": "A concealed manner of acting"
		}, {
			"stellar": "Pertaining to the stars"
		}, {
			"steppe": "One of the extensive plains in Russia and Siberia"
		}, {
			"sterling": "Genuine"
		}, {
			"stifle": "To smother"
		}, {
			"stigma": "A mark of infamy or token of disgrace attaching to a person as the result of evil-doing"
		}, {
			"stiletto": "A small dagger"
		}, {
			"stimulant": "Anything that rouses to activity or to quickened action"
		}, {
			"stimulate": "To rouse to activity or to quickened action"
		}, {
			"stimulus": "Incentive"
		}, {
			"stingy": "Cheap, unwilling to spend money"
		}, {
			"stipend": "A definite amount paid at stated periods in compensation for services or as an allowance"
		}, {
			"Stoicism": "The principles or the practice of the Stoics-being very even tempered in success and failure"
		}, {
			"stolid": "Expressing no power of feeling or perceiving"
		}, {
			"strait": "A narrow passage of water connecting two larger bodies of water"
		}, {
			"stratagem": "Any clever trick or device for obtaining an advantage"
		}, {
			"stratum": "A natural or artificial layer, bed, or thickness of any substance or material"
		}, {
			"streamlet": "Rivulet"
		}, {
			"stringency": "Strictness"
		}, {
			"stringent": "Rigid"
		}, {
			"stripling": "A mere youth"
		}, {
			"studious": "Having or showing devotion to the acquisition of knowledge"
		}, {
			"stultify": "To give an appearance of foolishness to"
		}, {
			"stupendous": "Of prodigious size, bulk, or degree"
		}, {
			"stupor": "Profound lethargy"
		}, {
			"suasion": "The act of persuading"
		}, {
			"suave": "Smooth and pleasant in manner"
		}, {
			"subacid": "Somewhat sharp or biting"
		}, {
			"subaquatic": "Being, formed, or operating under water"
		}, {
			"subconscious": "Being or occurring in the mind, but without attendant consciousness or conscious perception"
		}, {
			"subjacent": "Situated directly underneath"
		}, {
			"subjection": "The act of bringing into a state of submission"
		}, {
			"subjugate": "To conquer"
		}, {
			"subliminal": "Being beneath the threshold of consciousness"
		}, {
			"sublingual": "Situated beneath the tongue"
		}, {
			"submarine": "Existing, done, or operating beneath the surface of the sea"
		}, {
			"submerge": "To place or plunge under water"
		}, {
			"submergence": "The act of submerging"
		}, {
			"submersible": "Capable of being put underwater"
		}, {
			"submersion": "The act of submerging"
		}, {
			"submission": "A yielding to the power or authority of another"
		}, {
			"submittal": "The act of submitting"
		}, {
			"subordinate": "Belonging to an inferior order in a classification"
		}, {
			"subsequent": "Following in time"
		}, {
			"subservience": "The quality, character, or condition of being servilely following another's behests"
		}, {
			"subservient": "Servilely following another's behests"
		}, {
			"subside": "To relapse into a state of repose and tranquillity"
		}, {
			"subsist": "To be maintained or sustained"
		}, {
			"subsistence": "Sustenance"
		}, {
			"substantive": "Solid"
		}, {
			"subtend": "To extend opposite to"
		}, {
			"subterfuge": "Evasion"
		}, {
			"subterranean": "Situated or occurring below the surface of the earth"
		}, {
			"subtle": "Discriminating"
		}, {
			"subtrahend": "That which is to be subtracted"
		}, {
			"subversion": "An overthrow, as from the foundation"
		}, {
			"subvert": "To bring to ruin"
		}, {
			"succeed": "To accomplish what is attempted or intended"
		}, {
			"success": "A favorable or prosperous course or termination of anything attempted"
		}, {
			"successful": "Having reached a high degree of worldly prosperity"
		}, {
			"successor": "One who or that which takes the place of a predecessor or preceding thing"
		}, {
			"succinct": "Concise"
		}, {
			"succulent": "Juicy"
		}, {
			"succumb": "To cease to resist"
		}, {
			"sufferance": "Toleration"
		}, {
			"sufficiency": "An ample or adequate supply"
		}, {
			"suffrage": "The right or privilege of voting"
		}, {
			"suffuse": "To cover or fill the surface of"
		}, {
			"suggestible": "That can be suggested"
		}, {
			"suggestive": "Stimulating to thought or reflection"
		}, {
			"summary": "An abstract"
		}, {
			"sumptuous": "Rich and costly"
		}, {
			"superabundance": "An excessive amount"
		}, {
			"superadd": "To add in addition to what has been added"
		}, {
			"superannuate": "To become deteriorated or incapacitated by long service"
		}, {
			"superb": "Sumptuously elegant"
		}, {
			"supercilious": "Exhibiting haughty and careless contempt"
		}, {
			"superficial": "Knowing and understanding only the ordinary and the obvious"
		}, {
			"superfluity": "That part of anything that is in excess of what is needed"
		}, {
			"superfluous": "Being more than is needed"
		}, {
			"superheat": "To heat to excess"
		}, {
			"superintend": "To have the charge and direction of, especially of some work or movement"
		}, {
			"superintendence": "Direction and management"
		}, {
			"superintendent": "One who has the charge and direction of, especially of some work or movement"
		}, {
			"superlative": "That which is of the highest possible excellence or eminence"
		}, {
			"supernatural": "Caused miraculously or by the immediate exercise of divine power"
		}, {
			"supernumerary": "Superfluous"
		}, {
			"supersede": "To displace"
		}, {
			"supine": "Lying on the back"
		}, {
			"supplant": "To take the place of"
		}, {
			"supple": "Easily bent"
		}, {
			"supplementary": "Being an addition to"
		}, {
			"supplicant": "One who asks humbly and earnestly"
		}, {
			"supplicate": "To beg"
		}, {
			"supposition": "Conjecture"
		}, {
			"suppress": "To prevent from being disclosed or punished"
		}, {
			"suppressible": "Capable of being suppressed"
		}, {
			"suppression": "A forcible putting or keeping down"
		}, {
			"supramundane": "Supernatural"
		}, {
			"surcharge": "An additional amount charged"
		}, {
			"surety": "Security for payment or performance"
		}, {
			"surfeit": "To feed to fullness or to satiety"
		}, {
			"surmise": "To conjecture"
		}, {
			"surmount": "To overcome by force of will"
		}, {
			"surreptitious": "Clandestine"
		}, {
			"surrogate": "One who or that which is substituted for or appointed to act in place of another"
		}, {
			"surround": "To encircle"
		}, {
			"surveyor": "A land-measurer"
		}, {
			"susceptibility": "A specific capability of feeling or emotion"
		}, {
			"susceptible": "Easily under a specified power or influence"
		}, {
			"suspense": "Uncertainty"
		}, {
			"suspension": "A hanging from a support"
		}, {
			"suspicious": "Inclined to doubt or mistrust"
		}, {
			"sustenance": "Food"
		}, {
			"swarthy": "Having a dark hue, especially a dark or sunburned complexion"
		}, {
			"Sybarite": "A luxurious person"
		}, {
			"sycophant": "A servile flatterer, especially of those in authority or influence"
		}, {
			"syllabic": "Consisting of that which is uttered in a single vocal impulse"
		}, {
			"syllabication": "Division of words into that which is uttered in a single vocal impulse"
		}, {
			"syllable": "That which is uttered in a single vocal impulse"
		}, {
			"syllabus": "Outline of a subject, course, lecture, or treatise"
		}, {
			"sylph": "A slender, graceful young woman or girl"
		}, {
			"symmetrical": "Well-balanced"
		}, {
			"symmetry": "Relative proportion and harmony"
		}, {
			"sympathetic": "Having a fellow-feeling for or like feelings with another or others"
		}, {
			"sympathize": "To share the sentiments or mental states of another"
		}, {
			"symphonic": "Characterized by a harmonious or agreeable mingling of sounds"
		}, {
			"symphonious": "Marked by a harmonious or agreeable mingling of sounds"
		}, {
			"symphony": "A harmonious or agreeable mingling of sounds"
		}, {
			"synchronism": "Simultaneousness"
		}, {
			"syndicate": "An association of individuals united for the prosecution of some enterprise"
		}, {
			"syneresis": "The coalescence of two vowels or syllables, as e'er for ever"
		}, {
			"synod": "An ecclesiastical council"
		}, {
			"synonym": "A word having the same or almost the same meaning as some other"
		}, {
			"synopsis": "A syllabus or summary"
		}, {
			"systematic": "Methodical"
		}, {
			"tableau": "An arrangement of inanimate figures representing a scene from real life"
		}, {
			"tacit": "Understood"
		}, {
			"taciturn": "Disinclined to conversation"
		}, {
			"tack": "A small sharp-pointed nail"
		}, {
			"tact": "Fine or ready mental discernment shown in saying or doing the proper thing"
		}, {
			"tactician": "One who directs affairs with skill and shrewdness"
		}, {
			"tactics": "Any maneuvering or adroit management for effecting an object"
		}, {
			"tangency": "The state of touching"
		}, {
			"tangent": "Touching"
		}, {
			"tangible": "Perceptible by touch"
		}, {
			"tannery": "A place where leather is tanned"
		}, {
			"tantalize": "To tease"
		}, {
			"tantamount": "Having equal or equivalent value, effect, or import"
		}, {
			"tapestry": "A fabric to which a pattern is applied with a needle, designed for ornamental hangings"
		}, {
			"tarnish": "To lessen or destroy the luster of in any way"
		}, {
			"taut": "Stretched tight"
		}, {
			"taxation": "A levy, by government, of a fixed contribution"
		}, {
			"taxidermy": "The art or process of preserving dead animals or parts of them"
		}, {
			"technic": "Technical"
		}, {
			"technicality": "Something peculiar to a particular art, trade, or the like"
		}, {
			"technique": "Manner of performance"
		}, {
			"technography": "The scientific description or study of human arts and industries in their historic development"
		}, {
			"technology": "The knowledge relating to industries and manufactures"
		}, {
			"teem": "To be full to overflowing"
		}, {
			"telepathy": "Thought-transference"
		}, {
			"telephony": "The art or process of communicating by telephone"
		}, {
			"telescope": "To drive together so that one slides into the another like the sections of a spy-glass"
		}, {
			"telltale": "That gives warning or information"
		}, {
			"temerity": "Recklessness"
		}, {
			"temporal": "Pertaining to or concerned with the affairs of the present life"
		}, {
			"temporary": "Lasting for a short time only"
		}, {
			"temporize": "To pursue a policy of delay"
		}, {
			"tempt": "To offer to (somebody) an inducement to do wrong"
		}, {
			"tempter": "An allurer or enticer to evil"
		}, {
			"tenacious": "Unyielding"
		}, {
			"tenant": "An occupant"
		}, {
			"tendency": "Direction or inclination, as toward some objector end"
		}, {
			"tenet": "Any opinion, principle, dogma, or doctrine that a person believes or maintains as true"
		}, {
			"tenor": "A settled course or manner of progress"
		}, {
			"tense": "Strained to stiffness"
		}, {
			"tentative": "Done as an experiment"
		}, {
			"tenure": "The term during which a thing is held"
		}, {
			"tercentenary": "Pertaining to a period of 300 years"
		}, {
			"termagant": "Violently abusive and quarrelsome"
		}, {
			"terminal": "Pertaining to or creative of a boundary, limit"
		}, {
			"terminate": "To put an end or stop to"
		}, {
			"termination": "The act of ending or concluding"
		}, {
			"terminus": "The final point or goal"
		}, {
			"terrify": "To fill with extreme fear"
		}, {
			"territorial": "Pertaining to the domain over which a sovereign state exercises jurisdiction"
		}, {
			"terse": "Pithy"
		}, {
			"testament": "A will"
		}, {
			"testator": "The maker of a will"
		}, {
			"testimonial": "A formal token of regard, often presented in public"
		}, {
			"thearchy": "Government by a supreme deity"
		}, {
			"theism": "Belief in God"
		}, {
			"theocracy": "A government administered by ecclesiastics"
		}, {
			"theocrasy": "The mixed worship of polytheism"
		}, {
			"theologian": "A professor of divinity"
		}, {
			"theological": "Based on or growing out of divine revelation"
		}, {
			"theology": "The branch of theological science that treats of God"
		}, {
			"theoretical": "Directed toward knowledge for its own sake without respect to applications"
		}, {
			"theorist": "One given to speculating"
		}, {
			"theorize": "To speculate"
		}, {
			"thereabout": "Near that number, quantity, degree, place, or time, approximately"
		}, {
			"therefor": "For that or this"
		}, {
			"thermal": "Of or pertaining to heat"
		}, {
			"thermoelectric": "Denoting electricity produced by heat"
		}, {
			"thermoelectricity": "Electricity generated by differences of temperature,"
		}, {
			"thesis": "An essay or treatise on a particular subject"
		}, {
			"thoroughbred": "Bred from the best or purest blood or stock"
		}, {
			"thoroughfare": "A public street or road"
		}, {
			"thrall": "One controlled by an appetite or a passion"
		}, {
			"tilth": "Cultivation"
		}, {
			"timbre": "The quality of a tone, as distinguished from intensity and pitch"
		}, {
			"timorous": "Lacking courage"
		}, {
			"tincture": "A solution, usually alcoholic, of some principle used in medicine"
		}, {
			"tinge": "A faint trace of color"
		}, {
			"tipsy": "Befuddled with drinks"
		}, {
			"tirade": "Harangue"
		}, {
			"tireless": "Untiring"
		}, {
			"tiresome": "Wearisome"
		}, {
			"Titanic": "Of vast size or strength"
		}, {
			"toilsome": "Laborious"
		}, {
			"tolerable": "Moderately good"
		}, {
			"tolerance": "Forbearance in judging of the acts or opinions of others"
		}, {
			"tolerant": "Indulgent"
		}, {
			"tolerate": "To passively permit or put up with"
		}, {
			"toleration": "A spirit of charitable leniency"
		}, {
			"topography": "The art of representing on a map the physical features of any locality or region with accuracy"
		}, {
			"torpor": "Apathy"
		}, {
			"torrid": "Excessively hot"
		}, {
			"tortious": "Wrongful"
		}, {
			"tortuous": "Abounding in irregular bends or turns"
		}, {
			"torturous": "Marked by extreme suffering"
		}, {
			"tractable": "Easily led or controlled"
		}, {
			"trait": "A distinguishing feature or quality"
		}, {
			"trajectory": "The path described by a projectile moving under given forces"
		}, {
			"trammel": "An impediment"
		}, {
			"tranquil": "Calm"
		}, {
			"tranquilize": "To soothe"
		}, {
			"tranquility": "Calmness"
		}, {
			"transalpine": "Situated on the other side of the Alps"
		}, {
			"transact": "To do business"
		}, {
			"transatlantic": "Situated beyond or on the other side of the Atlantic"
		}, {
			"transcend": "To surpass"
		}, {
			"transcendent": "Surpassing"
		}, {
			"transcontinental": "Extending or passing across a continent"
		}, {
			"transcribe": "To write over again (something already written)"
		}, {
			"transcript": "A copy made directly from an original"
		}, {
			"transfer": "To convey, remove, or cause to pass from one person or place to another"
		}, {
			"transferable": "Capable of being conveyed from one person or place to another"
		}, {
			"transferee": "The person to whom a transfer is made"
		}, {
			"transference": "The act of conveying from one person or place to another"
		}, {
			"transferrer": "One who or that which conveys from one person or place to another"
		}, {
			"transfigure": "To give an exalted meaning or glorified appearance to"
		}, {
			"transfuse": "To pour or cause to pass, as a fluid, from one vessel to another"
		}, {
			"transfusible": "Capable of being poured from one vessel to another"
		}, {
			"transfusion": "The act of pouring from one vessel to another"
		}, {
			"transgress": "To break a law"
		}, {
			"transience": "Something that is of short duration"
		}, {
			"transient": "One who or that which is only of temporary existence"
		}, {
			"transition": "Passage from one place, condition, or action to another"
		}, {
			"transitory": "Existing for a short time only"
		}, {
			"translate": "To give the sense or equivalent of in another language or dialect"
		}, {
			"translator": "An interpreter"
		}, {
			"translucence": "The property or state of allowing the passage of light"
		}, {
			"translucent": "Allowing the passage of light"
		}, {
			"transmissible": "That may e sent through or across"
		}, {
			"transmission": "The act of sending through or across"
		}, {
			"transmit": "To send trough or across"
		}, {
			"transmute": "To change in nature, substance, or form"
		}, {
			"transparent": "Easy to see through or understand"
		}, {
			"transpire": "To come to pass"
		}, {
			"transplant": "To remove and plant in another place"
		}, {
			"transposition": "The act of reversing the order or changing the place of"
		}, {
			"transverse": "Lying or being across or in a crosswise direction"
		}, {
			"travail": "Hard or agonizing labor"
		}, {
			"travesty": "A grotesque imitation"
		}, {
			"treacherous": "Perfidious"
		}, {
			"treachery": "Violation of allegiance, confidence, or plighted faith"
		}, {
			"treasonable": "Of the nature of betrayal, treachery, or breech of allegiance"
		}, {
			"treatise": "An elaborate literary composition presenting a subject in all its parts"
		}, {
			"treble": "Multiplied by three"
		}, {
			"trebly": "Triply"
		}, {
			"tremendous": "Awe-inspiring"
		}, {
			"tremor": "An involuntary trembling or shivering"
		}, {
			"tremulous": "Characterized by quivering or unsteadiness"
		}, {
			"trenchant": "Cutting deeply and quickly"
		}, {
			"trepidation": "Nervous uncertainty of feeling"
		}, {
			"trestle": "An open braced framework for supporting the horizontal stringers of a railway-bridge"
		}, {
			"triad": "A group of three persons of things"
		}, {
			"tribune": "Any champion of the rights and liberties of the people: often used as the name for a newspaper"
		}, {
			"trickery": "Artifice"
		}, {
			"tricolor": "Of three colors"
		}, {
			"tricycle": "A three-wheeled vehicle"
		}, {
			"trident": "The three-pronged fork that was the emblem of Neptune"
		}, {
			"triennial": "Taking place every third year"
		}, {
			"trimness": "Neatness"
		}, {
			"trinity": "A threefold personality existing in the one divine being or substance"
		}, {
			"trio": "Three things grouped or associated together"
		}, {
			"triple": "Threefold"
		}, {
			"triplicate": "Composed of or pertaining to three related things or parts"
		}, {
			"triplicity": "The state of being triple or threefold"
		}, {
			"tripod": "A three-legged stand, usually hinged near the top, for supporting some instrument"
		}, {
			"trisect": "To divide into three parts, especially into three equal parts"
		}, {
			"trite": "Made commonplace by frequent repetition"
		}, {
			"triumvir": "One of three men united coordinately in public office or authority"
		}, {
			"trivial": "Of little importance or value"
		}, {
			"troublesome": "Burdensome"
		}, {
			"truculence": "Ferocity"
		}, {
			"truculent": "Having the character or the spirit of a savage"
		}, {
			"truism": "A statement so plainly true as hardly to require statement or proof"
		}, {
			"truthful": "Veracious"
		}, {
			"turgid": "Swollen"
		}, {
			"turpitude": "Depravity"
		}, {
			"tutelage": "The act of training or the state of being under instruction"
		}, {
			"tutelar": "Protective"
		}, {
			"tutorship": "The office of a guardian"
		}, {
			"twinge": "A darting momentary local pain"
		}, {
			"typical": "Characteristic"
		}, {
			"typify": "To serve as a characteristic example of"
		}, {
			"typographical": "Pertaining to typography or printing"
		}, {
			"typography": "The arrangement of composed type, or the appearance of printed matter"
		}, {
			"tyrannical": "Despotic"
		}, {
			"tyranny": "Absolute power arbitrarily or unjustly administrated"
		}, {
			"tyro": "One slightly skilled in or acquainted with any trade or profession"
		}, {
			"ubiquitous": "Being present everywhere"
		}, {
			"ulterior": "Not so pertinent as something else to the matter spoken of"
		}, {
			"ultimate": "Beyond which there is nothing else"
		}, {
			"ultimatum": "A final statement or proposal, as concerning terms or conditions"
		}, {
			"ultramundane": "Pertaining to supernatural things or to another life"
		}, {
			"ultramontane": "Beyond the mountains, especially beyond the Alps (that is, on their Italian side)"
		}, {
			"umbrage": "A sense of injury"
		}, {
			"unaccountable": "Inexplicable"
		}, {
			"unaffected": "Sincere"
		}, {
			"unanimous": "Sharing the same views or sentiments"
		}, {
			"unanimity": "The state or quality of being of one mind"
		}, {
			"unavoidable": "Inevitable"
		}, {
			"unbearable": "Unendurable"
		}, {
			"unbecoming": "Unsuited to the wearer, place, or surroundings"
		}, {
			"unbelief": "Doubt"
		}, {
			"unbiased": "Impartial, as judgment"
		}, {
			"unbridled": "Being without restraint"
		}, {
			"uncommon": "Rare"
		}, {
			"unconscionable": "Ridiculously or unjustly excessive"
		}, {
			"unconscious": "Not cognizant of objects, actions, etc"
		}, {
			"unction": "The art of anointing as with oil"
		}, {
			"unctuous": "Oily"
		}, {
			"undeceive": "To free from deception, as by apprising of the real state of affairs"
		}, {
			"undercharge": "To make an inadequate charge for"
		}, {
			"underexposed": "Insufficiently exposed for proper or full development, as negatives in photography"
		}, {
			"undergarment": "A garment to be worn under the ordinary outer garments"
		}, {
			"underman": "To equip with less than the full complement of men"
		}, {
			"undersell": "To sell at a lower price than"
		}, {
			"undersized": "Of less than the customary size"
		}, {
			"underhanded": "Clandestinely carried on"
		}, {
			"underlie": "To be the ground or support of"
		}, {
			"underling": "A subordinate"
		}, {
			"undermine": "To subvert in an underhand way"
		}, {
			"underrate": "To undervalue"
		}, {
			"understate": "To fail to put strongly enough, as a case"
		}, {
			"undervalue": "To underestimate"
		}, {
			"underworld": "Hades"
		}, {
			"underwrite": "To issue or be party to the issue of a policy of insurance"
		}, {
			"undue": "More than sufficient"
		}, {
			"undulate": "To move like a wave or in waves"
		}, {
			"undulous": "Resembling waves"
		}, {
			"unfavorable": "Adverse"
		}, {
			"ungainly": "Clumsy"
		}, {
			"unguent": "Any ointment or lubricant for local application"
		}, {
			"unicellular": "Consisting of a single cell"
		}, {
			"univalence": "Monovalency"
		}, {
			"unify": "To cause to be one"
		}, {
			"unique": "Being the only one of its kind"
		}, {
			"unison": "A condition of perfect agreement and accord"
		}, {
			"unisonant": "Being in a condition of perfect agreement and accord"
		}, {
			"Unitarian": "Pertaining to a religious body that rejects the doctrine of the Trinity"
		}, {
			"unlawful": "Illegal"
		}, {
			"unlimited": "Unconstrained"
		}, {
			"unnatural": "Artificial"
		}, {
			"unnecessary": "Not essential under the circumstances"
		}, {
			"unsettle": "To put into confusion"
		}, {
			"unsophisticated": "Showing inexperience"
		}, {
			"unspeakable": "Abominable"
		}, {
			"untimely": "Unseasonable"
		}, {
			"untoward": "Causing annoyance or hindrance"
		}, {
			"unutterable": "Inexpressible"
		}, {
			"unwieldy": "Moved or managed with difficulty, as from great size or awkward shape"
		}, {
			"unwise": "Foolish"
		}, {
			"unyoke": "To separate"
		}, {
			"up-keep": "Maintenance"
		}, {
			"upbraid": "To reproach as deserving blame"
		}, {
			"upcast": "A throwing upward"
		}, {
			"upheaval": "Overthrow or violent disturbance of established order or condition"
		}, {
			"upheave": "To raise or lift with effort"
		}, {
			"uppermost": "First in order of precedence"
		}, {
			"uproarious": "Noisy"
		}, {
			"uproot": "To eradicate"
		}, {
			"upturn": "To throw into confusion"
		}, {
			"urban": "Of, or pertaining to, or like a city"
		}, {
			"urbanity": "Refined or elegant courtesy"
		}, {
			"urchin": "A roguish, mischievous boy"
		}, {
			"urgency": "The pressure of necessity"
		}, {
			"usage": "Treatment"
		}, {
			"usurious": "Taking unlawful or exorbitant interest on money loaned"
		}, {
			"usurp": "To take possession of by force"
		}, {
			"usury": "The demanding for the use of money as a loan, a rate of interest beyond what is allowed by law"
		}, {
			"utilitarianism": "The ethical doctrine that actions are right because they are useful or of beneficial tendency"
		}, {
			"utility": "Fitness for some desirable practical purpose"
		}, {
			"utmost": "The greatest possible extent"
		}, {
			"vacate": "To leave"
		}, {
			"vaccinate": "To inoculate with vaccine virus or virus of cowpox"
		}, {
			"vacillate": "To waver"
		}, {
			"vacuous": "Empty"
		}, {
			"vacuum": "A space entirely devoid of matter"
		}, {
			"vagabond": "A wanderer"
		}, {
			"vagrant": "An idle wanderer"
		}, {
			"vainglory": "Excessive, pretentious, and demonstrative vanity"
		}, {
			"vale": "Level or low land between hills"
		}, {
			"valediction": "A bidding farewell"
		}, {
			"valedictorian": "Student who delivers an address at graduating exercises of an educational institution"
		}, {
			"valedictory": "A parting address"
		}, {
			"valid": "Founded on truth"
		}, {
			"valorous": "Courageous"
		}, {
			"vapid": "Having lost sparkling quality and flavor"
		}, {
			"vaporizer": "An atomizer"
		}, {
			"variable": "Having a tendency to change"
		}, {
			"variance": "Change"
		}, {
			"variant": "A thing that differs from another in form only, being the same in essence or substance"
		}, {
			"variation": "Modification"
		}, {
			"variegate": "To mark with different shades or colors"
		}, {
			"vassal": "A slave or bondman"
		}, {
			"vaudeville": "A variety show"
		}, {
			"vegetal": "Of or pertaining to plants"
		}, {
			"vegetarian": "One who believes in the theory that man's food should be exclusively vegetable"
		}, {
			"vegetate": "To live in a monotonous, passive way without exercise of the mental faculties"
		}, {
			"vegetation": "Plant-life in the aggregate"
		}, {
			"vegetative": "Pertaining to the process of plant-life"
		}, {
			"vehement": "Very eager or urgent"
		}, {
			"velocity": "Rapid motion"
		}, {
			"velvety": "Marked by lightness and softness"
		}, {
			"venal": "Mercenary, corrupt"
		}, {
			"vendible": "Marketable"
		}, {
			"vendition": "The act of selling"
		}, {
			"vendor": "A seller"
		}, {
			"veneer": "Outside show or elegance"
		}, {
			"venerable": "Meriting or commanding high esteem"
		}, {
			"venerate": "To cherish reverentially"
		}, {
			"venereal": "Pertaining to or proceeding from sexual intercourse"
		}, {
			"venial": "That may be pardoned or forgiven, a forgivable sin"
		}, {
			"venison": "The flesh of deer"
		}, {
			"venom": "The poisonous fluid that certain animals secrete"
		}, {
			"venous": "Of, pertaining to, or contained or carried in a vein or veins"
		}, {
			"veracious": "Habitually disposed to speak the truth"
		}, {
			"veracity": "Truthfulness"
		}, {
			"verbatim": "Word for word"
		}, {
			"verbiage": "Use of many words without necessity"
		}, {
			"verbose": "Wordy"
		}, {
			"verdant": "Green with vegetation"
		}, {
			"verification": "The act of proving to be true, exact, or accurate"
		}, {
			"verify": "To prove to be true, exact, or accurate"
		}, {
			"verily": "In truth"
		}, {
			"verity": "Truth"
		}, {
			"vermin": "A noxious or troublesome animal"
		}, {
			"vernacular": "The language of one's country"
		}, {
			"vernal": "Belonging to or suggestive of the spring"
		}, {
			"versatile": "Having an aptitude for applying oneself to new and varied tasks or to various subjects"
		}, {
			"version": "A description or report of something as modified by one's character or opinion"
		}, {
			"vertex": "Apex"
		}, {
			"vertical": "Lying or directed perpendicularly to the horizon"
		}, {
			"vertigo": "Dizziness"
		}, {
			"vestige": "A visible trace, mark, or impression, of something absent, lost, or gone"
		}, {
			"vestment": "Clothing or covering"
		}, {
			"veto": "The constitutional right in a chief executive of refusing to approve an enactment"
		}, {
			"vicarious": "Suffered or done in place of or for the sake of another"
		}, {
			"viceroy": "A ruler acting with royal authority in place of the sovereign in a colony or province"
		}, {
			"vicissitude": "A change, especially a complete change, of condition or circumstances, as of fortune"
		}, {
			"vie": "To contend"
		}, {
			"vigilance": "Alert and intent mental watchfulness in guarding against danger"
		}, {
			"vigilant": "Being on the alert to discover and ward off danger or insure safety"
		}, {
			"vignette": "A picture having a background or that is shaded off gradually"
		}, {
			"vincible": "Conquerable"
		}, {
			"vindicate": "To prove true, right, or real"
		}, {
			"vindicatory": "Punitive"
		}, {
			"vindicative": "Revengeful"
		}, {
			"vinery": "A greenhouse for grapes"
		}, {
			"viol": "A stringed instrument of the violin class"
		}, {
			"viola": "A musical instrument somewhat larger than a violin"
		}, {
			"violator": "One who transgresses"
		}, {
			"violation": "Infringement"
		}, {
			"violoncello": "A stringed instrument held between the player's knees"
		}, {
			"virago": "A bold, impudent, turbulent woman"
		}, {
			"virile": "Masculine"
		}, {
			"virtu": "Rare, curious, or beautiful quality"
		}, {
			"virtual": "Being in essence or effect, but not in form or appearance"
		}, {
			"virtuoso": "A master in the technique of some particular fine art"
		}, {
			"virulence": "Extreme poisonousness"
		}, {
			"virulent": "Exceedingly noxious or deleterious"
		}, {
			"visage": "The face, countenance, or look of a person"
		}, {
			"viscount": "In England, a title of nobility, ranking fourth in the order of British peerage"
		}, {
			"vista": "A view or prospect"
		}, {
			"visual": "Perceptible by sight"
		}, {
			"visualize": "To give pictorial vividness to a mental representation"
		}, {
			"vitality": "The state or quality of being necessary to existence or continuance"
		}, {
			"vitalize": "To endow with life or energy"
		}, {
			"vitiate": "To contaminate"
		}, {
			"vituperable": "Deserving of censure"
		}, {
			"vivacity": "Liveliness"
		}, {
			"vivify": "To endue with life"
		}, {
			"vivisection": "The dissection of a living animal"
		}, {
			"vocable": "a word, especially one regarded in relation merely to its qualities of sound"
		}, {
			"vocative": "Of or pertaining to the act of calling"
		}, {
			"vociferance": "The quality of making a clamor"
		}, {
			"vociferate": "To utter with a loud and vehement voice"
		}, {
			"vociferous": "Making a loud outcry"
		}, {
			"vogue": "The prevalent way or fashion"
		}, {
			"volant": "Flying or able to fly"
		}, {
			"volatile": "Changeable"
		}, {
			"volition": "An act or exercise of will"
		}, {
			"volitive": "Exercising the will"
		}, {
			"voluble": "Having great fluency in speaking"
		}, {
			"voluptuous": "having fullness of beautiful form, as a woman, with or without sensuous or sensual quality"
		}, {
			"voracious": "Eating with greediness or in very large quantities"
		}, {
			"vortex": "A mass of rotating or whirling fluid, especially when sucked spirally toward the center"
		}, {
			"votary": "Consecrated by a vow or promise"
		}, {
			"votive": "Dedicated by a vow"
		}, {
			"vulgarity": "Lack of refinement in conduct or speech"
		}, {
			"vulnerable": "Capable of receiving injuries"
		}, {
			"waif": "A homeless, neglected wanderer"
		}, {
			"waistcoat": "A vest"
		}, {
			"waive": "To relinquish, especially temporarily, as a right or claim"
		}, {
			"wampum": "Beads strung on threads, formerly used among the American Indians as currency"
		}, {
			"wane": "To diminish in size and brilliancy"
		}, {
			"wantonness": "Recklessness"
		}, {
			"warlike": "Belligerent"
		}, {
			"wavelet": "A ripple"
		}, {
			"weak-kneed": "Without resolute purpose or energy"
		}, {
			"weal": "Well-being"
		}, {
			"wean": "To transfer (the young) from dependence on mother's milk to another form of nourishment"
		}, {
			"wearisome": "Fatiguing"
		}, {
			"wee": "Very small"
		}, {
			"well-bred": "Of good ancestry"
		}, {
			"well-doer": "A performer of moral and social duties"
		}, {
			"well-to-do": "In prosperous circumstances"
		}, {
			"whereabouts": "The place in or near which a person or thing is"
		}, {
			"whereupon": "After which"
		}, {
			"wherever": "In or at whatever place"
		}, {
			"wherewith": "The necessary means or resources"
		}, {
			"whet": "To make more keen or eager"
		}, {
			"whimsical": "Capricious"
		}, {
			"whine": "To utter with complaining tone"
		}, {
			"wholly": "Completely"
		}, {
			"wield": "To use, control, or manage, as a weapon, or instrument, especially with full command"
		}, {
			"wile": "An act or a means of cunning deception"
		}, {
			"winsome": "Attractive"
		}, {
			"wintry": "Lacking warmth of manner"
		}, {
			"wiry": "Thin, but tough and sinewy"
		}, {
			"witchcraft": "Sorcery"
		}, {
			"witless": "Foolish, indiscreet, or silly"
		}, {
			"witling": "A person who has little understanding"
		}, {
			"witticism": "A witty, brilliant, or original saying or sentiment"
		}, {
			"wittingly": "With knowledge and by design"
		}, {
			"wizen": "To become or cause to become withered or dry"
		}, {
			"wizen-faced": "Having a shriveled face"
		}, {
			"working-man": "One who earns his bread by manual labor"
		}, {
			"workmanlike": "Like or befitting a skilled workman"
		}, {
			"workmanship": "The art or skill of a workman"
		}, {
			"wrangle": "To maintain by noisy argument or dispute"
		}, {
			"wreak": "To inflict, as a revenge or punishment"
		}, {
			"wrest": "To pull or force away by or as by violent twisting or wringing"
		}, {
			"wretchedness": "Extreme misery or unhappiness"
		}, {
			"writhe": "To twist the body, face, or limbs or as in pain or distress"
		}, {
			"writing": "The act or art of tracing or inscribing on a surface letters or ideographs"
		}, {
			"wry": "Deviating from that which is proper or right"
		}, {
			"yearling": "A young animal past its first year and not yet two years old"
		}, {
			"zealot": "One who espouses a cause or pursues an object in an immoderately partisan manner"
		}, {
			"zeitgeist": "The intellectual and moral tendencies that characterize any age or epoch"
		}, {
			"zenith": "The culminating-point of prosperity, influence, or greatness"
		}, {
			"zephyr": "Any soft, gentle wind"
		}, {
			"zodiac": "An imaginary belt encircling the heavens within which are the larger planets"
		}];
		return {
			getWords: function(i) {
				var array = [];
				for (var f = 0; f <= i; f++) {
					array.push(data[Math.floor(Math.random() * 5000)])
				}
				return array;
			}
		};
	}
]);