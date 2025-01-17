// Page Elements:
const MenuButton = document.getElementById('MenuButton');
const FullNavArea = document.getElementById('FullNavArea');
const NavMenu = document.getElementById('NavMenu');
const RemainingNavSpace = document.getElementById('NavRemainingSpace');
const GamePausedTxt = document.getElementById('GamePausedTxt');
const LightDarkModeButton = document.getElementById('LightDarkModeButton')

// Variables:
let NavDebug = false;
let DarkMode = true;
let NavOpen = false;

let LightBodyBackground = '#f0f0f0';
let DarkBodyBackground = '#1b1b1b';

// Functions:

function OpenNav(){
    if(!NavOpen){
        NavOpen = true;
        // MenuButton Animation:
        MenuButton.style.animation = 'MenuClick 1s ease 0s both';
        // Reset Animation:
        setTimeout(() => {
            MenuButton.style.animation = 'unset';
        }, 2550);

        // Open Nav (after button animation):
        setTimeout(() => {
            FullNavArea.style.display = 'flex';
            setTimeout(() => { // Wait for FullNav to Open
                NavMenu.style.left = '0px';
                RemainingNavSpace.style.opacity = '.5';
            }, 360);
        }, 100);
        
        if(GameRunning){
            // console.info('Pausing Game!');
            GamePaused = true;
            GamePausedTxt.style.display = 'flex';
            GamePausedTxt.style.opacity = 1;
        }

    }
    
}


function CloseNav(){
    // Animate Out:
    NavMenu.style.left = '-250px';
    RemainingNavSpace.style.opacity = '0';

    // Wait for Animation:
    setTimeout(() => {
        FullNavArea.style.display = 'none';
        NavOpen = false;
    }, 500);

    // Unpause Game if Paused:
    if(GamePaused){
        // console.info('Unpausing Game!');
        GamePaused = false;
        GamePausedTxt.style.opacity = 0;
        setTimeout(() => {
            GamePausedTxt.style.display = 'none';
        }, 400);
    }
}

function ToggleColorMode(){
    if(NavDebug){console.info('Switching Color Mode:')};
    if(DarkMode){
        DarkMode = false;
        localStorage.setItem('ColorMode', 'Light');
        if(NavDebug){console.info('Light Mode Activated')};
        LightDarkModeButton.innerHTML = '<span class="material-symbols-rounded NavLinkIcon"> invert_colors </span> Dark Mode';
        document.documentElement.style.setProperty('--BodyBackground', LightBodyBackground);
        // document.documentElement.style.setProperty('--BodyTextColor', 'black');
    }else{
        if(!DarkMode){
            DarkMode = true;
            localStorage.setItem('ColorMode', 'Dark');
            if(NavDebug){console.info('Dark Mode Activated')};
            LightDarkModeButton.innerHTML = '<span class="material-symbols-rounded NavLinkIcon"> invert_colors </span> Light Mode';
            document.documentElement.style.setProperty('--BodyBackground', DarkBodyBackground);
            // document.documentElement.style.setProperty('--BodyTextColor', 'white');
        }
    }

    
}

// Gave Previous Saved Color Mode:
//document.addEventListener('DOMContentLoaded', function(){
    let ColorModeSave = localStorage.getItem('ColorMode');

    // No Previous Save:
    if(ColorModeSave === null){
        // console.info('No Previous ColorMode Saved!')
        // Set to Default (dark):
        localStorage.setItem('ColorMode', 'Dark');
    }

    // Previous Save Found:
    if(ColorModeSave != null){
        if(ColorModeSave === 'Light'){
            DarkMode = false;
            if(NavDebug){console.info('Light Mode Activated')};
            LightDarkModeButton.innerHTML = '<span class="material-symbols-rounded NavLinkIcon"> invert_colors </span> Dark Mode';
            document.documentElement.style.setProperty('--BodyBackground', LightBodyBackground);
        }

        if(ColorModeSave === 'Dark'){
            DarkMode = true;
            if(NavDebug){console.info('Dark Mode Activated')};
            LightDarkModeButton.innerHTML = '<span class="material-symbols-rounded NavLinkIcon"> invert_colors </span> Light Mode';
            document.documentElement.style.setProperty('--BodyBackground', DarkBodyBackground);
        }
    }
//})
