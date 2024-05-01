
const wordsArrayExtended = [
        "ABOUT", "ABOVE", "ABSENCE", "ABSOLUTE", "ABSTRACT", "ACADEMIC", "ACCEPT", "ACCESS", "ACCIDENT", "ACCOMPANY",
        "ACCORDING", "ACCOUNT", "ACHIEVE", "ACQUIRE", "ACROSS", "ACTION", "ACTIVE", "ACTIVITY", "ACTUAL", "ACTUALLY",
        "ADD", "ADDITION", "ADDITIONAL", "ADDRESS", "ADMINISTRATION", "ADMIT", "ADOPT", "ADULT", "ADVANCE", "ADVANTAGE",
        "ADVICE", "ADVISE", "AFFAIR", "AFFECT", "AFFORD", "AFRAID", "AFTER", "AFTERNOON", "AGAIN", "AGAINST", "AGE",
        "AGENCY", "AGENT", "AGO", "AGREE", "AGREEMENT", "AHEAD", "AID", "AIM", "AIR", "AIRCRAFT", "ALL", "ALLOW",
        "ALMOST", "ALONE", "ALONG", "ALREADY", "ALRIGHT", "ALSO", "ALTERNATIVE", "ALTHOUGH", "ALWAYS", "AMONG",
        "AMONGST", "AMOUNT", "ANALYSIS", "ANCIENT", "AND", "ANIMAL", "ANNOUNCE", "ANNUAL", "ANOTHER", "ANSWER", "ANY",
        "ANYBODY", "ANYONE", "ANYTHING", "ANYWAY", "APART", "APPARENT", "APPARENTLY", "APPEAL", "APPEAR", "APPEARANCE",
        "APPLICATION", "APPLY", "APPOINT", "APPOINTMENT", "APPROACH", "APPROPRIATE", "APPROVE", "AREA", "ARGUE",
        "ARGUMENT", "ARISE", "ARM", "ARMY", "AROUND", "ARRANGE", "ARRANG",
        "ART", "ARTICLE", "ARTIST", "ARTISTIC", "AS", "ASHAMED", "ASK", "ASPECT", "ASSEMBLE", "ASSESS", "ASSESSMENT",
        "ASSET", "ASSOCIATE", "ASSOCIATION", "ASSUME", "ASSUMPTION", "AT", "ATMOSPHERE", "ATTACH", "ATTACK", "ATTEMPT",
        "ATTEND", "ATTENTION", "ATTITUDE", "ATTRACT", "ATTRACTIVE", "AUDIENCE", "AUTHOR", "AUTHORITY", "AVAILABLE",
        "AVERAGE", "AVOID", "AWARD", "AWARE", "AWAY", "AYE", "BABY", "BACK", "BACKGROUND", "BAD", "BAG", "BALANCE",
        "BALL", "BAND", "BANK", "BAR", "BASE", "BASIC", "BASIS", "BATTLE", "BE", "BEAR", "BEAT", "BEAUTIFUL", "BECAUSE",
        "BECOME", "BED", "BEFORE", "BEGIN", "BEGINNING", "BEHAVIOUR", "BEHIND", "BELIEF", "BELIEVE", "BELONG", "BELOW",
        "BENEATH", "BENEFIT", "BESIDE", "BEST", "BETTER", "BETWEEN", "BEYOND", "BIG", "BILL", "BIND", "BIRD", "BIRTH",
        "BIT", "BLACK", "BLOCK", "BLOOD", "BLOODY", "BLOW", "BLUE", "BOARD", "BOAT", "BODY", "BONE", "BOOK", "BORDER",
        "BOTH", "BOTTLE", "BOTTOM", "BOX", "BOY", "BRAIN", "BRANCH", "BREAK", "BREATH", "BRIDGE", "BRIEF", "BRIGHT",
        "BRING", "BROAD", "BROTHER", "BUDGET", "BUILD", "BUILDING", "BURN", "BUS", "BUSINESS", "BUSY", "BUT", "BUY",
        "BY", "CABINET", "CALL", "CAMPAIGN", "CAN", "CANDIDATE", "CAPABLE", "CAPACITY", "CAPITAL", "CAR", "CARD",
        "CARE", "CAREER", "CAREFUL", "CAREFULLY", "CARRY", "CASE", "CASH", "CAT", "CATCH", "CATEGORY", "CAUSE", "CELL",
        "CENTRAL", "CENTRE", "CENTURY", "CERTAIN", "CERTAINLY", "CHAIN", "CHAIR", "CHAIRMAN", "CHALLENGE", "CHANCE",
        "CHANGE", "CHANNEL", "CHAPTER", "CHARACTER", "CHARACTERISTIC", "CHARGE", "CHEAP", "CHECK", "CHEMICAL", "CHIEF",
        "CHILD", "CHOICE", "CHOOSE", "CHURCH", "CIRCLE", "CIRCUMSTANCE", "CITIZEN", "CITY", "CIVIL", "CLAIM", "CLASS",
        "CLEAN", "CLEAR", "CLEARLY", "CLIENT", "CLIMB", "CLOSE", "CLOSELY", "CLOTHES", "CLUB", "COAL", "CODE", "COFFEE",
        "COLD", "COLLECTION", "COLLEGE", "COLOUR", "COMBINATION", "COMBINE", "COME", "COMMENT", "COMMERCIAL",
        "COMMISSION", "COMMIT", "COMMITMENT", "COMMITTEE", "COMMON", "COMMUNICATION", "COMMUNITY", "COMPANY",
        "COMPARE", "COMPARISON", "COMPETITION", "COMPLETE", "COMPLETELY", "COMPLEX", "COMPONENT", "COMPUTER",
        "CONCENTRATE", "CONCENTRATION", "CONCEPT", "CONCERN", "CONCERNED", "CONCLUDE", "CONCLUSION", "CONDITION",
        "CONDUCT", "CONFERENCE", "CONFIDENCE", "CONFIRM", "CONFLICT", "CONGRESS", "CONNECT", "CONNECTION",
        "CONSEQUENCE", "CONSERVATIVE", "CONSIDER", "CONSIDERABLE", "CONSIDERATION", "CONSIST", "CONSTANT",
        "CONSTRUCTION", "CONSUMER", "CONTACT", "CONTAIN", "CONTENT", "CONTEXT", "CONTINUE", "CONTRACT", "CONTRAST",
        "CONTRIBUTE", "CONTRIBUTION", "CONTROL", "CONVENTION", "CONVERSATION", "COPY", "CORNER", "CORPORATE",
        "CORRECT", "COS", "COST", "COULD", "COUNCIL", "COUNT", "COUNTRY", "COUNTY", "COUPLE", "COURSE", "COURT",
        "COVER", "CREATE", "CREATION", "CREDIT", "CRIME", "CRIMINAL", "CRISIS", "CRITERION", "CRITICAL", "CRITICISM",
        "CROSS", "CROWD", "CRY", "CULTURAL", "CULTURE", "CUP", "CURRENT", "CURRENTLY", "CURRICULUM", "CUSTOMER",
        "CUT", "DAMAGE", "DANGER", "DANGEROUS", "DARK", "DATA", "DATE", "DAUGHTER", "DAY", "DEAD", "DEAL", "DEATH",
        "DEBATE", "DEBT", "DECADE", "DECIDE", "DECISION", "DECLARE", "DEEP", "DEFENCE", "DEFEND", "DEFINE", "DEFINITION",
        "DEGREE", "DELIVER", "DEMAND", "DEMOCRATIC", "DEMONSTRATE", "DENY", "DEPARTMENT", "DEPEND", "DEPUTY", "DERIVE",
        "DESCRIBE", "DESCRIPTION", "DESIGN", "DESIRE", "DESK", "DESPITE", "DESTROY", "DETAIL", "DETAILED", "DETERMINE",
        "DEVELOP", "DEVELOPMENT", "DEVICE", "DIE", "DIFFERENCE", "DIFFERENT", "DIFFICULT", "DIFFICULTY", "DINNER",
        "DIRECT", "DIRECTION", "DIRECTLY", "DIRECTOR", "DISAPPEAR", "DISCIPLINE", "DISCOVER", "DISCUSS", "DISCUSSION",
        "DISEASE", "DISPLAY", "DISTANCE", "DISTINCTION", "DISTRIBUTION", "DISTRICT", "DIVIDE", "DIVISION", "DO", "DOCTOR",
        "DOCUMENT", "DOG", "DOMESTIC", "DOOR", "DOUBLE", "DOUBT", "DOWN", "DRAW", "DRAWING", "DREAM", "DRESS", "DRINK",
        "DRIVE", "DRIVER", "DROP", "DRUG", "DRY", "DUE", "DURING", "DUTY", "EACH", "EAR", "EARLY", "EARN", "EARTH",
        "EASILY", "EAST", "EASY", "EAT", "ECONOMIC", "ECONOMY", "EDGE", "EDITOR", "EDUCATION", "EDUCATIONAL", "EFFECT",
        "EFFECTIVE", "EFFECTIVELY", "EFFORT", "EGG", "EITHER", "ELDERLY", "ELECTION", "ELEMENT", "ELSE", "ELSEWHERE",
        "EMERGE", "EMPHASIS", "EMPLOY", "EMPLOYEE", "EMPLOYER", "EMPLOYMENT", "EMPTY", "ENABLE", "ENCOURAGE", "END",
        "ENEMY", "ENERGY", "ENGINE", "ENGINEERING", "ENJOY", "ENOUGH", "ENSURE", "ENTER", "ENTERPRISE", "ENTIRE",
        "ENTIRELY", "ENTITLE", "ENTRY", "ENVIRONMENT", "ENVIRONMENTAL", "EQUAL", "EQUALLY", "EQUIPMENT", "ERROR",
        "ESCAPE", "ESPECIALLY", "ESSENTIAL", "ESTABLISH", "ESTABLISHMENT", "ESTATE", "ESTIMATE", "EVEN", "EVENING",
        "EVENT", "EVENTUALLY", "EVER", "EVERY", "EVERYBODY", "EVERYONE", "EVERYTHING", "EVIDENCE", "EXACTLY",
        "EXAMINATION", "EXAMINE", "EXAMPLE", "EXCELLENT", "EXCEPT", "EXCHANGE", "EXECUTIVE", "EXERCISE", "EXHIBITION",
        "EXIST", "EXISTENCE", "EXISTING", "EXPECT", "EXPECTATION", "EXPENDITURE", "EXPENSE", "EXPENSIVE", "EXPERIENCE",
        "EXPERIMENT", "EXPERT", "EXPLAIN", "EXPLANATION", "EXPLORE", "EXPRESS", "EXPRESSION", "EXTEND", "EXTENT",
        "EXTERNAL", "EXTRA", "EXTREMELY", "EYE", "FACE", "FACILITY", "FACT", "FACTOR", "FACTORY", "FAIL", "FAILURE",
        "FAIR", "FAIRLY", "FAITH", "FALL", "FAMILIAR", "FAMILY", "FAMOUS", "FAR", "FARM", "FARMER", "FASHION", "FAST",
        "FATHER", "FAVOUR", "FEAR", "FEATURE", "FEE", "FEEL", "FEELING", "FEMALE", "FEW", "FIELD", "FIGHT", "FIGURE",
        "FILE", "FILL", "FILM", "FINAL", "FINALLY", "FINANCE", "FINANCIAL", "FIND", "FINDING", "FINE", "FINGER",
        "FINISH", "FIRE", "FIRM", "FIRST", "FISH", "FIT", "FIX", "FLAT", "FLIGHT", "FLOOR", "FLOW", "FLOWER", "FLY",
        "FOCUS", "FOLLOW", "FOLLOWING", "FOOD", "FOOT", "FOOTBALL", "FOR", "FORCE", "FOREIGN", "FOREST", "FORGET",
        "FORM", "FORMAL", "FORMER", "FORWARD", "FOUNDATION", "FREE", "FREEDOM", "FREQUENTLY", "FRESH", "FRIEND",
        "FROM", "FRONT", "FRUIT", "FUEL", "FULL", "FULLY", "FUNCTION", "FUND", "FUNNY", "FURTHER", "FUTURE", "GAIN",
        "GAME", "GARDEN", "GAS", "GATE", "GATHER", "GENERAL", "GENERALLY", "GENERATE", "GENERATION", "GENTLEMAN",
        "GET", "GIRL", "GIVE", "GLASS", "GO", "GOAL", "GOD", "GOLD", "GOOD", "GOVERNMENT", "GRANT", "GREAT", "GREEN",
        "GREY", "GROUND", "GROUP", "GROW", "GROWING", "GROWTH", "GUEST", "GUIDE", "GUN", "HAIR", "HALF", "HALL",
        "HAND", "HANDLE", "HANG", "HAPPEN", "HAPPY", "HARD", "HARDLY", "HATE", "HAVE", "HE", "HEAD", "HEALTH",
        "HEAR", "HEART", "HEAT", "HEAVY", "HELL", "HELP", "HENCE", "HER", "HERE", "HERSELF", "HIDE", "HIGH", "HIGHLY",
        "HILL", "HIM", "HIMSELF", "HIS", "HISTORICAL", "HISTORY", "HIT", "HOLD", "HOLE", "HOLIDAY", "HOME", "HOPE",
        "HORSE", "HOSPITAL", "HOT", "HOTEL", "HOUR", "HOUSE", "HOUSEHOLD", "HOUSING", "HOW", "HOWEVER", "HUGE",
        "HUMAN", "HURT", "HUSBAND", "I", "IDEA", "IDENTIFY", "IF", "IGNORE", "ILLUSTRATE", "IMAGE", "IMAGINE",
        "IMMEDIATE", "IMMEDIATELY", "IMPACT", "IMPLICATION", "IMPLY", "IMPORTANCE", "IMPORTANT", "IMPOSE", "IMPOSSIBLE",
        "IMPRESSION", "IMPROVE", "IMPROVEMENT", "IN", "INCIDENT", "INCLUDE", "INCLUDING", "INCOME", "INCREASE",
        "INCREASED", "INCREASINGLY", "INDEED", "INDEPENDENT", "INDEX", "INDICATE", "INDIVIDUAL", "INDUSTRIAL",
        "INDUSTRY", "INFLUENCE", "INFORM", "INFORMATION", "INITIAL", "INITIATIVE", "INJURY", "INNER", "INNOCENT",
        "INPUT", "INQUIRY", "INSIDE", "INSIST", "INSTANCE", "INSTEAD", "INSTITUTE", "INSTITUTION", "INSTRUCTION",
        "INSTRUMENT", "INSURANCE", "INTEND", "INTENTION", "INTEREST", "INTERESTED", "INTERESTING", "INTERNAL",
        "INTERNATIONAL", "INTERPRETATION", "INTERVIEW", "INTO", "INTRODUCE", "INTRODUCTION", "INVESTIGATE",
        "INVESTIGATION", "INVESTMENT", "INVITE", "INVOLVE", "IRON", "IS", "ISLAND", "ISSUE", "IT", "ITEM", "ITS",
        "ITSELF", "JOB", "JOIN", "JOINT", "JOURNEY", "JUDGE", "JUMP", "JUST", "JUSTICE", "KEEP", "KEY", "KID",
        "KILL", "KIND", "KING", "KITCHEN", "KNEE", "KNOW", "KNOWLEDGE", "LABOUR", "LACK", "LADY", "LAND", "LANGUAGE",
        "LARGE", "LARGELY", "LAST", "LATE", "LATER", "LATTER", "LAUGH", "LAUNCH", "LAW", "LAWYER", "LAY", "LEAD",
        "LEADER", "LEADERSHIP", "LEADING", "LEAF", "LEAGUE", "LEAN", "LEARN", "LEAST", "LEAVE", "LEFT", "LEG",
        "LEGAL", "LEGISLATION", "LENGTH", "LESS", "LET", "LETTER", "LEVEL", "LIABILITY", "LIBERAL", "LIBRARY", "LIE",
        "LIFE", "LIFT", "LIGHT", "LIKE", "LIKELY", "LIMIT", "LIMITED", "LINE", "LINK", "LIP", "LIST", "LISTEN",
        "LITERATURE", "LITTLE", "LIVE", "LIVING", "LOAN", "LOCAL", "LOCATION", "LONG", "LOOK", "LORD", "LOSE", "LOSS",
        "LOT", "LOVE", "LOVELY", "LOW", "LUNCH", "MACHINE", "MAGAZINE", "MAIN", "MAINLY", "MAINTAIN", "MAJOR", "MAJORITY",
        "MAKE", "MALE", "MAN", "MANAGE", "MANAGEMENT", "MANAGER", "MANNER", "MANY", "MAP", "MARK", "MARKET", "MARRIAGE",
        "MARRIED", "MARRY", "MASS", "MASTER", "MATCH", "MATERIAL", "MATTER", "MAY", "MAYBE", "ME", "MEAL", "MEAN",
        "MEANING", "MEANS", "MEANWHILE", "MEASURE", "MECHANISM", "MEDIA", "MEDICAL", "MEET", "MEETING", "MEMBER",
        "MEMBERSHIP", "MEMORY", "MENTAL", "MENTION", "MERELY", "MESSAGE", "METAL", "METHOD", "MIDDLE", "MIGHT", "MILE",
        "MILITARY", "MILK", "MIND", "MINE", "MINISTER", "MINISTRY", "MINUTE", "MISS", "MISTAKE", "MODEL", "MODERN",
        "MODULE", "MOMENT", "MONEY", "MONTH", "MORE", "MORNING", "MOST", "MOTHER", "MOTION", "MOTOR", "MOUNTAIN",
        "MOUTH", "MOVE", "MOVEMENT", "MUCH", "MURDER", "MUSEUM", "MUSIC", "MUST", "MY", "MYSELF", "NAME", "NARROW",
        "NATION", "NATIONAL", "NATURAL", "NATURE", "NEAR", "NEARLY", "NECESSARILY", "NECESSARY", "NECK", "NEED",
        "NEGOTIATION", "NEIGHBOUR", "NEITHER", "NETWORK", "NEVER", "NEVERTHELESS", "NEW", "NEWS", "NEWSPAPER",
        "NEXT", "NICE", "NIGHT", "NO", "NOBODY", "NOD", "NOISE", "NONE", "NOR", "NORMAL", "NORMALLY", "NORTH", "NOSE",
        "NOT", "NOTE", "NOTHING", "NOTICE", "NOTION", "NOW", "NUCLEAR", "NUMBER", "NURSE", "OBJECT", "OBJECTIVE",
        "OBSERVATION", "OBSERVE", "OBTAIN", "OBVIOUS", "OBVIOUSLY", "OCCASION", "OCCUR", "ODD", "OF", "OFF", "OFFENCE",
        "OFFER", "OFFICE", "OFFICER", "OFFICIAL", "OFTEN", "OIL", "OKAY", "OLD", "ON", "ONCE", "ONE", "ONLY", "ONTO",
        "OPEN", "OPERATE", "OPERATION", "OPINION", "OPPORTUNITY", "OPPOSITION", "OPTION", "OR", "ORDER", "ORDINARY",
        "ORGANISATION", "ORGANISE", "ORGANIZATION", "ORIGIN", "ORIGINAL", "OTHER", "OTHERWISE", "OUGHT", "OUR", "OURSELVES",
        "OUT", "OUTCOME", "OUTPUT", "OUTSIDE", "OVER", "OVERALL", "OWN", "OWNER", "PACKAGE", "PAGE", "PAIN", "PAINT",
        "PAINTING", "PAIR", "PANEL", "PAPER", "PARENT", "PARK", "PARLIAMENT", "PART", "PARTICULAR", "PARTICULARLY",
        "PARTLY", "PARTNER", "PARTY", "PASS", "PASSAGE", "PAST", "PATH", "PATIENT", "PATTERN", "PAY", "PAYMENT",
        "PEACE", "PENSION", "PEOPLE", "PER", "PERCENT", "PERFECT", "PERFORM", "PERFORMANCE", "PERHAPS", "PERIOD",
        "PERMANENT", "PERSON", "PERSONAL", "PERSUADE", "PHASE", "PHONE", "PHOTOGRAPH", "PHYSICAL", "PICK", "PICTURE",
        "PIECE", "PLACE", "PLAN", "PLANNING", "PLANT", "PLASTIC", "PLATE", "PLAY", "PLAYER", "PLEASE", "PLEASURE",
        "PLENTY", "PLUS", "POCKET", "POINT", "POLICE", "POLICY", "POLITICAL", "POLITICS", "POOL", "POOR", "POPULAR",
        "POPULATION", "POSITION", "POSITIVE", "POSSIBILITY", "POSSIBLE", "POSSIBLY", "POST", "POTENTIAL", "POUND",
        "POUR", "POVERTY", "POWER", "POWERFUL", "PRACTICAL", "PRACTICE", "PREFER", "PREPARE", "PRESCRIPTION",
        "PRESENCE", "PRESENT", "PRESIDENT", "PRESS", "PRESSURE", "PRETTY", "PREVENT", "PREVIOUS", "PREVIOUSLY", "PRICE",
        "PRIMARY", "PRIME", "PRINCIPLE", "PRIORITY", "PRISON", "PRISONER", "PRIVATE", "PROBABLY", "PROBLEM",
        "PROCEDURE", "PROCEED", "PROCESS", "PRODUCE", "PRODUCT", "PRODUCTION", "PROFESSIONAL", "PROFIT", "PROGRAM",
        "PROGRAMME", "PROGRESS", "PROJECT", "PROMISE", "PROMOTE", "PROPER", "PROPERLY", "PROPERTY", "PROPORTION",
        "PROPOSAL", "PROPOSE", "PROSPECT", "PROTECT", "PROTECTION", "PROVE", "PROVIDE", "PROVISION", "PUB", "PUBLIC",
        "PUBLICATION", "PUBLISH", "PULL", "PUPIL", "PURPOSE", "PUSH", "PUT", "QUALITY", "QUARTER", "QUESTION", "QUICK",
        "QUICKLY", "QUIET", "QUITE", "RACE", "RADIO", "RAILWAY", "RAIN", "RAISE", "RANGE", "RAPIDLY", "RARE",
        "RATE", "RATHER", "REACH", "REACTION", "READ", "READER", "READING", "READY", "REAL", "REALISE", "REALITY",
        "REALIZE", "REALLY", "REASON", "REASONABLE", "RECALL", "RECEIVE", "RECENT", "RECENTLY", "RECOGNISE",
        "RECOGNITION", "RECOGNIZE", "RECOMMEND", "RECORD", "RECOVER", "REDACTION", "REDUCE", "REDUCTION", "REFER",
        "REFERENCE", "REFLECT", "REFORM", "REFUSE", "REGARD", "REGARDLESS", "REGION", "REGIONAL", "REGULAR",
        "REGULATION", "REJECT", "RELATE", "RELATION", "RELATIONSHIP", "RELATIVE", "RELATIVELY", "RELEASE", "RELEVANT",
        "RELIEF", "RELIGION", "RELIGIOUS", "RELY", "REMAIN", "REMEMBER", "REMIND", "REMOVE", "REPEAT", "REPLACE",
        "REPLY", "REPORT", "REPRESENT", "REPRESENTATION", "REPRESENTATIVE", "REQUEST", "REQUIRE", "REQUIREMENT",
        "RESEARCH", "RESOURCE", "RESPECT", "RESPOND", "RESPONSE", "RESPONSIBILITY", "RESPONSIBLE", "REST", "RESTAURANT",
        "RESULT", "RETAIN", "RETURN", "REVEAL", "REVENUE", "REVIEW", "REVOLUTION", "RICH", "RIDE", "RIGHT", "RING",
        "RISE", "RISK", "RIVER", "ROAD", "ROCK", "ROLE", "ROLL", "ROOF", "ROOM", "ROUND", "ROUTE", "ROW", "ROYAL",
        "RULE", "RUN", "RURAL", "SAFE", "SAFETY", "SALE", "SAME", "SAMPLE", "SATISFY", "SAVE", "SAY", "SCALE", "SCENE",
        "SCHEME", "SCHOOL", "SCIENCE", "SCIENTIFIC", "SCIENTIST", "SCORE", "SCREEN", "SEA", "SEARCH", "SEASON",
        "SEAT", "SECOND", "SECONDARY", "SECRETARY", "SECTION", "SECTOR", "SECURE", "SECURITY", "SEE", "SEEK", "SEEM",
        "SELECT", "SELECTION", "SELL", "SEND", "SENIOR", "SENSE", "SENTENCE", "SEPARATE", "SEQUENCE", "SERIES",
        "SERIOUS", "SERIOUSLY", "SERVANT", "SERVE", "SERVICE", "SESSION", "SET", "SETTLE", "SETTLEMENT", "SEVERAL",
        "SEVERE", "SHAKE", "SHALL", "SHAPE", "SHARE", "SHE", "SHEET", "SHIP", "SHOE", "SHOOT",
        "SHOP", "SHORT", "SHOT", "SHOULD", "SHOULDER", "SHOUT", "SHOW", "SHUT", "SIDE", "SIGHT", "SIGN", "SIGNAL",
        "SIGNIFICANCE", "SIGNIFICANT", "SILENCE", "SIMILAR", "SIMPLE", "SIMPLY", "SINCE", "SING", "SINGLE", "SIR",
        "SISTER", "SIT", "SITE", "SITUATION", "SIZE", "SKILL", "SKIN", "SKY", "SLEEP", "SLIGHTLY", "SLIP", "SLOW",
        "SLOWLY", "SMALL", "SMILE", "SO", "SOCIAL", "SOCIETY", "SOFT", "SOFTWARE", "SOIL", "SOLDIER", "SOLICITOR",
        "SOLUTION", "SOME", "SOMEBODY", "SOMEONE", "SOMETHING", "SOMETIMES", "SOMEWHAT", "SOMEWHERE", "SON", "SONG",
        "SOON", "SORRY", "SORT", "SOUND", "SOURCE", "SOUTH", "SOUTHERN", "SPACE", "SPEAK", "SPEAKER", "SPECIAL",
        "SPECIES", "SPECIFIC", "SPECIFICALLY", "SPEECH", "SPEED", "SPEND", "SPIRIT", "SPORT", "SPOT", "SPREAD",
        "SPRING", "STAFF", "STAGE", "STAND", "STANDARD", "STAR", "START", "STATE", "STATEMENT", "STATION", "STATUS",
        "STAY", "STEAL", "STEP", "STICK", "STILL", "STOCK", "STONE", "STOP", "STORE", "STORY", "STRAIGHT", "STRANGE",
        "STRATEGY", "STREET", "STRENGTH", "STRIKE", "STRONG", "STRONGLY", "STRUCTURE", "STUDENT", "STUDIO", "STUDY",
        "STUFF", "STYLE", "SUBJECT", "SUBSTANTIAL", "SUCCEED", "SUCCESS", "SUCCESSFUL", "SUCH", "SUDDEN", "SUDDENLY",
        "SUFFER", "SUFFICIENT", "SUGGEST", "SUGGESTION", "SUITABLE", "SUM", "SUMMER", "SUN", "SUPPLY", "SUPPORT",
        "SUPPOSE", "SURE", "SURELY", "SURFACE", "SURPRISE", "SURROUND", "SURVEY", "SURVIVE", "SWITCH", "SYSTEM",
        "TABLE", "TAKE", "TALK", "TALL", "TAPE", "TARGET", "TASK", "TASTE", "TAX", "TEA", "TEACH", "TEACHER",
        "TEACHING", "TEAM", "TEAR", "TECHNICAL", "TECHNIQUE", "TECHNOLOGY", "TELEPHONE", "TELEVISION", "TELL",
        "TEMPERATURE", "TEND", "TERM", "TERMS", "TERRIBLE", "TEST", "TEXT", "THAN", "THANK", "THANKS", "THAT", "THE",
        "THEATER", "THEIR", "THEM", "THEME", "THEMSELVES", "THEN", "THEORY", "THERE", "THEREFORE", "THESE", "THEY",
        "THIN", "THING", "THINK", "THIS", "THOSE", "THOUGH", "THOUGHT", "THREAT", "THREATEN", "THROUGH", "THROUGHOUT",
        "THROW", "THUS", "TICKET", "TIME", "TINY", "TITLE", "TO", "TODAY", "TOGETHER", "TOMORROW", "TONE", "TONIGHT",
        "TOO", "TOOL", "TOOTH", "TOP", "TOTAL", "TOTALLY", "TOUCH", "TOUR", "TOWARD", "TOWN", "TRACK", "TRADE",
        "TRADITION", "TRADITIONAL", "TRAFFIC", "TRAIN", "TRAINING", "TRANSFER", "TRANSPORT", "TRAVEL", "TREAT",
        "TREATMENT", "TREATY", "TREE", "TREND", "TRIAL", "TRIP", "TROOP", "TROUBLE", "TRUE", "TRUST", "TRUTH",
        "TRY", "TURN", "TWICE", "TYPE", "TYPICAL", "UNABLE", "UNDER", "UNDERSTAND", "UNDERSTANDING", "UNDERTAKE",
        "UNEMPLOYMENT", "UNFORTUNATELY", "UNION", "UNIT", "UNITED", "UNIVERSITY", "UNLESS", "UNLIKELY", "UNTIL",
        "UP", "UPON", "UPPER", "URBAN", "US", "USE", "USED", "USEFUL", "USER", "USUAL", "USUALLY", "VALUE", "VARIATION",
        "VARIETY", "VARIOUS", "VARY", "VAST", "VEHICLE", "VERSION", "VERY", "VIA", "VICTIM", "VICTORY", "VIDEO",
        "VIEW", "VILLAGE", "VIOLENCE", "VISION", "VISIT", "VISITOR", "VITAL", "VOICE", "VOLUME", "VOTE", "WAGE",
        "WAIT", "WALK", "WALL", "WANT", "WAR", "WARM", "WARN", "WASH", "WATCH", "WATER", "WAVE", "WAY", "WE", "WEAK",
        "WEAPON", "WEAR", "WEATHER", "WEEK", "WEEKEND", "WEIGHT", "WELCOME", "WELFARE", "WELL", "WEST", "WESTERN",
        "WHAT", "WHATEVER", "WHEN", "WHERE", "WHEREAS", "WHETHER", "WHICH", "WHILE", "WHILST", "WHITE", "WHO", "WHOLE",
        "WHOM", "WHOSE", "WHY", "WIDE", "WIDELY", "WIFE", "WILD", "WILL", "WIN", "WIND", "WINDOW", "WINE", "WING",
        "WINNER", "WINTER", "WISH", "WITH", "WITHDRAW", "WITHIN", "WITHOUT", "WOMAN", "WONDER", "WONDERFUL", "WOOD",
        "WORD", "WORK", "WORKER", "WORKING", "WORKS", "WORLD", "WORRY", "WORTH", "WOULD", "WRITE", "WRITER", "WRITING",
        "WRONG", "YARD", "YEAH", "YEAR", "YES", "YESTERDAY", "YET", "YOU", "YOUNG", "YOUR", "YOURSELF", "YOUTH",
        "ZERO"
    ]
    
 

  
const arr=[];
let buttonsEnabled = true; // Variable to track if buttons are enabled

$("#Solution").click(function() {
    if (buttonsEnabled) {
        buttonsEnabled = false; // Disable buttons
        showSolution("If you want to show solution then you can't play the game");
        // Enable buttons after 5 seconds
        setTimeout(function() {
            buttonsEnabled = true;
        }, 5000);
    }
});
var answer=0;
let selectedWords = [];
localStorage.setItem('mx', 0.0);
while (selectedWords.length < 13) {
    let randomIndex = Math.floor(Math.random() * wordsArrayExtended.length);
    let randomWord = wordsArrayExtended[randomIndex];
    if (!selectedWords.includes(randomWord)) {
        selectedWords.push(randomWord);
    }
}


var flag =true;
$("#start").click(function() {
    //location.reload();
    if (buttonsEnabled) {
    isPaused = true;
    buttonsEnabled = false;
    showAlert("Do you want to start New Game!")
    }
})
$("#end").click(function() {
    if (buttonsEnabled) {
    isPaused=true;
    buttonsEnabled = false;
    showEnd("Are you want to end this game!")
    // $.each(arr, function(key, item) {
    //     $("#ans").append("<p>" + item + "</p>");
    // });
   // $("#ans").append("<p>" + selectedWord + "</p>");

    //
    }
})
$("#Hint").click(function(){
    if (buttonsEnabled) {
       // buttonsEnabled = false;
    if(flag) {
        
    $.each(selectedWords, function(key, item) {
        $("#hint").append("<p>" + item + "</p>");
    });
    flag=false;
  }else{
    
        $("#hint").empty();
       
    flag=true;
  }
}
})

var selectedWord = "";
function initializeScore() {
    let mx = localStorage.getItem('mx');
    if(mx === null) {
        localStorage.setItem('mx', '0'); // Initialize to 0 if it doesn't exist
        $("#scrno").text('0');
    } else {
        $("#scrno").text(mx); // Set the score from localStorage
    }
}
$(document).ready(function() {
    //fetchWordsList();
    arrangeGame();
    initializeScore();

    $(".individual").mousedown(function() {
        selectedWord = $(this).text();
        $(this).addClass("selected");
        
        $(".individual").on("mouseover", function() {
            selectedWord += $(this).text();
            $(this).addClass("selected");
        });
    }).mouseup(function() {
        $(".individual").off("mouseover");
        
        if (!$("#ans").find("p:contains(" + selectedWord + ")").length && selectedWords.includes(selectedWord)) {
            answer++;
            arr.push(selectedWord);
            //$("#ans").append("<p>" + selectedWord + "</p>");
            $(".selected").addClass("found"); // Add 'found' class to found words
            if(answer==13)
                {
                    var res=countdownTime+1;
                    //answer-=1;
                    answer=(answer*8*(360-countdownTime)/360);
                    if(answer>=100) answer-=8;
                    answer=answer.toFixed(2);
                    $("#mxscrno").append(answer);
                    if(localStorage.getItem('mx') !== null) {
                        let mx = parseFloat(localStorage.getItem('mx')); 
                        mx = Math.max(mx, answer); 
                        localStorage.setItem('mx', mx); 
                        $("#scrno").text(mx);
                    }
                    $.each(arr, function(key, item) {
                        $("#ans").append("<p>" + item + "</p>");
                    });
                    showCustomAlert("Well Done! Your score :",answer);
                }
        }
        
        selectedWord = "";
        $(".individual").removeClass("selected");
        
    }).on("dragstart", function() {
        return false; // Prevents text selection during drag
    });

    $(document).keydown(function() {
        selectedWord = "";
        $(".individual").removeClass("selected");
    });
});

// $(document).ready(function() {
//     arrangeGame();
// });


var tempWord = [];

function arrangeGame() {
    $("#box").append("Hint");
   // $("#word").append("Word Search Puzzle");
    $("#res").append("Words");
    $("#scr").append("MaxScore");
    $("#mxscr").append("Score");
    for (var i = 1; i <= 15; i++) {
        for (var j = 1; j <= 15; j++) {
            $("#letters").append("<div class='individual' data-row='" + i + "' data-col='" + j + "'></div>");
        }
    }
    placeCorrect(selectedWords);
      placeCorrect(tempWord);
   $.each($(".individual"),function(key, item) {
    if($(item).attr("data-word") == undefined)
        $(this).html(randomLetter());
   })
}

function randomLetter() {
    var alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabets.charAt(Math.floor(Math.random() * 26));
}

function checkOccupied(word, starting, orientation) {
    var status = "";
    var incrementBy = 0;
    if (orientation == "row") {
        incrementBy = 1;
    } else if (orientation == "column") {
        incrementBy = 15;
    }else if (orientation == "diagonal") {
        incrementBy = 16;
    }
    for (var p = starting, i = 0; i < word.length; i++) {
        if ($(".individual:eq(" + p + ")").attr("data-word") == undefined)
            status = "empty";
        else {
            status = "occupied";
            break;
        }
        p += incrementBy;
    }
    return status;
}

function placeCorrect(myArr) {
    var positions = ["row", "column","diagonal"];
    var nextLetter = 0;
    var newStart = 0;

    for (var i = 0; i < myArr.length; i++) {
        var orientation = positions[Math.floor(Math.random() * positions.length)];
        var start = Math.floor(Math.random() * $(".individual").length);
        var myRow = $(".individual:eq(" + start + ")").data("row");
        var myColumn = $(".individual:eq(" + start + ")").data("col");

        if (orientation == "row") {
            nextLetter = 1;
            if (myColumn * 1 + myArr[i].length <= 15) {
                newStart = start;
            } else {
                var newColumn = 15 - myArr[i].length;
                newStart = $(".individual[data-row='" + myRow + "'][data-col='" + newColumn + "']").index();
            }
        } else if (orientation == "column") {
            nextLetter = 15;
            if (myRow + myArr[i].length <= 15) {
                newStart = start;
            } else {
                var newRow = 15 - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + myColumn + "']").index();
            }
        }else if(orientation=="diagonal")
        {
            nextLetter=16;
            if (myColumn * 1 + myArr[i].length <= 15 && myRow * 1 + myArr[i].length <= 15)
            newStart=start;
            if(myColumn * 1 + myArr[i].length >15)
            {
                var newColumn = 15 - myArr[i].length;
                newStart = $(".individual[data-row='" + myRow + "'][data-col='" + newColumn + "']").index();
            }
            if (myRow * 1 + myArr[i].length >15) 
            {
                var newRow = 15 - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + myColumn + "']").index();
            }
            if (myColumn * 1 + myArr[i].length > 15 && myRow * 1 + myArr[i].length > 15)
            {
                var newColumn = 15 - myArr[i].length;
                var newRow = 15 - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + newColumn + "']").index();

            }
        }

        var characters = myArr[i].split("");
        var nextPosition = 0;
        var occupied = checkOccupied(myArr[i], newStart, orientation);

        if (occupied == "empty") {
            $.each(characters, function(key, item) {
                $(".individual:eq(" + (newStart + nextPosition) + ")").html(item);
                $(".individual:eq(" + (newStart + nextPosition) + ")").attr("data-word", myArr[i]);
              // $("#Solution").click(function(){
                   // $(".individual:eq(" + (newStart + nextPosition) +")").css("background","yellow");
                //});
                nextPosition += nextLetter;
            });
        } else {
            tempWord.push(myArr[i]);
        }
    }
}


let countdownTime = 360; 
let isPaused = false;
function updateCountdown() {
    if(!isPaused) {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    document.getElementById('countdown').textContent = ` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    countdownTime--; 
    if (countdownTime < 0) {
        clearInterval(countdownInterval);
        showScore();
     }
    }
}

function showScore(){
    var res=countdownTime+1;
    //answer-=1;
    answer=(answer*8*(360-countdownTime)/360);
    if(answer>=100) answer-=8;
    answer=answer.toFixed(2);
    $("#mxscrno").append(answer);
    if(localStorage.getItem('mx') !== null) {
        let mx = parseFloat(localStorage.getItem('mx')); 
        mx = Math.max(mx, answer); 
        localStorage.setItem('mx', mx); 
        $("#scrno").text(mx);
    }
    $.each(arr, function(key, item) {
        $("#ans").append("<p>" + item + "</p>");
    });
    showCustomAlert("Time Out! Your Score:" +answer);
}
let countdownInterval = setInterval(updateCountdown, 1000);
function showCustomAlert(message) {
    var alertContainer = document.createElement("div");
    alertContainer.className = "custom-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    closeButton.textContent = "New Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        showScore();
        location.reload();
        //$("#start").click();
    };
    alertContainer.appendChild(closeButton);
    
    document.body.appendChild(alertContainer);
}
function showAlert(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "New Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        showScore();
        location.reload();
        //$("#start").click();
    };
   
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove(); 
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
function showEnd(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "End Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
    //     countdownTime=10;
    //     updateCountdown();
    // $.each(arr, function(key, item) {
    //     $("#ans").append("<p>" + item + "</p>");
    // });
        
        showScore();
       // location.reload();
        //$("#start").click();
    };
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove(); 
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
function showSolution(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "Show Solution";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        $.each($(".individual"), function(key, item) {
            if ($(item).attr("data-word") != undefined) {
                if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
                    $(this).css("background-color", "yellow");
                }
            }
        });
        countdownTime=5;
        updateCountdown();
        //showScore();
        //location.reload();
        //$("#start").click();
    };
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove();  
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
let mx = localStorage.getItem('mx');
if (mx) {
    $("#scrno").text(mx);
} else {
    $("#scrno").text("0");
}
$("#scrno").text(mx);



