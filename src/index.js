import './styles/style.scss';
import { themeButton } from './theme.js';


themeButton.addEventListener('click', () => {
    document.body.className ==='dark' ? document.body.className ='light' 
                                      : document.body.className ='dark';
});


const helpButton = document.getElementById('help-button');
const helpMenuContainer = document.getElementById('help-container');
const closeHelpMenuButton = document.getElementById('close-help-menu-button');

function openHelpMenu() {
    helpMenuContainer.classList.add('open');
}

function closeHelpMenu() {
    helpMenuContainer.classList.remove('open');
}

helpButton.addEventListener('click', () => {
    helpMenuContainer.classList.remove('fadeout');
    openHelpMenu();
});

closeHelpMenuButton.addEventListener('click', () => {
    helpMenuContainer.classList.add('fadeout');
    setTimeout(() => {
        closeHelpMenu();
    }, 200);
    //add fadeout class
});


//on page load - display instructions if local storage is empty



//start word check with o
//----
//string to array
//loop over and check if element length is 5
//      check if word is in set
//      if passes both, add to set
//set to array ()
let wordsString = "Adult,Agent,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair,Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress,Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide,Heart,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Judge,Knife,Layer,Level,Light,Limit,Lunch,Major,March,Match,Metal,Model,Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Phase,Phone,Piece,Pilot,Pitch,Place,Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score,Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start,State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust,Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,World,Youth,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause,Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn,Leave,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound,Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Watch,Would,Write,Above,Acute,Alive,Aware,Awful,Basic,Black,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Daily,Early,Empty,Equal,Exact,Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light,Local,Loose,Lucky,Magic,Major,Minor,Moral,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal,Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague,Valid,Vital,White,Whole,Wrong,abbey,abhor,abide,abode,about,above,abyss,acorn,acrid,actor,acute,adage,adapt,adept,admin,admit,adobe,adopt,adore,adorn,adult,aerie,after,again,agent,aggro,agile,agree,ahead,aisle,alarm,album,alert,algae,alibi,alien,align,alike,alive,allay,alley,allow,alloy,aloft,aloha,alone,along,aloof,aloud,alpha,altar,alter,amass,amaze,amber,ambit,amble,amend,amide,amino,amiss,among,amped,ample,amply,amuse,angel,angle,angry,angst,anime,ankle,annex,antic,antsy,anvil,apart,apnea,apply,apron,arbor,ardor,areas,arena,argon,argue,arise,armor,aroma,arose,array,arrow,arson,ascot,aside,asked,askew,asset,atlas,attic,audio,audit,aught,aunts,avail,avert,avian,avoid,await,awake,award,aware,awash,awoke,axiom,azure,babel,bacon,baddy,badge,bagel,baggy,banjo,barge,baron,basic,basil,basin,basis,batch,bathe,batty,beach,beard,beast,befit,began,begin,begun,beige,belch,belly,below,bench,berry,bible,bicep,binge,bingo,biome,bipod,birch,birth,bison,black,blade,blame,bland,blank,blast,blaze,bleak,bleed,bleep,blend,bless,blimp,blind,bling,blink,bliss,blitz,bloat,blobs,block,blogs,bloke,blond,blood,bloom,bluff,blunt,blurt,blush,board,boast,bobby,boggy,bogus,bongo,bonus,boost,booth,borne,botch,bough,bound,boxer,brace,braid,brain,brake,brand,brash,brass,brave,bravo,brawl,brawn,bread,break,brews,bribe,brick,bride,brief,bring,brink,brisk,broad,broch,broil,broke,brood,brook,broom,broth,brown,brush,brute,buddy,budge,buggy,build,built,bumpy,bunch,bunny,burnt,burst,buyer,cabin,cable,cacao,cache,cacti,caddy,cadet,camel,cameo,campy,candy,canoe,cargo,carry,carve,cases,caste,catch,cater,cause,caved,cease,cedar,cello,chain,chair,chalk,champ,chant,chaos,charm,chart,chase,cheap,cheat,check,cheer,chess,chest,chewy,chief,child,chill,chimp,china,chips,chirp,choir,chomp,chord,chore,chose,chuck,chunk,churn,cider,cigar,cites,civic,civil,clack,claim,clamp,clang,clank,clash,clasp,class,clean,clear,clerk,click,cliff,climb,cling,clink,cloak,clock,clone,close,cloth,cloud,clout,clove,clown,clump,clung,coach,coast,cobra,cocoa,coded,coder,codes,codex,color,combo,comet,comfy,comic,comma,condo,cones,coral,couch,cough,could,count,coupe,court,cover,covet,crack,craft,crane,crank,crash,crave,crawl,creak,cream,crept,crime,crisp,cross,crowd,crown,crude,crumb,crush,crust,crypt,cubic,cupid,curly,curry,curse,curve,curvy,cycle,daily,dairy,daisy,damns,dance,datum,dealt,debit,debug,debut,decaf,decal,decoy,defer,deify,deign,deism,deist,deity,delay,delta,delve,demon,denim,dense,depot,depth,derby,deter,detox,diary,dicey,digit,dimes,dimly,diner,dirty,disco,ditch,dizzy,dodge,dodgy,dogma,doing,dolor,donor,donut,doubt,dough,draft,drain,drake,drama,drank,drape,drawn,dream,dress,drift,drill,drink,drive,droll,drone,drool,drove,drown,drunk,dumpy,dusty,dutch,dwarf,dwell,eager,eagle,early,earth,easel,easer,ebony,ebook,eight,eject,elbow,elder,elect,elite,elude,elves,email,embed,ember,emote,empty,enact,ended,enemy,enjoy,ennui,ensue,enter,entry,envoy,epoch,epoxy,equal,equip,erase,erect,erode,error,erupt,essay,ether,ethic,ethos,evade,event,every,evict,evoke,exact,exalt,excel,exert,exile,exist,expel,extol,extra,exude,exult,fable,facet,facts,faded,fades,faint,fairs,fairy,faith,faked,faker,fancy,farce,fault,favor,fazed,feast,feign,felon,femur,fence,fetch,fever,fewer,fiber,field,fiend,fiery,fifth,fifty,fight,filer,films,filmy,filth,final,first,flack,flail,flair,flake,flaky,flame,flank,flare,flash,flask,flick,fling,float,flood,floor,flour,flown,fluid,focal,focus,force,forms,forth,forty,forum,found,frame,fraud,fresh,front,frost,fruit,fuels,fully,funds,funny,gains,gamma,gates,gauge,genre,ghost,giant,given,gland,glass,globe,glory,gloss,glove,going,goods,grace,grade,grain,grams,grand,grant,grape,graph,grasp,grass,grave,great,greek,green,greet,grief,grill,grind,group,grove,grown,grows,guard,guess,guest,guide,guild,guilt,habit,happy,harsh,haven,heard,heart,heavy,hedge,hello,hence,hobby,honey,honor,horse,hotel,house,hover,human,humor,ideal,image,imply,inbox,incur,index,indie,inner,input,intro,issue,jelly,jewel,joint,judge,juice,juicy,kinda,knife,knock,known,label,labor,large,laser,later,laugh,layer,learn,lease,least,leave,legal,lemon,level,lever,light,limit,linen,liner,liver,lobby,local,lodge,logic,logos,loose,lower,loyal,lucky,lunar,lunch,lying,macro,magic,major,maple,march,marry,match,matte,maybe,mayor,meals,means,meant,meats,medal,media,meets,melee,mercy,merge,merit,merry,messy,metal,meter,metro,micro,midst,might,minor,minus,mixer,model,moist,money,month,moral,motor,mouse,mouth,movie,music,nerve,never,newer,nexus,niche,night,ninja,ninth,noble,noise,noisy,north,notch,novel,nurse,nylon,oasis,occur,ocean,offer,often,olive,omega,onion,onset,opera,optic,orbit,order,organ,other,ought,ounce,outer,owner,oxide,paint,panic,paper,party,pasta,paste,patch,patio,pause,peace,peach,pearl,pedal,penny,petty,phase,phone,photo,piano,piece,pilot,pinch,pitch,pixel,pizza,place,plain,plane,plant,plate,plaza,point,poker,polar,porch,pouch,pound,power,press,price,pride,prime,print,prior,prize,probe,promo,prone,proof,proud,prove,proxy,psalm,pulse,punch,pupil,puppy,purse,queen,query,quest,queue,quick,quiet,quilt,quite,quote,radar,radio,raise,rally,ranch,range,rapid,ratio,razor,reach,react,ready,realm,rebel,refer,reign,relax,relay,renew,reply,reset,resin,retro,ridge,rifle,right,rigid,rinse,risky,rival,river,robot,rocky,rogue,rough,round,route,royal,rugby,ruins,rural,sadly,salad,sandy,satin,sauce,scale,scalp,scare,scarf,scary,scene,scent,scoop,scope,score,scout,scrap,screw,sense,serve,setup,seven,sewer,shade,shake,shall,shape,share,shark,sharp,sheep,sheet,shelf,shell,shift,shine,shiny,shirt,shock,shoes,shore,short,shown,siege,sight,sigma,silly,since,sixth,skill,skirt,skull,slate,sleep,slept,slice,slide,slope,small,smart,smile,smoke,snack,snake,sneak,solar,solid,solve,sonic,sorry,sound,south,space,spare,spark,speak,speed,spell,spend,spent,spice,spicy,spike,spine,spite,split,spoke,spoon,sport,spray,squad,stack,staff,stage,stain,stamp,stand,stark,start,state,steak,steal,steam,steel,steep,stick,stiff,still,stock,stole,stone,stood,stool,store,storm,story,stove,strap,straw,strip,stuck,study,stuff,style,sugar,suite,sunny,super,surge,sushi,swear,sweat,sweet,swept,swift,swing,swiss,sword,syrup,table,taste,tasty,teach,teeth,tempo,tenth,thank,theft,their,theme,there,these,thick,thief,thing,think,third,those,three,threw,throw,thumb,tiger,tight,timer,title,toast,today,token,tooth,topic,torch,total,touch,tough,towel,tower,toxic,trace,track,tract,trade,trail,train,trait,treat,trend,trial,tribe,trick,trout,truck,truly,trunk,trust,truth,turbo,tutor,tweet,twice,twist,ultra,uncle,under,union,unite,unity,until,upper,upset,urban,usage,usual,vague,valid,value,valve,vapor,vault,vegan,venue,verse,video,villa,vinyl,viral,virus,visit,vital,vivid,vocal,vodka,voice,wagon,waist,waste,watch,water,weigh,weird,welsh,whale,wheat,wheel,where,which,while,white,whole,whose,width,witch,world,worry,worse,worst,worth,would,wound,wrath,wrist,write,wrong,yacht,yield";

let tempArray = wordsString.split(",");
const wordsSet = new Set();

for (let word of tempArray) {
    if (word.length === 5 && !wordsSet.has(word)) {
        word = word.toLowerCase();
        wordsSet.add(word);
    }
}

let newWordsArray = [...wordsSet];
let oldWordsArray = [];
let newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
let oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));

function randomArrayShuffle(array) {
    let currentIndex = array.length;
    let tempValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}



// let currentWord = "";
// function getNewGameWord() {
//     if (newWordsArrayLS.length === 0) {
//         fillNewWordsArrayLS();
//     }
//     currentWord = newWordsArrayLS.pop();
//     console.log(currentWord);
//     localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
//     oldWordsArrayLS.push(currentWord);
//     localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
// }

//moves all old words back to newWordsArrayLS when there are no more new words 
function fillNewWordsArrayLS() {
    oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
    randomArrayShuffle(oldWordsArrayLS);
    localStorage.setItem('newWordsArrayLS', JSON.stringify(oldWordsArrayLS));
    newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
    oldWordsArrayLS = [];
    localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
}

// let gameExists = false;

const Game = () => {
    let currentWord = "";
    // gameExists = true;
    const setNewGameWord = () => {
        if (newWordsArrayLS.length === 0) {
            fillNewWordsArrayLS();
        }
        currentWord = newWordsArrayLS.pop();
        // console.log(currentWord);
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArrayLS));
        oldWordsArrayLS.push(currentWord);
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArrayLS));
    };
    const getCurrentWord = () => {
        return currentWord;
    };
    return {currentWord, setNewGameWord, getCurrentWord};
};
   
const wordleGame = Game();

//this is used upon first visit to site
function checkForEmptyLSArray() {
    if (localStorage.getItem("newWordsArrayLS") === null) {
        randomArrayShuffle(newWordsArray);
        localStorage.setItem('newWordsArrayLS', JSON.stringify(newWordsArray));
        localStorage.setItem('oldWordsArrayLS', JSON.stringify(oldWordsArray));
        newWordsArrayLS = JSON.parse(localStorage.getItem('newWordsArrayLS'));
        oldWordsArrayLS = JSON.parse(localStorage.getItem('oldWordsArrayLS'));
        wordleGame.setNewGameWord();
        // console.log(wordleGame.getCurrentWord());
      }
}

//skip current word and use a new one
const skipButton = document.getElementById('skip-button');
function skipWord() {
    wordleGame.setNewGameWord();
}
skipButton.addEventListener('click', () => {
    skipWord();
    // console.log(wordleGame.getCurrentWord());
});

window.onload = () => {
    if (oldWordsArrayLS === null) {openHelpMenu()}
    checkForEmptyLSArray();
}


// console.log(wordleGame.getCurrentWord());
//      returns 'empty string'