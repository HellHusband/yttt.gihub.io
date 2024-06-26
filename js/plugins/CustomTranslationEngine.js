/*:
* @plugindesc Loads script files from a languages folder to dynamically use text and more for the chosen language.
* @author vgperson
*
* @param Important
* @text Important Settings
* @desc Important settings for configuring supported languages.
*
* @param LanguageCodes
* @text Language Codes
* @parent Important
* @type text[]
* @desc Internal list of language codes. This will be the order they appear in the options menu.
* @default ["JP","EN"]
*
* @param BaseLanguage
* @text Base Language Code
* @parent Important
* @type text
* @desc Base game language; this language will use game data rather than language scripts. Must match a Language Code.
* @default JP
*
* @param DefaultLanguage
* @text Default Language Setting
* @parent Important
* @type text
* @desc Default language setting, used on first launch. Must match a Language Code. Base Language used if blank.
* @default EN
*
* @param BaseLanguageDisplayName
* @text Language Name (Base)
* @parent Important
* @type text
* @desc Base language name for display in options menu. (Defined in Extra section for other languages.)
* @default 日本語
*
* @param BaseLanguageOptionName
* @text Language Option (Base)
* @parent Important
* @type text
* @desc Name of the "Language" option in options menu in base language. (Defined in Extra section for other languages.)
* @default 言語
*
* @param BaseMessageSpeed
* @text Message Speed (Base)
* @parent Important
* @type combo
* @option 0.125x
* @option 0.25x
* @option 0.5x
* @option 0.66x
* @option 0.75x
* @option 0.8x
* @option 0.9x
* @option 1x
* @option 1.1x
* @option 1.125x
* @option 1.16x
* @option 1.2x
* @option 1.25x
* @option 1.33x
* @option 1.5x
* @option 1.66x
* @option 2x
* @desc Message speed for base language. (Defined in Extra section for other languages.) Default is 1x.
* @default 1x
*
* @param Encryption
* @text Encryption Settings
* @desc Settings for using encrypted CTE language files instead of TXT files.
*
* @param LoadCTEFiles
* @text Load From CTE Files
* @parent Encryption
* @type select
* @option Load From TXTs
* @value false
* @option Load From CTEs
* @value true
* @option Load From CTEs, TXTs For Playtest
* @value txtplaytest
* @desc Whether to load encrypted CTE language files rather than plain TXT scripts. Use to obfuscate for public releases.
* @default false
*
* @param GenerateCTEFiles
* @text Generate CTE Files
* @parent Encryption
* @type boolean
* @desc Whether to, whenever a ".txt" language script is loaded, generate the equivalent encrypted ".cte" language file.
* @default false
*
* @param Launch
* @text Launch Actions
* @desc Settings for whether to perform certain actions at launch in playtest mode.
*
* @param ExportBaseOnLaunch
* @text Export Base Text
* @parent Launch
* @type boolean
* @desc Whether to, on launch, export base language text from data. Be careful not to overwrite files unwantedly.
* @default false
*
* @param BaseExportFilename
* @text Base Export Filename
* @parent ExportBaseOnLaunch
* @type text
* @desc File/folder name to export base language text to. If left blank, it will use the Base Language Code.
* @default
*
* @param AllInOneFile
* @text Export to Single File
* @parent ExportBaseOnLaunch
* @type boolean
* @desc Whether to export language files as a single all-in-one .txt file. Turn off to export as a folder using sub-settings.
* @default true
*
* @param AllInOneMaps
* @text All-In-One Maps
* @parent ExportBaseOnLaunch
* @parent AllInOneFile
* @type boolean
* @desc Whether to export all maps to a single "AllMaps.txt" rather than individual map files.
* @default false
*
* @param AllInOneCommons
* @text All-In-One Commons
* @parent ExportBaseOnLaunch
* @parent AllInOneFile
* @type boolean
* @desc Whether to export all common events to a single "AllCommons.txt" rather than individual event files.
* @default true
*
* @param AllInOneTroops
* @text All-In-One Troops
* @parent ExportBaseOnLaunch
* @parent AllInOneFile
* @type boolean
* @desc Whether to export all troops to a single "AllTroops.txt" rather than individual troop files.
* @default true
*
* @param AllInOneDatabase
* @text All-In-One Database
* @parent ExportBaseOnLaunch
* @parent AllInOneFile
* @type boolean
* @desc Whether to export all other databases to a single "AllDatabases.txt" rather than individual tab files.
* @default true
*
* @param ExportTableOnLaunch
* @text Export Reference Table
* @parent Launch
* @type boolean
* @desc Whether to, on launch, export a CSV file comparing all languages. Useful for checking mismatched text.
* @default false
*
* @param ExportIdenticalOnLaunch
* @text Log Identical Strings
* @parent Launch
* @type boolean
* @desc Whether to, on launch, log to IdenticalWarnings.txt with text that is identical in multiple languages.
* @default false
*
* @param Other
* @text Other Settings
* @desc Miscellaneous settings.
*
* @param MakeImageList
* @text Make Image List
* @parent Other
* @type boolean
* @desc During playtests, auto-generate TranslatedImages.txt for auto-loading of translated images outside of NW.js.
* @default true
*
* @param LoadAnyLanguageFiles
* @text Load Any Language Files
* @parent Other
* @type select
* @option Only Load Listed Languages
* @value false
* @option Load Listed + Additional Languages
* @value true
* @option Load Listed Always, Others If Not Playtest
* @value notinplaytest
* @desc Whether to load any non-listed languages found in languages folder, allowing users to easily put in new languages.
* @default false
*
* @param LockLanguage
* @text Lock to Single Language
* @parent Other
* @type boolean
* @desc Forces game to use Default Language Setting, and removes the language setting from the Options menu.
* @default false
*
* @param ForcePlaytestMode
* @text Force Playtest Mode
* @parent Other
* @type boolean
* @desc Act like it's playtest mode even in a release version. (File-related functions still require it be NW.js.)
* @default false
*
* @param ReloadKey
* @text Script Reload Key
* @parent Other
* @type select
* @option Disabled
* @value 0
* @option F1
* @value 112
* @option F2
* @value 113
* @option F3
* @value 114
* @option F4
* @value 115
* @option F5
* @value 116
* @option F6
* @value 117
* @option F7
* @value 118
* @option F8
* @value 119
* @option F9
* @value 120
* @option F10
* @value 121
* @option F11
* @value 122
* @option F12
* @value 123
* @desc Debug key during playtests to reload all language scripts. Hold to show actions menu. Default F10 (keycode 121).
* @default 121
*
* @param MessageDebugKey
* @text Message Debugger Key
* @parent Other
* @type select
* @option Disabled
* @value 0
* @option F1
* @value 112
* @option F2
* @value 113
* @option F3
* @value 114
* @option F4
* @value 115
* @option F5
* @value 116
* @option F6
* @value 117
* @option F7
* @value 118
* @option F8
* @value 119
* @option F9
* @value 120
* @option F10
* @value 121
* @option F11
* @value 122
* @option F12
* @value 123
* @desc Debug key during playtests to open message previewer. Press again in previewer to search. Default F11 (keycode 122).
* @default 122
*
* @param LogSetting
* @text Console Log Detail
* @parent Other
* @type select
* @option None
* @value 0
* @option Load/Export Messages
* @value 1
* @option Load/Export + Missing Translations
* @value 2
* @desc How much to log to the console. Level 1: Language file loading & exporting. Level 2: Include translation warnings.
* @default 2
*
* @help
* **********************************************************************
* *                vgperson's Custom Translation Engine                *
* **********************************************************************
*
* This plugin loads translation data from files in a "languages" folder,
* and will then automatically use appropriate text for the current language.
*
* Besides text from message/choice commands and database text,
* language files can also hold arbitrary user-added "extra" data
* to be referred to by plugin scripts or script commands.
*
* There are also a wide variety of other functions
* that can help assist with translation and checking for mistakes.
*
* For basic instructions on how to set things up and
* what most of the settings are for, read the Setup Procedure section.
* For details on all the different functions, read Feature Explanations.
*
* ***** Usage Notes *****
* Anyone is free to use this plugin for their game/translation projects
* and make modifications as necessary.
* Explicitly giving credit to me (vgperson) is appreciated.
* Please keep these usage notes and the Credits section intact,
* and be mindful about distributing language files that aren't yours.
*
*
* ======================================================================
*                            Setup Procedure
* ======================================================================
*
* 1. Add and enable this plugin in the Plugin Manager.
*
* Where you place it in the plugin list should usually only matter
* if you make plugins refer to its functions (i.e. CTE.getString()).
*
* If you put it at the very top, CTE will be initialized before anything,
* so you can safely directly edit plugins to refer to CTE functions,
* but may have issues if you add CTE code that refers to other plugins.
*
* Alternatively, you can place it at the bottom of the list,
* and override the definitions of plugin functions as necessary
* within CustomTranslationEngine.js itself.
*
* --------------------------------------------------
*
* 2. Set up the Language Codes list.
*
* These codes represent all of the supported languages for the game,
* in the same order you want them displayed in the Options menu.
*
* You should be able to add to or rearrange these at any time without issue.
*
* --------------------------------------------------
*
* 3. Set the Base Language Code and Default Language Setting.
*
* The Base Language Code is the language of the base game.
* When a player is playing in this language, the base game data will be used.
*
* The Default Language Setting is the language the game initially launches in.
* This is overridden by saved user configuration data (i.e. config.rpgsave),
* which is made once the player goes into the Options menu.
* If left blank, the default setting will be the Base Language.
*
* You can have language settings from a launcher such as Steam
* override the Default Language Setting if configured properly.
* (See Customizable Handlers section.)
*
* --------------------------------------------------
*
* 4. Set up core language settings for the base language.
*
* ***** Language Name (Base) *****
* Name of the base language as shown in the Options menu.
*
* ***** Language Option (Base) *****
* Text for the "Language" option in the Options menu in the base language.
*
* ***** Message Speed (Base) *****
* Message typing speed in base language. Default 1x (1 character per frame).
* If you're using another plugin that modifies message speed,
* speeds other than 1x may override its functionality, so be careful.
*
* Note that for languages other than the base language,
* these settings are defined in the Extra section of their language files.
* (See Core Language Settings section.)
*
* --------------------------------------------------
*
* 5. To start translating, enable Launch Actions > Export Base Text,
* then run the game to generate base language data.
*
* This will put text data for the Base Language in the "languages" folder,
* which can then be renamed to a different language code and translated.
* (Launch actions like this only run in playtest mode and shouldn't occur
* in releases, but you might want to disable them when not needed.)
*
* The exported data is named after the Base Language Code by default,
* but will use the Base Export Filename if one is specified.
*
* You can also export base game text via the Export Actions menu,
* accessed by holding down the Script Reload key (defaulf F10) in-game.
*
* ***** "Export to Single File" Settings *****
* By default, language text is exported to a single .txt file.
* If desired, you can have it split up across multiple files in a subfolder.
*
* If "Export to Single File" is on, all text will go in a single "XX.txt"
* (where XX is the Base Language Code or Base Export Filename).
* If "Export to Single File" is off, an "XX" folder will be made,
* which will contain multiple files based on the other settings.
*
* Having "All-In-One Maps" on will put all map data into "AllMaps.txt",
* whereas having it off will generate an individual file for every map.
* The same pattern applies for Common Events, Troops, and Databases,
*
* NOTE: These settings do NOT affect how language files are loaded.
* Rather, loading always prioritizes "all-in-one" files first,
* then looks for individual files if those do not exist.
*
* For example, if a single "XX.txt" exists for the language code,
* it will be loaded and any other files that may exist will be ignored.
* If it does not, however, the plugin will check for each all-in-one file
* (AllMaps.txt, AllCommons.txt, AllTroops.txt, AllDatabases.txt),
* and if one does not exist, looks for individual files of that type.
*
* ***** A Note On Extraneous Language Files ***** 
* For public releases, you only need to include
* language files for languages other than the Base Language.
* The Base Language just uses the text that exists in the game data,
* so it doesn't need its own external language files.
*
* If set up to load CTE files, you only need the ".cte"s for each language,
* and TXT language files/subfolders can be omitted for release.
* If you're not using CTEs, only the TXTs for each language are necessary.
*
* A TranslatedImages.txt file is only necessary if you're using
* alternate image loading and intend for the game to be played in-browser.
* ReferenceTable.csv and IdenticalWarnings.txt files
* are both purely for reference and can be omitted.
*
* Leaving extra files in won't cause any actual issues, but it may be a concern 
* if you don't want people looking through plain text or development data.
*
* --------------------------------------------------
*
* 6. (Optional) Configure other settings as you wish.
*
* ***** Encryption Settings (Load From / Generate CTE Files) *****
* While you can use TXT-format language files directly,
* when actually publishing the game, you may want that data
* to be a compressed, encrypted file instead of plain text.
* This can be accomplished by generating CTE files.
*
* If you enable "Generate CTE Files," then in playtest mode,
* an encrypted CTE file will be generated every time
* TXT language files are loaded in (to keep it up to date).
* Then, for release, you can enable "Load From CTE Files"
* to load language data from CTE files instead of TXTs.
*
* Using this option, you can include just the CTE files in your release.
* That said, it's recommended you hold onto the original TXT files.
* While it is possible to recreate the TXT files from a CTE file
* (by loading the CTE and using Export Reformatted Language Text),
* any comments that were included in the TXTs will be lost.
*
* You can export the latest CTEs anytime from the Export Actions menu,
* accessed by holding down the Script Reload key in-game.
*
* ***** Make Image List *****
* Makes the game auto-generate the file TranslatedImages.txt,
* which lists all image files that have translated versions in each language.
* This file is only needed if the game is intended to be played in-browser.
* (See Alternate Image Loading.)
*
* ***** Load Any Language Files *****
* This setting helps allow players to easily add languages beyond
* what is specified in the Language Codes list.
*
* If enabled, after loading "built-in" languages, the plugin will check for
* any other potential language files/subfolders in the languages folder.
* If they seem valid, they will be loaded and appended to the language list.
*
* A CTE file is considered valid as long as it parses without issues.
* A TXT file is considered valid if it has a command definition or the like.
* A subfolder is considered valid if it has at least one valid TXT file in it
* that uses a recognized name. (Map001, AllDatabases, Actors, etc.)
*
* Be careful about leaving excess TXT/CTE files in the language folder,
* as it could result in unwanted language options showing up.
* In particular, reformatted language files are liable to be loaded
* as new languages (and even generate their own CTEs, if enabled).
* If this proves annoying, the "Others If Not Playtest" option will
* disable the loading of additional languages while in playtest mode.
*
* ***** Lock to Single Language *****
* If you want to release the game in one specific language and not offer
* the option to switch languages, this setting will force the language to
* the Default Language Setting and not add the in-game language option.
*
* This can be used for any language code, including the Base Language.
* It can be helpful if you want to release a base-language-only version,
* but are unable to just remove the CTE plugin since other code refers to it.
*
* ***** Force Playtest Mode *****
* If, for whatever reason, you want this plugin's "playtest-only" functions
* to be usable even outside of playtesting, you can enable this setting
* to make it always behave like a playtest.
* Be sure to turn this off for releases if you don't want it enabled.
*
* Note that this simply overrides the playtest checks in THIS plugin,
* and will not enable other playtest features such as the debug console.
* Also, any file-related functions (like export functions) still require
* that you be in NW.js (AKA a standalone executable).
*
* ***** Script Reload Key *****
* A debug key for reloading all language scripts mid-game.
* Only usable in playtest mode. Default is F10 (keycode 121).
*
* Pressing the Reload Key while a message box is up
* will re-display that message using the latest data.
*
* If you press the Reload Key with Load From CTE Files enabled,
* it will always load TXT files, then re-export them as CTE files.
*
* Holding the Reload Key down in-game (while not in a scene) will display
* the Export Actions menu, which lets you perform the following:
* - Export text for the Base Language (same as launch action)
* - Export the Reference Table (same as launch action)
* - Log identical text between languages (same as launch action)
* - Generate .cte files from the latest .txt data (done on launch if enabled)
* - Export "reformatted" .txt language files for current language
* - Open the Message Typer for immediate message previewing
*
* ***** Message Debugger Key *****
* A debug key that opens a previewer for all messages in current language.
* Only usable in playtest mode. Default is F11 (keycode 122).
* Press the key again while the message debugger is open to search.
*
* ***** Console Log Detail *****
* How much console logging the plugin should do.
*
* None: Nothing will be logged to the console.
*
* Level 1 (Load/Export Messages):
* Logs info about files being loaded or exported.
*
* Level 2 (Load/Export + Missing Translations):
* In addition to Level 1 log messages,
* warns about missing or inconsistent translations.
*
*
*
* ======================================================================
*                          Feature Explanations
* ======================================================================
*
* ******************** FEATURE SECTION OVERVIEW ********************
*
* --- Command Text Replacement
* Info on the basic functionality of replacing text in commands.
*
* --- Database Text Replacement
* Similar to the above, but with minor differences in how databases work.
*
* --- Notes On Special Lookups
* Special cases where translations must be accompanied by source strings.
*
* --- Translating Strings in Variables
* Localizing strings in variables without directly altering them.
*
* --- Core Language Settings
* Important settings for each language, included in the Extra database section.
*
* --- Defining Custom Values
* Making your own language-based values for use by plugins and such.
*
* --- Alternate Image Loading
* Setting things up to auto-load translated images for the current language.
*
* --- Language-Conditional Pages
* Making event pages that only appear/run in certain languages.
*
* --- Command Text Conditions
* Adding new conditions for text without having to manually split commands.
*
* --- Language Comparison Table
* A reference resource for comparing languages side by side.
*
* --- Logging Identical Strings
* A function to help locate text that may not be translated yet.
*
* --- Ignoring Text Issues
* If text need not be translated, indicate where you want to ignore warnings.
*
* --- Message Debugger Menu
* A testing menu for previewing all translated messages in-game.
*
* --- Message Typer Window
* A debug window for previewing arbitrary messages in-game.
*
* --- Reformatting Language Files
* An export function to rewrite language scripts into a standard format.
*
* --- Customizable Handlers
* Guides for how to customize this plugin to tailor it to a specific game.
*
*
*
* ----------------------------------------------------------------------
*  Command Text Replacement
* ----------------------------------------------------------------------
*
* Maps, Common Events, and Troop pages are structured as
* a list of all commands which contain text to be translated.
*
* Current map/file is set by markers in the format "=MapX=" or "=File=".
* Current event is set by markers in the format "*EventX*".
* Current page is set by markers in the format "-PageX-".
*
* (*CommonX* is used instead of *EventX* for Common Events
* (though either works), and *TroopX* is used within Troops.
* Also, common events don't have multiple pages.
* If using individual files instead of a single language file,
* some initial values are assumed based on the file; for instance,
* Common0001.txt has an implicit "=CommonEvents=" and "*Common1*".)
*
* Within a section, commands are given in a format like this:
* #Message#
* First line of message
* Second line of message
* ##
*
* The header, #Message#, indicates the type of command.
* The lines that follow make up the text content of the command.
* The terminator ## ends the command.
*
* Commands of the same type in the same "domain" (i.e. map page)
* go into an ordered list of command translations. This becomes the order
* in which they match to commands of that type in-game.
*
* Example:
* --------------------------------------------------
* [Event commands]
* Show Text: Hello!
* Wait: 10 frames
* Show Choice: Yes / No
* (arbitrary amount of non-Show Text commands)
* Show Text: Hello again!
* --------------------------------------------------
* [languages/EN.txt]
* #Message#
* Hello!
* ##
*
* #Choice#
* Yes
* No
* ##
*
* #Message#
* Hello again!
* ##
* --------------------------------------------------
*
* In this way, even if there are changes to the surrounding commands,
* you only have to change the language scripts
* if the order of text-containing commands changes,
* or if the map numbers, event IDs, or page numbers change.
*
* Also, a variety of contextual information is included on export,
* such as event names, coordinates, and choice branch names.
* This information is ignored when scripts are read;
* it is not critical to functionality and affects nothing.
*
* Similarly, outside of command content, as long as section markers are intact,
* you can add any text you wish as a "comment" and it will be ignored.
* (Example: "#Message# comment text" still reads as a Message command header.)
*
* An additional feature: If you want to skip a Message textbox entirely,
* define its translation as the following string:
* <<REMOVE>>
*
*
* ----------------------------------------------------------------------
*  Database Text Replacement
* ----------------------------------------------------------------------
*
* Database text uses a similar format to command text.
* The start of each database is marked by "=DatabaseName=",
* and database entries (if it's made up of entries) are marked by "*EntryX*".
*
* Fields within each entry, like "#Name#", are formatted just like commands.
* The only difference is that there's only ever one of each field per entry.
*
*
* ----------------------------------------------------------------------
*  Notes On Special Lookups
* ----------------------------------------------------------------------
*
* In cases where text is stored within the save file,
* this plugin opts to only ever store text from the Base Language,
* but localize it to the current language when displaying it to the player.
* In order to create original-to-translation "lookups" to accomplish this,
* these cases are formatted a bit differently in the scripts.
*
* The DisplayName field for maps uses a special format
* which includes the original text ("#DisplayName:ORIGINAL#"),
* to help support plugins that show map names on the file menu.
* *Do not alter the original text* - it will break that functionality!
*
* NameChange, NicknameChange, and ProfileChange commands work similarly;
* again, *altering the original text will break functionality.*
* Note that values from the fields in the Actor database also go into
* the name/nickname/profile lookups, but need not specify original text
* since they can automatically map to the base data.
*
*
* --------------------------------------------------------------------------
*  Translating Strings in Variables
* --------------------------------------------------------------------------
*
* String in variables can also be translated with a lookup-based approach.
* In the "Variables" section, you can define strings and their translations,
* and those strings will be converted for display purposes only.
*
* The plugin will attempt to locate as many string variable assignments
* as it can for export, but you may have to add some manually.
*
* The format for a definition is a header (either ## or #[options]#),
* followed by a line for the original, followed by a line for the translation.
*
* Example:
* ##
* Original text
* Translated text
*
* This would make it so that whenever a variable contains the exact,
* case-sensitive string "Original text", it will be displayed as
* "Translated text" in the language where this rule is defined.
* This should not affect any inner workings, and since the data keeps
* the original string, no problems should occur from switching languages.
*
* If you only want a translation to be applied to specific variables
* (for instance, a case where you want the same text to be
* translated differently for different variables), you can specify
* one or more variables to target (use commas for a list) in the header.
*
* Example:
* #V1,V2#
* Original text
* Translated text
*
* The above rule would only be applied to Variable 1 or Variable 2.
* Specifically-targeted rules take priority over general ones.
*
* You can also use regular expressions if you put "regex" in the header.
* Regular expressions must match the entire string, not just part of it.
* Captured groups in parentheses can be used in the translated text
* by adding zero-based numbers in curly braces, i.e. {0} {1} {2}.
*
* Examples:
* #regex#
* First (.*), then (.*)
* {0} is first, {1} is second
*
* #V1,regex#
* This is (.*), that is (.*)
* That is {1}, this is {0}
*
* The latter rule would swap the order of the captured words.
*
* ***** Notes On Extending Functionality ***** 
* This plugin only applies variable translation rules
* when converting escape characters for display in messages.
* So if you use plugins that display string variables
* without going through the convertEscapeCharacters() function,
* you must make modifications to localize those strings.
*
* If a plugin refers to the function $gameVariables.value(number),
* you can force it to be localized simply by adding a "true" argument
* (i.e. "$gameVariables.value(1, true)").
*
* Alternatively, if you set "CTE.localizeVariableOverride" to true,
* any calls to the $gameVariables.value function will be localized.
* But you should be careful to only use this in a temporary manner,
* setting it back to false as soon as the relevant code finishes;
* if you don't, it may cause issues like localized strings being
* written to save data and no longer changing to match language.
*
*
* --------------------------------------------------------------------------
*  Core Language Settings
* --------------------------------------------------------------------------
*
* The "Extra" database section in the language scripts contains
* some miscellaneous settings that each language should define.
* Note that the Base Language's definitions for these are instead
* given through the plugin settings.
*
* ***** LanguageDisplayName *****
* Name of the language as shown in the Options menu.
* If not defined, the language code itself will be used.
*
* ***** LanguageOptionName *****
* Text for the "Language" option in the Options menu.
* If not defined, the Base Language version will be used.
*
* ***** DefaultFont *****
* Default font for this language. Should match font-family definitions
* in gamefont.css, or use specific font names; the former is more reliable.
* Can leave out if you just want this language to keep the base font.
*
* ***** MessageSpeed *****
* Message typing speed in this language. Default 1x (1 character per frame).
* Only specific speeds are supported; refer to the Message Speed (Base) setting
* or the associated comment (included in base export) for the possible options.
* Note that if you're using another plugin that alters message typing/speed,
* non-1x speeds may either override its functionality or not work properly.
*
*
* ----------------------------------------------------------------------
*  Defining Custom Values
* ----------------------------------------------------------------------
*
* Generated scripts come with a placeholder in the "Extra" section
* for user-defined variables. You can define custom values in Extra
* to help localize any kind of text not otherwise included.
*
* Define as many language-relevant values as you wish
* using the format "VariableName=value".
* (String values do not need to be contained in quotes.)
* These can be retrieved anywhere using the functions
* CTE.getString("VariableName") and CTE.getNumber("VariableName").
*
* As an example, say you want the font size in a plugin script
* to be different depending on the current language.
* While this could be accomplished without Extra definitions,
* it can often be more convenient to use them.
*
* Method 1: Directly checking the current language in the script.
* --------------------------------------------------
* [js/plugins/Plugin.js]
* if (ConfigManager.isLanguage("JP")) contents.fontSize = 24;
* else if (ConfigManager.isLanguage("EN")) contents.fontSize = 20;
* --------------------------------------------------
*
* Method 2: Defining an value in the Extra section and referring to it.
* --------------------------------------------------
* [languages/EN.txt]
* =====Extra=====
* PluginFontSize=20
* --------------------------------------------------
* [js/plugins/Plugin.js]
* contents.fontSize = CTE.getNumber("PluginFontSize", 24);
* --------------------------------------------------
*
* The second argument for getNumber in Method 2 is the default value,
* used for the Base Language, or if no value is found for the current language.
*
* CTE.getString() works the same way, but treats the value as a string.
* (Or more accurately, getNumber() automatically converts to an integer.)
*
* Example:
* --------------------------------------------------
* [languages/EN.txt]
* =====Extra=====
* GlossaryOptionName=Dictionary
* --------------------------------------------------
* [js/plugins/Plugin.js]
* contents.drawText(CTE.getString("GlossaryOptionName", "Glossary"), 0, 0);
* --------------------------------------------------
*
* This displays "Dictionary" in English and "Glossary" in the Base Language,
* or any other language that does not define GlossaryOptionName.
*
*
* ----------------------------------------------------------------------
*  Alternate Image Loading
* ----------------------------------------------------------------------
*
* For cases where images differ depending on the language
* (containing text that needs translation, generally),
* this plugin can automatically load the appropriate image
* for the current language.
*
* Method 1:
* Within the appropriate image folder (i.e. "pictures", "parallaxes"),
* create a subfolder for each non-base language code (i.e. "EN").
* Place translated images in those language subfolders,
* using the exact same filename as the base image,
* and they will be used automatically for that language.
*
* Method 2:
* If you name an image "name_XX", where XX is the Base Language Code,
* this plugin will automatically try to load the equivalent image
* for the current language code (i.e. "name_YY").
*
* Example:
* If there is a Show Picture command that displays the image "test_JP",
* when playing in English (language code EN), it will display "test_EN".
* (If no image named "test_EN" exists, it will fall back on "test_JP".)
*
* --------------------------------------------------
* WARNING
* Because only NW.js mode (standalone executable) has the ability to
* quickly check whether a file exists, this feature requires extra measures
* to function when the game is played in a browser.
*
* Make sure the "Make Image List" setting is enabled,
* then run the game in playtest mode (which uses NW.js).
* This auto-generates TranslatedImages.txt in the languages folder,
* a list of translated images that exist for each language.
* Besides generating on launch, it should also update
* if a new translated image gets loaded mid-game.
*
* As long as TranslatedImages.txt is up to date,
* image loading functionality should work the same in-browser.
* --------------------------------------------------
*
* Note that Alternate Image Loading applies to any kind of image,
* so it can even be used for things like tile or character graphics.
* However, not everything may update immediately on language change.
* (May be fixable with language refresh handler; see Customizable Handlers.)
*
*
* ----------------------------------------------------------------------
*  Language-Conditional Pages
* ----------------------------------------------------------------------
*
* If you need to do something complicated with events and language,
* like having a whole different event layout based on language,
* you can require a certain language for an event page to trigger.
*
* Add a comment to the top of the page that includes
* "<CTELanguage:EN>", and that page will only trigger/be visible in English.
* You can also use commas to specify multiple languages:
* "<CTELanguage:JP,EN>" will make it trigger in Japanese or English.
*
*
* ----------------------------------------------------------------------
*  Command Text Conditions
* ----------------------------------------------------------------------
*
* There may be times when you want to split a command
* into two or more cases based on some condition,
* but don't want to have to add a branch in the code itself,
* particularly since it may not be needed in every language.
* (A common instance of this is plurality for variable amounts.)
*
* You can use the syntax "＠if [condition]" and "＠else" inside a command
* to define conditions and the text to use if that condition is met.
*
* (Note: For technical reasons, this plugin description cannot use
* a normal "at sign" character. Thus, a "full-width" one is used here,
* but conditions allow either a normal or full-width "at sign" to be used.
* Sorry for the confusion.)
*
* Be aware that the FIRST satisfied condition in the list will be used,
* meaning higher-priority conditions should be given first.
* If no conditions at all are met, Base Language text will be used,
* so you should generally always define an "＠else" case.
*
* Example:
* #Message#
* ＠if V[1] = 1
* There is \V[1] item.
* ＠if V[1] >= 100
* There are a lot of items.
* ＠if V[1] >= 200
* There are too many items.
* ＠else
* There are \V[1] items.
* ##
*
* Variable 1 has value 1 -> "There is 1 item."
* Variable 1 has value 2 -> "There are 2 items."
* Variable 1 has value 99 -> "There are 99 items."
* Variable 1 has value from 100 to 199 -> "There are a lot of items."
* Variable 1 has value 200 or greater -> "There are a lot of items."
* ("V[1] >= 100" is reached and met first, so "V[1] >= 200" is never reached.)
*
* Accepted syntax for conditions:
* "S[##]" is converted to the value of Switch ##.
* "V[##]" is converted to the value of Variable ##.
* Numbers and string literals remain the same.
* "true"/"on" and "false"/"off" can be used for checking switches.
* Putting ! at the start of something will negate it if possible.
*
* Valid comparisons:
* Equal (=== or == or =)
* Not equal (!== or !=)
* Greater than or equal (>=)
* Less than or equal (<=)
* Greater than (>)
* Less than (<)
* If no comparison is stated, it checks if the value is true.
* (Example: "＠if S1" -> Switch 1 is on. "＠if !S1" -> Switch 1 is off.)
*
*
* ----------------------------------------------------------------------
*  Language Comparison Table
* ----------------------------------------------------------------------
*
* For the purposes of comparing languages side-by-side,
* you can export a "ReferenceTable.csv" file that compiles
* all base data text and corresponding language file text in a table.
* 
* It will be generated on launch in playtest mode
* if you enable Launch Actions > Export Reference Table,
* or you can choose to export it from the Export Actions menu
* (hold down the Script Reload key in-game in playtest mode).
*
* If any language files are missing text that exists in the base data,
* they will show as "<<<NOT FOUND>>>" in the CSV table,
* and a translation warning (if enabled) will be printed to the console.
*
* Similarly, if language files have too many commands
* compared to the base data, the base data column will read
* "<<<NOT FOUND IN BASE>>>" and a warning will be given (if enabled).
* This can help locate issues when the base data shifts around.
*
*
* ----------------------------------------------------------------------
*  Logging Identical Strings
* ----------------------------------------------------------------------
*
* The plugin can compare text in each language with its counterparts,
* and check if that text is identical in two or more languages,
* indicating that it may not have been translated.
* If anything is found, it is logged to "IdenticalWarnings.txt."
*
* This check will run on launch in playtest mode
* if you enable Launch Actions > Log Identical Strings,
* or you can choose to run it from the Export Actions menu
* (hold down the Script Reload key in-game in playtest mode).
*
* It can return many false positives in cases where
* there's good reason for text to just be the same,
* but it can help double-check that no text was overlooked.
* (The next section explains a way to cut down on false positives.)
*
*
* ----------------------------------------------------------------------
*  Ignoring Text Issues
* ----------------------------------------------------------------------
*
* If you know certain text is unused and need not be translated,
* you can specify areas to be "ignored" in a language script file.
* Ignored elements will be omitted from Identical String logs,
* and show as "IGNORED" instead of "NOT FOUND" in the Reference Table.
*
* (Naturally, if you want to be able to use identical string logging
* for its primary purpose of tracking down untranslated text,
* you should make very sure that you only ignore things
* that are definitely unused/unnecessary!)
*
* In most cases, you can simply add the line "%ignore"
* just after the marker for the section you want to ignore.
* The scope will be assumed based on file/event/page markers.
*
* Keep in mind that "ignoring" a section just means
* ignoring *warnings* if anything is identical or missing;
* it does not "invalidate" any text that you DO provide in that section.
* Thus, you're free to ignore a wide range and include only what is needed.
*
* Example: If only a handful of Terms are actually used by the game,
* you can add an "%ignore" line after the "=Terms=" header,
* and then include only the fields that need translating.
* You will not be bothered about the absence of other fields.
*
* Note, however, that missing translations encountered in-game
* will always be warned about (if those warnings are enabled).
* This is because the fact they can be encountered in-game
* indicates that they should have an explicit translation given.
*
* The following are some more specific forms of %ignore
* that may be convenient in certain cases.
*
* %ignorefile [file]
* Ignores issues within the given file.
* Valid files: Map##, CommonEvents, Troops, databases (Actors/Skills/etc.)
* Can also specify a range of maps with "MapXX-YY".
* If no file is given, the current file is assumed.
*
* %ignoreevent [event]
* Ignores issues within the given event in the current map.
* Can also specify a range of events with "XX-YY".
* If no event is given, the current event is assumed.
*
* %ignorepage [page]
* Ignores issues within the given page in the current event.
* Can also specify a range of pages with "XX-YY".
* If no page is given, the current page is assumed.
*
* %ignorecommand commandname [scope]
* Ignores issues for any instance of the given command name.
* Valid scopes: File, Event, Page
* If no scope is given, it is assumed based on file/event/page markers.
*
* %ignoreentry [entry]
* Ignores issues within given entry in the current database.
* Can also specify a range of entries with "XX-YY".
* If no entry is given, the current entry is assumed.
*
* %ignorefield fieldname
* Ignores issues for any instance of the given database field.
* This applies to all entries in the current database.
*
* %ignorethis
* Put on same line as a command/field header (i.e. "#Message# %ignorethis")
* to ignore warnings for that command/field only.
*
*
* ----------------------------------------------------------------------
*  Message Debugger Menu
* ----------------------------------------------------------------------
*
* In playtest mode, you can press the Message Debugger Key
* (if enabled; default F11) to open a message preview menu.
* This presents a list of all maps, common events, and troops
* which contain Message commands in the current language.
* You can then go in and select a message to preview.
*
* If you press the Message Debugger Key while the menu is open,
* it opens a search box to search the current list for a string.
*
* The language file is reloaded regularly while navigating the menu,
* allowing you to edit and quickly check messages.
*
* Message display settings for this menu can be customized
* by editing functions (see Customizable Handlers).
*
*
* ----------------------------------------------------------------------
*  Message Typer Window
* ----------------------------------------------------------------------
*
* Besides text in the language scripts, this plugin also provides
* a way to preview arbitrary messages in-game.
*
* From the Export Actions menu (hold down the Script Reload key
* in-game in playtest mode), you can open the Message Typer sub-window,
* which has a textbox you can type anything into and then preview
* using an in-game message window.
*
* Press Shift+Enter to enter line breaks.
* By default, text will type instantly instead of typing out,
* and if you edit the textbox while a preview message window is up,
* it will automatically update to show the new text.
* You can change these settings by clicking the radio buttons.
*
*
* ----------------------------------------------------------------------
*  Reformatting Language Files
* ----------------------------------------------------------------------
*
* This plugin offers a function to "reconstruct" language scripts;
* that is, re-export them in the exact format of a Base Language script,
* but keeping the actual text content from the given language.
*
* This can generally help you keep your language scripts "clean,"
* updating old comment info and removing errant linebreaks or symbols.
* It can be particularly useful if you make changes to context-aiding
* script comments added by the commandExportHandler functions.
* Additionally, by changing your Base Text Export settings,
* reformatting can split up all-in-one language files, or vice versa.
*
* From the Export Actions menu (hold down the Script Reload key
* in-game in playtest mode), you can re-export the current language's data
* in the same format as an up-to-date base text export,
* but using the latest text data for that language.
* It will be saved using the file/folder name "XX (Reformatted)"
* so as not to accidentally overwrite the original language files.
*
* Similar to the Reference Table, non-ignored text that is
* not found in the language data shows as "<<<NOT FOUND>>>".
* Meanwhile, excess commands get a comment of "<<<NOT FOUND IN BASE>>>",
* and their headers are converted from "#Message#" to "_Message_"
* to make it clear that text is not currently getting used in-game.
*
* Any comments not included as part of base text export will be lost,
* and the Variables and Extra sections in particular may
* have their order altered or otherwise become less readable.
* You may want to manually copy these over to the reformatted files.
*
*
* ----------------------------------------------------------------------
*  Customizable Handlers
* ----------------------------------------------------------------------
*
* The plugin code includes a few empty handler functions,
* intended to be customized to suit the needs of a specific game.
* You can either directly edit the content of the functions,
* or override them in your own plugin (loaded after the CTE plugin).
*
* ***** CTE.commandExportHandlerPrefix(command) *****
* ***** CTE.commandExportHandlerPostfix(command) *****
* To aid in translating, you may want more contextual information in scripts.
* These help you expand the script export function relatively easily.
*
* These functions get called for every command in a page,
* and are passed the command object itself as an argument.
* Based on "command.code" and "command.parameters",
* you can add export text for more commands.
* (Prefix goes before existing command text, Postfix comes after.)
*
* Example:
* Suppose you want to include information on the face graphics
* used in message boxes, to make it clear who's talking.
* This would be part of Command 101 (Show Text),
* which the base plugin already handles the message part of,
* but you can append this additional information as a prefix.
*
* CTE.commandExportHandlerPrefix = function(command) {
*    if (command.code == 101) { // Show Text
*       switch (command.parameters[0]) { // Face graphic filename
*       case "Actor1":
*          switch (command.parameters[1]) { // Face index
*             case 0: return "{Harold}\n\n";
*             case 1: return "{Therese}\n\n";
*             case 2: return "{Marsha}\n\n";
*             case 3: return "{Lucius}\n\n";
*             case 4: return "{...}\n\n;
*             case 5: return "{...}\n\n;
*             case 6: return "{...}\n\n;
*             case 7: return "{...}\n\n;
*          }
*          break;
*       case "Actor2":
*          switch (command.parameters[1]) { // Face index
*             // etcetera
*          }
*          break;
*       }
*    }
*    return ""; // Nothing to write
* };
*
* ***** CTE.languageRefreshHandler() *****
* This handler is called whenever the language changes.
* If something using language-based data does not update automatically,
* you can have this function call whatever necessary to make it refresh.
*
* ***** CTE.messageDebuggerPreviewTextHandler(message) *****
* This handler is called when listing messages in the Message Debugger.
*
* Messages are processed into "preview text" for display in the list,
* which includes removal of linebreaks and command codes like \C[X].
* If you want to remove additional command codes added by plugins,
* you can do so by processing the message text here before returning it.
* (The commented code gives an example for removing "\yourcodehere[___]".)
*
* ***** CTE.messageDebuggerMessageSettingsHandler(message, source) *****
* ***** CTE.messageDebuggerMessageSettingsPostHandler() *****
* The first is called before previewing a message with the Message Debugger,
* and the second is called after closing a previewed message.
*
* The first handler can set up various message settings before display,
* such as window type or position, or show a textbox background picture.
* (The default function shows an example for setting background type.)
* The second handler is generally for post-message cleanup,
* such as erasing pictures shown by the first handler.
*
* The first handler is passed the message content and the source,
* since these may be relevant for determining display settings.
* (Source is given as "map##", "commonevent##", or "troop##",
* where ## is the map number, common event number, or troop number.)
*
* ***** CTE.languageCodeFromExternalAPI() *****
* Handler to integrate external language setting via an API such as Steam.
*
* If this function returns a valid language code, it takes priority
* over Default Language as the language the game first launches in.
* Be sure to edit the language codes being returned
* if they don't match the language codes you're using.
*
* The default function should work for a few Steam API plugins,
* but it is theoretically modifiable for other launchers/APIs
* that have external language settings.
*
*
* ======================================================================
*                                Credits
* ======================================================================
*
* Created by vgperson.
*
* Special thanks to SumRndmDde's Translation Engine plugin,
* which was partially referred to for the creation of this plugin.
*
* Current Version: 1.00
*/

/******************************
USER SETTINGS
******************************/

var CTE = CTE || {};

CTE.tryParseList = function(json, defaultResult = []) {
	try {
		var result = JSON.parse(json);
		if (result.length == 0) return defaultResult;
		return result;
	}
	catch (e) {
		return defaultResult;
	}
};

CTE.tryParseBoolean = function(json, defaultResult = false) {
	try {
		return JSON.parse(json.toLowerCase());
	}
	catch (e) {
		return defaultResult;
	}
};

// Return whether game is in playtest mode, overriding with force-playtest setting.
CTE.isPlaytest = function() {
	return CTE.ForcePlaytestMode || (Utils.isNwjs() && Utils.isOptionValid("test"));
}

var pluginParams = PluginManager.parameters("CustomTranslationEngine");

CTE.LanguageCodes = CTE.tryParseList(pluginParams["LanguageCodes"], ["EN"]);
CTE.BaseLanguage = pluginParams["BaseLanguage"];
CTE.DefaultLanguage = pluginParams["DefaultLanguage"];

CTE.BaseLanguageDisplayName = pluginParams["BaseLanguageDisplayName"] || "English";
CTE.BaseLanguageOptionName = pluginParams["BaseLanguageOptionName"] || "Language";
CTE.BaseMessageSpeed = pluginParams["BaseMessageSpeed"] || "1x";

CTE.ForcePlaytestMode = CTE.tryParseBoolean(pluginParams["ForcePlaytestMode"]);

if (pluginParams["LoadCTEFiles"] === "txtplaytest") { CTE.LoadCTEFiles = !CTE.isPlaytest(); }
else { CTE.LoadCTEFiles = CTE.tryParseBoolean(pluginParams["LoadCTEFiles"]); }
CTE.GenerateCTEFiles = CTE.tryParseBoolean(pluginParams["GenerateCTEFiles"]);

CTE.ExportBaseOnLaunch = CTE.tryParseBoolean(pluginParams["ExportBaseOnLaunch"]);
CTE.BaseExportFilename = pluginParams["BaseExportFilename"];

CTE.AllInOneFile = CTE.tryParseBoolean(pluginParams["AllInOneFile"], true);
CTE.AllInOneMaps = CTE.tryParseBoolean(pluginParams["AllInOneMaps"]);
CTE.AllInOneCommons = CTE.tryParseBoolean(pluginParams["AllInOneCommons"], true);
CTE.AllInOneTroops = CTE.tryParseBoolean(pluginParams["AllInOneTroops"], true);
CTE.AllInOneDatabase = CTE.tryParseBoolean(pluginParams["AllInOneDatabase"], true);

CTE.ExportTableOnLaunch = CTE.tryParseBoolean(pluginParams["ExportTableOnLaunch"]);
CTE.ExportIdenticalOnLaunch = CTE.tryParseBoolean(pluginParams["ExportIdenticalOnLaunch"]);

CTE.MakeImageList = CTE.tryParseBoolean(pluginParams["MakeImageList"], true);
if (pluginParams["LoadAnyLanguageFiles"] === "notinplaytest") { CTE.LoadAnyLanguageFiles = !CTE.isPlaytest(); }
else { CTE.LoadAnyLanguageFiles = CTE.tryParseBoolean(pluginParams["LoadAnyLanguageFiles"]); }
CTE.LockLanguage = CTE.tryParseBoolean(pluginParams["LockLanguage"]);
CTE.ReloadKey = pluginParams["ReloadKey"];
CTE.MessageDebugKey = pluginParams["MessageDebugKey"];
CTE.LogSetting = pluginParams["LogSetting"];

// Try to make unusual settings something valid.
if (!CTE.LanguageCodes.includes(CTE.BaseLanguage)) {
	var baseFound = false; // Check case-insensitively as well
	for (var i = 0; i < CTE.LanguageCodes.length; i++) {
		if (CTE.LanguageCodes[i].toLowerCase() === CTE.BaseLanguage.toLowerCase()) {
			baseFound = true;
			break;
		}
	}
	if (!baseFound) {
		CTE.BaseLanguage = CTE.LanguageCodes[0];
	}
}

if (!CTE.LanguageCodes.includes(CTE.BaseLanguage)) {
	var defaultFound = false; // Check case-insensitively as well
	for (var i = 0; i < CTE.LanguageCodes.length; i++) {
		if (CTE.LanguageCodes[i].toLowerCase() === CTE.DefaultLanguage.toLowerCase()) {
			defaultFound = true;
			break;
		}
	}
	if (!defaultFound) {
		CTE.DefaultLanguage = CTE.BaseLanguage;
	}
}

if (CTE.ReloadKey < 0) {
	CTE.ReloadKey = 0;
}
if (CTE.MessageDebugKey < 0) {
	CTE.MessageDebugKey = 0;
}

CTE.languagesLoaded = false;
CTE.launchLoadPending = true;
CTE.launchExportPending = true;
CTE.launchImageListPending = true;

CTE.localizeVariableOverride = false;

CTE.preloadedFonts = [];
CTE.translatedImageList = {};

CTE.usingCommonEvents2 = false;

$CTETemp = {};

/******************************
FILE LOADING FUNCTIONS
******************************/

// Loads a file into CTE.fileText, returning true if file exists and load was successful.
CTE.load = function(localPath) {
	CTE.fileText = "";
	CTE.lastLoadedFile = "";
	if (Utils.isNwjs()) {
		try {
			var fs = require("fs");
			var path = require("path");
			var fullPath = path.join(path.dirname(process.mainModule.filename), localPath);
			
			if (fs.existsSync(fullPath)) {
				CTE.fileText = fs.readFileSync(fullPath, { encoding: "utf8", flag: "r" })
				CTE.lastLoadedFile = fullPath;
				return true;
			}
			else {
				return false;
			}
		}
		catch (e) {
			CTE.warn("Failed to load " + localPath + ". " + e.message);
			return false;
		}
	}
	else {
		CTE.loadStatus = 0;
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", localPath, false);
		xhr.onload = function() {
			if (xhr.status < 400) {
				CTE.fileText = xhr.responseText;
				CTE.loadStatus = 1;
			}
			else {
				CTE.warn(xhr.status + " error loading " + localPath + ".");
				CTE.loadStatus = -1;
			}
		};
		xhr.onerror = function() {
			CTE.warn(xhr.status + " error loading " + localPath + ".");
			CTE.loadStatus = -1;
		};
		xhr.send();
		
		return CTE.loadStatus == 1;
	}
};

// Check if a directory exists. Not possible outside of NW.js, so assume true there.
CTE.directoryExists = function(localPath) {
	if (Utils.isNwjs()) {
		var fs = require("fs");
		var path = require("path");
		var fullPath = path.join(path.dirname(process.mainModule.filename), localPath);
		return fs.existsSync(fullPath);
	}
	else {
		return true;
	}
};

/******************************
DATA SETTERS/GETTERS
******************************/

// Set language data for given language.
CTE.setDataForLanguage = function(language, category, subcategory, value) {
	CTE.data = CTE.data || {};
	CTE.data[language] = CTE.data[language] || {};
	CTE.data[language][category] = CTE.data[language][category] || {};
	CTE.data[language][category][subcategory] = value;
};

// Get language data for current language.
CTE.getData = function(category, subcategory) {
	return CTE.getDataForLanguage(ConfigManager.getLanguage(), category, subcategory);
};

// Get language data for given language.
CTE.getDataForLanguage = function(language, category, subcategory) {
	if (typeof category === "string") category = category.toLowerCase();
	if (typeof subcategory === "string") subcategory = subcategory.toLowerCase();
	
	if (CTE.dataExistsForLanguage(language, category, subcategory)) {
		return CTE.data[language][category][subcategory];
	}
	return null;
};

// Return whether the language data exists for current language.
CTE.dataExists = function(category, subcategory) {
	return CTE.dataExistsForLanguage(ConfigManager.getLanguage(), category, subcategory);
};

// Return whether the language data exists for given language.
CTE.dataExistsForLanguage = function(language, category, subcategory) {
	if (typeof category === "string") category = category.toLowerCase();
	if (typeof subcategory === "string") subcategory = subcategory.toLowerCase();
	
	if (typeof CTE.data === "undefined"
	|| typeof CTE.data[language] === "undefined"
	|| typeof CTE.data[language][category] === "undefined"
	|| typeof CTE.data[language][category][subcategory] === "undefined") {
		return false;
	}
	return true;
};

// Adds to command language data list for current language.
CTE.addCommandDataForLanguage = function(language, fileID, eventNum, pageNum, commandName, commandObject) {
	var commandGroupId = eventNum + "-" + pageNum + "-" + commandName;
	CTE.data = CTE.data || {};
	CTE.data[language] = CTE.data[language] || {};
	CTE.data[language][fileID] = CTE.data[language][fileID] || {};
	CTE.data[language][fileID][commandGroupId] = CTE.data[language][fileID][commandGroupId] || [];
	CTE.data[language][fileID][commandGroupId].push(commandObject);
};

// Get command language data for current language, evaluating conditions for text.
CTE.getCommandData = function(category, subcategory, commandNum) {
	var commandData = CTE.getCommandDataForLanguage(ConfigManager.getLanguage(), category, subcategory, commandNum);
	
	if (Array.isArray(commandData)) { // Data is conditional text array; check conditions to determine which text to use
		var conditionFound = false;
		for (var i = 0; i < commandData.length; i++) {
			if (CTE.conditionMet(commandData[i][0])) {
				return commandData[i][1];
			}
		}
		return null;
	}
	else { // Normal text data
		return commandData;
	}
};

// Get command language data for given language.
CTE.getCommandDataForLanguage = function(language, category, subcategory, commandNum) {
	if (typeof category === "string") category = category.toLowerCase();
	if (typeof subcategory === "string") subcategory = subcategory.toLowerCase();
	
	if (CTE.commandDataExistsForLanguage(language, category, subcategory, commandNum)) {
		return CTE.data[language][category][subcategory][commandNum];
	}
	return null;
};

// Return whether the command language data exists for current language.
CTE.commandDataExists = function(category, subcategory, commandNum) {
	return CTE.commandDataExistsForLanguage(ConfigManager.getLanguage(), category, subcategory, commandNum);
};

// Return whether the command language data exists for given language.
CTE.commandDataExistsForLanguage = function(language, category, subcategory, commandNum) {
	if (typeof category === "string") category = category.toLowerCase();
	if (typeof subcategory === "string") subcategory = subcategory.toLowerCase();
	
	if (typeof CTE.data === "undefined"
	|| typeof CTE.data[language] === "undefined"
	|| typeof CTE.data[language][category] === "undefined"
	|| typeof CTE.data[language][category][subcategory] === "undefined"
	|| typeof CTE.data[language][category][subcategory][commandNum] === "undefined") {
		return false;
	}
	return true;
};

// Set variable translation data for a string.
CTE.setVariableData = function(language, str, translation, targetVariable = 0, regex = false) {
	CTE.data = CTE.data || {};
	CTE.data[language] = CTE.data[language] || {};
	CTE.data[language]["variables"] = CTE.data[language]["variables"] || {};
	CTE.data[language]["variables"][targetVariable] = CTE.data[language]["variables"][targetVariable] || {};
	if (!regex) {
		CTE.data[language]["variables"][targetVariable][str] = translation;
	}
	else {
		CTE.data[language]["variables"][targetVariable]["__regex__"] = CTE.data[language]["variables"][targetVariable]["__regex__"] || [];
		CTE.data[language]["variables"][targetVariable]["__regex__"].push([ str, translation ]);
	}
};

// Get variable translation data for a string in current language.
CTE.getVariableData = function(targetVariable, str) {
	return CTE.getVariableDataForLanguage(ConfigManager.getLanguage(), targetVariable, str);
};

// Get string variable translation defined in the Variables section for given string, target variable, and language.
CTE.getVariableDataForLanguage = function(language, targetVariable, str) {
	if (CTE.variableDataExistsForLanguage(language, targetVariable, str)) {
		return CTE.data[language]["variables"][targetVariable][str];
	}
	return null;
};

// Return whether the variable translation data exists for a string in current language.
CTE.variableDataExists = function(targetVariable, str) {
	return CTE.variableDataExistsForLanguage(ConfigManager.getLanguage(), targetVariable, str);
};

// Return whether the variable translation data exists for a string in given language.
CTE.variableDataExistsForLanguage = function(language, targetVariable, str) {
	if (typeof CTE.data === "undefined"
	|| typeof CTE.data[language] === "undefined"
	|| typeof CTE.data[language]["variables"] === "undefined"
	|| typeof CTE.data[language]["variables"][targetVariable] === "undefined"
	|| typeof CTE.data[language]["variables"][targetVariable][str] === "undefined") {
		return false;
	}
	return true;
};

// Return whether there is a regex list for the target variable in the current language.
CTE.variableRegexExists = function(targetVariable) {
	if (CTE.variableDataExists(targetVariable, "__regex__")) {
		return true;
	}
	return false;
};

// Process regex list for the target variable in the current language, returning result (the original string, if nothing matches).
CTE.processVariableRegex = function(targetVariable, str) {
	var regexList = CTE.getVariableData(targetVariable, "__regex__");
	for (var i = 0; i < regexList.length; i++) {
		var regex = new RegExp("^" + regexList[i][0] + "$");
		if (str.match(regex)) {
			var translation = regexList[i][1];
			var args = str.match(regex);
			if (args.length > 1) {
				for (var k = 1; k < args.length; k++) {
					translation = translation.replace(new RegExp("\\{" + (k - 1) + "\\}", "g"), args[k]);
				}
			}
			return translation;
		}
	}
	return str;
};

// Get string data defined in the Extra section for current/specified language, using default value if not found.
CTE.getString = function(name, defaultValue = "", language = null) {
	if (ConfigManager.isBaseLanguage() && language !== null) return defaultValue;
	if (language === null) language = ConfigManager.getLanguage();
	
	if (CTE.dataExistsForLanguage(language, "extra", name)) {
		return CTE.getDataForLanguage(language, "extra", name).replace(/\\n/g, "\n");
	}
	return defaultValue;
};

// Get number data defined in the Extra section for current/specified language, using default value if not found.
CTE.getNumber = function(name, defaultValue = 0, language = null) {
	if (ConfigManager.isBaseLanguage() && language !== null) return defaultValue;
	var value = CTE.getString(name, defaultValue, language);
	return parseInt(value, 10);
};

// Store backup data for base language strings, for cases where they need to be directly replaced.
CTE.setBackupData = function(category, name, value) {
	CTE.backupData = CTE.backupData || {};
	if (typeof CTE.backupData[category + "-" + name] === "undefined") { // Only set if it has not been set yet, so that translations don't override it
		CTE.backupData[category + "-" + name] = value;
	}
};

// Retrieve backup data for base language strings. Returns null if not found.
CTE.getBackupData = function(category, name) {
	if (typeof CTE.backupData !== "undefined" && typeof CTE.backupData[category + "-" + name] !== "undefined") {
		return CTE.backupData[category + "-" + name];
	}
	return null;
};

// Set section to ignore warnings in for given language.
CTE.setIgnore = function(language, category, fieldName = "") {
	CTE.data = CTE.data || {};
	CTE.data[language] = CTE.data[language] || {};
	CTE.data[language]["ignore"] = CTE.data[language]["ignore"] || [];
	CTE.data[language]["ignore"].push(category + (fieldName !== ""? "_" + fieldName : ""));
}

// Return whether to ignore warnings for text in the given location.
// category of "f-e-p" or shorter will auto-convert to exporting position.
// thisLevelOnly checks ignore definition for given level only, but otherwise, it checks all higher-level definitions as well.
CTE.shouldIgnore = function(language, category, field, thisLevelOnly = false) {
	if (category === "") return false;
	
	if (typeof CTE.data === "undefined"
	|| typeof CTE.data[language] === "undefined"
	|| typeof CTE.data[language]["ignore"] === "undefined")
		return false;
	
	if (typeof category === "string") category = category.toLowerCase();
	if (typeof field === "string") field = field.toLowerCase();
	
	if (category.startsWith("f")) { // Shorthand for current exporting position
		var position = CTE.exportingPosition;
		switch (category) {
			case "f": category = position["file"]; break;
			case "f-e": category = position["file"] + "-" + position["event"]; break;
			case "f-e-p": category = position["file"] + "-" + position["event"] + "-" + position["page"]; break;
		}
	}
	
	var list = CTE.data[language]["ignore"];
	var loop = true;
	while (loop) {
		if (field !== "" && list.includes(category + "_" + field)) return true;
		if (list.includes(category)) return true;
		
		if (!thisLevelOnly && category.includes("-")) { // Remove one level from end of category to check more general category next loop
			category = category.substring(0, category.lastIndexOf("-"));
		}
		else {
			loop = false;
		}
	}
	
	return false;
};

/******************************
LOADING LANGUAGE FILES
******************************/

// Load language scripts for all codes except base language.
CTE.loadLanguageScripts = function() {
	// Load known languages.
	for (var i = 0; i < CTE.LanguageCodes.length; i++) {
		if (CTE.LanguageCodes[i].toLowerCase() !== CTE.BaseLanguage.toLowerCase()) {
			CTE.loadLanguage(CTE.LanguageCodes[i]);
		}
	}
	
	// Check for possible additional language files to load, and add to language code list if valid.
	if (CTE.LoadAnyLanguageFiles && Utils.isNwjs()) {
		var fs = require("fs");
		var path = require("path");
		var languagesPath = CTE_getLanguagesFolder();
		var fullPath = path.join(path.dirname(process.mainModule.filename), languagesPath);
		
		var files = fs.readdirSync(fullPath);
		for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
			var file = files[fileIndex];
			var isDirectory = fs.lstatSync(path.join(fullPath, file)).isDirectory();
			
			if (isDirectory || file.toLowerCase().endsWith(".cte") || file.toLowerCase().endsWith(".txt")) {
				var possibleCode = !isDirectory? file.slice(0, -4) : file;
				
				if (!CTE.LanguageCodes.contains(possibleCode)
				&& possibleCode.toLowerCase() !== CTE.BaseLanguage.toLowerCase()
				&& possibleCode.toLowerCase() !== "translatedimages"
				&& possibleCode.toLowerCase() !== "identicalwarnings") {
					CTE.addedLanguageValid = false;
					CTE.loadLanguage(possibleCode, false, true);
					
					if (CTE.addedLanguageValid) { // Add to language code list
						CTE.LanguageCodes.push(possibleCode); 
						CTE.warn("Loaded " + possibleCode + " as an additional language.");
					}
					else if (typeof CTE.data[possibleCode] !== "undefined") { // Remove any data that was made (usually just an empty object)
						delete CTE.data[possibleCode];
					}
				}
			}
		}
	}
	
	CTE.languagesLoaded = true;
	CTE.updateDatabaseText();
	CTE.languageRefreshHandler();
};

// Load data for a language into CTE.data[language]. cteFallback is used if no TXTs are found in TXT mode.
// checkingAddedLanguage is used when attempting to load a potential additional language that may or may not be valid.
CTE.loadLanguage = function(language, cteFallback = false, checkingAddedLanguage = false) {
	var languagesPath = CTE_getLanguagesFolder();
	
	if (CTE.LoadCTEFiles || cteFallback) { // Load from CTE file and insert JSON structure directly
		try {
			CTE.data = CTE.data || {};
			CTE.data[language] = {};
			
			if (CTE.load(languagesPath + language + ".cte")) {
				var json = LZString.decompressFromBase64(CTE.fileText);
				var data = JSON.parse(json);
				CTE.data[language] = data;
				if (cteFallback && !checkingAddedLanguage)
					CTE.warn("Loaded " + language + ".cte as fallback.");
				CTE.preloadDefaultFont(language);
				if (checkingAddedLanguage) CTE.addedLanguageValid = true;
			}
			else if (!checkingAddedLanguage) {
				CTE.warn(language + ".cte could not be found.");
			}
		}
		catch (e) {
			if (!checkingAddedLanguage) {
				CTE.warn("Failed to load language data from " + language + ".cte. " + e.message);
			}
		}
		return;
	}
	
	CTE.data = CTE.data || {};
	CTE.data[language] = {};
	CTE.anyFileModified = false;
	CTE.anyFileLoaded = false;
	
	var allInOneFile = language + ".txt";
	if (CTE.load(languagesPath + allInOneFile)) { // Prioritize single file in languages folder
		CTE.processLanguageFile(language);
	}
	else { // Next priority is all-in-one files in language folder, with each then going to their individual files if not found
		var languageFolder = languagesPath + language + "/";
		if (CTE.directoryExists(languageFolder)) {
			var allMapsFile = "AllMaps.txt";
			if (CTE.load(languageFolder + allMapsFile)) { // Load AllMaps
				CTE.processLanguageFile(language);
			}
			else { // Load individual maps
				var mapFile = "";
				for (var mapIndex = 0; mapIndex < $dataMapInfos.length; mapIndex++) {
					if ($dataMapInfos[mapIndex] === null) continue;
					var mapNum = $dataMapInfos[mapIndex].id;
					mapFile = "Map%1.txt".format(mapNum.padZero(3));
					if (CTE.load(languageFolder + mapFile)) {
						CTE.processLanguageFile(language, "map", "map" + mapNum);
					}
				}
			}
			
			var allCommonsFile = "AllCommons.txt";
			if (CTE.load(languageFolder + allCommonsFile)) { // Load AllCommons
				CTE.processLanguageFile(language, "common", "commonevents");
			}
			else { // Load individual commons
				var commonsFolder = languageFolder + "Commons/";
				if (CTE.directoryExists(commonsFolder)) {
					var commonFile = "";
					var commonSize = CTE.usingCommonEvents2? ($dataCommonEvents.length + $dataCommonEvents2.length) : $dataCommonEvents.length;
					for (var eventIndex = 0; eventIndex < commonSize; eventIndex++) {
						var myData = $dataCommonEvents;
						var indexInData = eventIndex;
						if (CTE.usingCommonEvents2 && eventIndex >= $dataCommonEvents.length) {
							myData = $dataCommonEvents2;
							indexInData -= $dataCommonEvents.length;
						}
						
						if (myData[indexInData] === null) continue;
						
						var eventNum = myData[indexInData].id + (CTE.usingCommonEvents2 && eventIndex >= $dataCommonEvents.length? $dataCommonEvents.length - 1 : 0);
						commonFile = "Common%1.txt".format(eventNum.padZero(4));
						if (CTE.load(commonsFolder + commonFile)) {
							CTE.processLanguageFile(language, "common", "commonevents", eventNum);
						}
					}
				}
			}
			
			var allTroopsFile = "AllTroops.txt";
			if (CTE.load(languageFolder + allTroopsFile)) { // Load AllTroops
				CTE.processLanguageFile(language, "troop", "troops");
			}
			else { // Load individual troops
				var troopsFolder = languageFolder + "Troops/";
				if (CTE.directoryExists(troopsFolder)) {
					var troopFile = "";
					for (var troopIndex = 0; troopIndex < $dataTroops.length; troopIndex++) {
						if ($dataTroops[troopIndex] === null) continue;
						var troopNum = $dataTroops[troopIndex].id;
						troopFile = "Troop%1.txt".format(eventNum.padZero(4));
						if (CTE.load(troopsFolder + troopFile)) {
							CTE.processLanguageFile(language, "troop", "troops", troopNum);
						}
					}
				}
			}
			
			var allDatabasesFile = "AllDatabases.txt";
			if (CTE.load(languageFolder + allDatabasesFile)) { // Load AllDatabases
				CTE.processLanguageFile(language, "database");
			}
			else { // Load individual databases
				var databasesFolder = languageFolder + "Databases/";
				if (CTE.directoryExists(databasesFolder)) {
					var databases = [ "Actors", "Skills", "Items", "Weapons", "Armors", "Enemies", "States", "Extra" ];
					var databaseFile = "";
					for (var i = 0; i < databases.length; i++) {
						databaseFile = databases[i] + ".txt";
						if (CTE.load(databasesFolder + databaseFile)) {
							if (databases[i] !== "Extra") {
								CTE.processLanguageFile(language, "database", databases[i].toLowerCase());
							}
							else {
								CTE.processLanguageFile(language, "extra");
							}
						}
					}
				}
			}
		}
	}
	
	if (!CTE.anyFileLoaded) {
		if (!checkingAddedLanguage) {
			CTE.warn("No language files found for " + language + ". Checking for " + language +".cte as fallback...");
		}
		CTE.loadLanguage(language, true, checkingAddedLanguage);
		return;
	}
	
	if (checkingAddedLanguage) CTE.addedLanguageValid = true;
	CTE.preloadDefaultFont(language);
	
	if (Utils.isNwjs() && CTE.isPlaytest() && CTE.GenerateCTEFiles) { // In playtesting, export loaded language data as CTE file (encrypted JSON) if enabled
		if (!CTE.anyFileModified) { // No files modified since last load, note that data has not updated since last time
			if (Object.keys(CTE.data[language]).length > 0) { // ...but only if anything was actually loaded rather than language file being missing
				CTE.warn(language + ".cte is already up to date.");
			}
			
			if (typeof CTE.GenerateCTEFiles_backup !== "undefined") {
				CTE.GenerateCTEFiles = CTE.GenerateCTEFiles_backup;
				CTE.GenerateCTEFiles_backup = undefined;
			}
			if (typeof CTE.LoadCTEFiles_backup !== "undefined") {
				CTE.LoadCTEFiles = CTE.LoadCTEFiles_backup;
				CTE.LoadCTEFiles_backup = undefined;
			}
		}
		else { // At least one file modified since last load
			try {
				var json = JSON.stringify(CTE.data[language]);
				var data = LZString.compressToBase64(json);
				
				var fs = require("fs");
				var path = require("path");
				var fullPath = path.join(path.dirname(process.mainModule.filename), languagesPath);
				fs.writeFileSync(fullPath + language + ".cte", data);
				
				CTE.warn("Exported " + language + ".cte using latest data.");
			}
			catch (e) {
				CTE.warn("Failed to write " + language + ".cte. " + e.message);
			}
			
			if (typeof CTE.GenerateCTEFiles_backup !== "undefined") {
				CTE.GenerateCTEFiles = CTE.GenerateCTEFiles_backup;
				CTE.GenerateCTEFiles_backup = undefined;
			}
			if (typeof CTE.LoadCTEFiles_backup !== "undefined") {
				CTE.LoadCTEFiles = CTE.LoadCTEFiles_backup;
				CTE.LoadCTEFiles_backup = undefined;
			}
		}
	}
};

// After loading an individual .txt language file into CTE.fileText, process it and add to language data.
CTE.processLanguageFile = function(language, initialMode = "", initialFile = "", initialEvent = 1) {
	if (Utils.isNwjs() && CTE.isPlaytest() && CTE.lastLoadedFile !== "") {
		var fs = require("fs");
		
		CTE.fileModifiedTime = CTE.fileModifiedTime || {};
		var modified = fs.statSync(CTE.lastLoadedFile).mtime.getTime();
		if (typeof CTE.fileModifiedTime[CTE.lastLoadedFile] === "undefined" || CTE.fileModifiedTime[CTE.lastLoadedFile] !== modified) { // First load, or file modified since last load
			CTE.fileModifiedTime[CTE.lastLoadedFile] = modified;
			CTE.anyFileModified = true;
		}
	}
	
	var text = CTE.fileText;
	var lines = text.replace(/\r/g, "").split("\n");
	
	var mode = initialMode;
	var fileID = initialFile;
	var eventNum = initialEvent;
	var pageNum = 1;
	var commandName = "";
	var commandContent = null;
	var readingCommandContent = false;
	
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		var lowerLine = line.toLowerCase();
		
		if (readingCommandContent) { // Reading text within a command/data
			if (line.trim() === "##") { // Content terminator
				if (commandContent === null) commandContent = "";
				
				if (mode === "database") { // Data in a database entry is singular
					if (fileID === "system" || fileID === "types" || fileID === "terms") { // Not entry-based
						CTE.setDataForLanguage(language, fileID, commandName, commandContent);
						CTE.anyFileLoaded = true;
					}
					else { // Entry-based
						CTE.setDataForLanguage(language, fileID + "-" + eventNum, commandName, commandContent);
						CTE.anyFileLoaded = true;
					}
				}
				else if (commandName.startsWith("displayname") // Properties that go in special translation lookup index
				|| commandName.startsWith("namechange")
				|| commandName.startsWith("nicknamechange")
				|| commandName.startsWith("profilechange")) {
					if (commandName.includes(":")) { // Includes definition of original string
						var separatorIndex = commandName.indexOf(":") + 1;
						var original = commandName.substring(separatorIndex).replace(/\\n/g, "\n");
						commandName = commandName.substring(0, separatorIndex - 1);
						CTE.setDataForLanguage(language, commandName, original, commandContent);
						CTE.anyFileLoaded = true;
					}
					
					if (commandName === "displayname") { // Map display names also go into data for the map
						CTE.setDataForLanguage(language, fileID, commandName, commandContent);
						CTE.anyFileLoaded = true;
					}
				}
				else { // Commands are pushed to a list, and can have variations based on conditions
					var commandObject = commandContent;
					if (commandContent.toLowerCase().includes("@if ") || commandContent.toLowerCase().includes("＠if ")) {
						commandObject = [];
						commandContent = commandContent.replace(/＠/g, "@");
						var commandLines = commandContent.split("\n");
						var currentCondition = "";
						var subContent = null;
						for (var k = 0; k < commandLines.length; k++) {
							var checkLine = commandLines[k].toLowerCase().trim();
							if (checkLine.startsWith("@if ")) {
								if (subContent !== null) { // Push previous condition and text
									commandObject.push([ currentCondition, subContent ]);
								}
								var conditionIndex = checkLine.indexOf("@if ");
								currentCondition = commandLines[k].substring(conditionIndex + 4).trim();
								subContent = null;
							}
							else if (checkLine.startsWith("@else")) {
								if (subContent !== null) { // Push previous condition and text
									commandObject.push([ currentCondition, subContent ]);
								}
								currentCondition = "";
								subContent = null;
							}
							else {
								if (subContent === null) { // First line of content
									subContent = "";
								}
								else { // Successive line
									subContent += "\n";
								}
								subContent += commandLines[k];
							}
						}
						if (subContent !== null) { // Push remaining condition and text
							commandObject.push([ currentCondition, subContent ]);
						}
					}
					
					var internalEventNum = eventNum > 0? eventNum : 1; // Default to 1 if event was not set after higher marker
					var internalPageNum = pageNum > 0? pageNum : 1; // Default to 1 if page was not set after higher marker
					if (mode !== "map" && mode !== "troop") internalPageNum = 0; // Modes with no pages
					CTE.addCommandDataForLanguage(language, fileID, internalEventNum, internalPageNum, commandName, commandObject);
					CTE.anyFileLoaded = true;
				}
				readingCommandContent = false;
			}
			else { // Not terminator yet, add to command content
				if (commandContent === null) { // First line of content
					commandContent = "";
				}
				else { // Successive line
					commandContent += "\n";
				}
				commandContent += line;
			}
		}
		else if (lowerLine.match(/=map[0-9]+=/)) { // Start of a Map section
			var startIndex = lowerLine.indexOf("=map") + 4;
			var endIndex = lowerLine.indexOf("=", startIndex);
			mode = "map";
			fileID = "map" + parseInt(lowerLine.substring(startIndex, endIndex), 10);
			eventNum = 0;
			pageNum = 0;
		}
		else if (lowerLine.includes("=commonevents=")) { // Start of the Common Events section
			mode = "common";
			fileID = "commonevents";
			eventNum = 0;
			pageNum = 0;
		}
		else if (lowerLine.includes("=troops=")) { // Start of the Troops section
			mode = "troop";
			fileID = "troops";
			eventNum = 0;
			pageNum = 0;
		}
		else if (lowerLine.includes("=variables=")) { // Start of the Variables section
			mode = "variable";
		}
		else if (lowerLine.includes("=extra=")) { // Start of the Extra section
			mode = "extra";
		}
		else if (lowerLine.match(/=([^=]+)=/) && lowerLine.trim().startsWith("=")) { // Start of an arbitrary Database section
			mode = "database";
			fileID = lowerLine.match(/=([^=]+)=/)[1];
			eventNum = 0;
			pageNum = 0;
		}
		else if ((mode === "map" || mode === "common") && (lowerLine.includes("*event") || lowerLine.includes("*common"))) { // Start of an event in a map or the Common Events section
			var headerText = lowerLine.includes("*event")? "*event" : "*common";
			var startIndex = lowerLine.indexOf(headerText) + headerText.length;
			var endIndex = lowerLine.indexOf("*", startIndex);
			eventNum = parseInt(lowerLine.substring(startIndex, endIndex), 10);
			pageNum = 0;
		}
		else if (mode === "troop" && lowerLine.includes("*troop")) { // Start of a troop in the Troops section
			var startIndex = lowerLine.indexOf("*troop") + 6;
			var endIndex = lowerLine.indexOf("*", startIndex);
			eventNum = parseInt(lowerLine.substring(startIndex, endIndex), 10);
			pageNum = 0;
		}
		else if (mode === "database" && lowerLine.includes("*entry")) { // Start of an entry in a Database section
			var startIndex = lowerLine.indexOf("*entry") + 6;
			var endIndex = lowerLine.indexOf("*", startIndex);
			eventNum = parseInt(lowerLine.substring(startIndex, endIndex), 10);
			pageNum = 0;
		}
		else if ((mode === "map" || mode === "troop") && lowerLine.includes("-page")) { // Start of a page in a map or a troop
			var startIndex = lowerLine.indexOf("-page") + 5;
			var endIndex = lowerLine.indexOf("-", startIndex);
			pageNum = parseInt(lowerLine.substring(startIndex, endIndex), 10);
		}
		else if (mode !== "extra" && mode !== "variable" && lowerLine.match(/#([^#]+)#/)) { // Arbitrary command/data header
			commandName = lowerLine.match(/#([^#]+)#/)[1];
			commandContent = null;
			readingCommandContent = true;
			
			if (lowerLine.includes("%ignorethis")) { // Ignore this specific command
				var commandNum = 1;
				if (CTE.dataExistsForLanguage(language, fileID, eventNum + "-" + pageNum + "-" + commandName)) {
					commandNum = CTE.getDataForLanguage(language, fileID, eventNum + "-" + pageNum + "-" + commandName).length + 1;
				}
				CTE.setIgnore(language, fileID + "-" + eventNum + "-" + pageNum + "-" + commandNum, commandName);
			}
		}
		else if (lowerLine.startsWith("%ignore")) { // Ignore-for-warnings declaration
			var ignoreArgs = lowerLine.split(" ");
			switch (ignoreArgs[0]) {
			case "%ignore": // Assume section based on markers
				if (fileID !== "") { // Ignoring above file scope not allowed
					var ignoreScope = "";
					if (eventNum == 0) ignoreScope = "file"; // Event number not yet set, so assume map scope
					else if (pageNum == 0) ignoreScope = "event"; // Page number not yet set, so assume event scope
					else ignoreScope = "page"; // Page number set, so assume page scope
					switch (ignoreScope) {
						case "file": CTE.setIgnore(language, fileID); break;
						case "event": CTE.setIgnore(language, fileID + "-" + eventNum); break;
						case "page": CTE.setIgnore(language, fileID + "-" + eventNum + "-" + pageNum); break;
					}
				}
				break;
			case "%ignorefile": // [file = current]
				if (ignoreArgs.length <= 1 || ignoreArgs[1] === "") ignoreArgs[1] = fileID;
				if (ignoreArgs[1].match(/map(\d+)-(\d+)/i)) { // Map range
					var range = ignoreArgs[1].match(/map(\d+)-(\d+)/i);
					var start = range[1] < range[2]? range[1] : range[2];
					var end = range[1] < range[2]? range[2] : range[1];
					for (var k = start; k <= end; k++) {
						CTE.setIgnore(language, "map" + k);
					}
				}
				else { // Single file
					CTE.setIgnore(language, ignoreArgs[1]);
				}
				break;
			case "%ignoreevent": // [event = current]
				if (ignoreArgs.length <= 1 || ignoreArgs[1] === "") ignoreArgs[1] = eventNum;
				if (ignoreArgs[1].match(/(\d+)-(\d+)/i)) { // Event range
					var range = ignoreArgs[1].match(/(\d+)-(\d+)/i);
					var start = range[1] < range[2]? range[1] : range[2];
					var end = range[1] < range[2]? range[2] : range[1];
					for (var k = start; k <= end; k++) {
						CTE.setIgnore(language, fileID + "-" + k);
					}
				}
				else { // Single event
					CTE.setIgnore(language, fileID + "-" + ignoreArgs[1]);
				}
				break;
			case "%ignorepage": // [page = current]
				if (ignoreArgs.length <= 1 || ignoreArgs[1] === "") ignoreArgs[1] = pageNum;
				if (ignoreArgs[1].match(/(\d+)-(\d+)/i)) { // Page range
					var range = ignoreArgs[1].match(/(\d+)-(\d+)/i);
					var start = range[1] < range[2]? range[1] : range[2];
					var end = range[1] < range[2]? range[2] : range[1];
					for (var k = start; k <= end; k++) {
						CTE.setIgnore(language, fileID + "-" + eventNum + "-" + k);
					}
				}
				else { // Single page
					CTE.setIgnore(language, fileID + "-" + eventNum + "-" + ignoreArgs[1]);
				}
				break;
			case "%ignorecommand": // command [scope = assume]
				if (ignoreArgs.length <= 1) break;
				if (ignoreArgs.length <= 2 || ignoreArgs[2] === "") {
					if (eventNum == 0) ignoreArgs[2] = "file"; // Event number not yet set, so assume map scope
					else if (pageNum == 0) ignoreArgs[2] = "event"; // Page number not yet set, so assume event scope
					else ignoreArgs[2] = "page"; // Page number set, so assume page scope
				}
				switch (ignoreArgs[2]) {
					case "file": CTE.setIgnore(language, fileID, ignoreArgs[1]); break;
					case "event": CTE.setIgnore(language, fileID + "-" + eventNum, ignoreArgs[1]); break;
					case "page": CTE.setIgnore(language, fileID + "-" + eventNum + "-" + pageNum, ignoreArgs[1]); break;
				}
				break;
			case "%ignoreentry": // [entry = current]
				if (ignoreArgs.length <= 1 || ignoreArgs[1] === "") ignoreArgs[1] = eventNum;
				if (ignoreArgs[1].match(/(\d+)-(\d+)/i)) { // Entry range
					var range = ignoreArgs[1].match(/(\d+)-(\d+)/i);
					var start = range[1] < range[2]? range[1] : range[2];
					var end = range[1] < range[2]? range[2] : range[1];
					for (var k = start; k <= end; k++) {
						CTE.setIgnore(language, fileID + "-" + k);
					}
				}
				else { // Single entry
					CTE.setIgnore(language, fileID + "-" + ignoreArgs[1]);
				}
				break;
			case "%ignorefield": // field
				if (ignoreArgs.length <= 1) break;
				CTE.setIgnore(language, fileID, ignoreArgs[1]);
				break;
			}
		}
		else if (mode === "variable" && lowerLine.match(/#([^#]*)#/)) { // Variable translation definition
			var variableArgs = lowerLine.match(/#([^#]*)#/)[1];
			var targetVariables = [];
			var regex = false;
			if (variableArgs !== "") {
				var args = variableArgs.split(",");
				for (var k = 0; k < args.length; k++) {
					if (args[k].trim().startsWith("v")) {
						targetVariables.push(parseInt(args[k].substring(1), 10));
					}
					else if (args[k].trim() === "regex") {
						regex = true;
					}
				}
			}
			if (targetVariables.length == 0) {
				targetVariables.push(0);
			}
			
			var source = i + 1 < lines.length? lines[i + 1] : null;
			var translation = i + 2 < lines.length? lines[i + 2] : null;
			if (source !== null && translation !== null) {
				for (var k = 0; k < targetVariables.length; k++) {
					CTE.setVariableData(language, source, translation, targetVariables[k], regex);
					CTE.anyFileLoaded = true;
				}
			}
			i += 2;
		}
		else if (mode === "extra") { // Possible extra data definition
			var assignIndex = line.indexOf("=");
			if (assignIndex != -1) {
				var key = line.substring(0, assignIndex);
				var keyLower = key.toLowerCase();
				var value = line.substring(assignIndex + 1);
				CTE.setDataForLanguage(language, "extra", keyLower, value);
				if (keyLower !== key) CTE.setDataForLanguage(language, "extrakeys", keyLower, key);
				CTE.anyFileLoaded = true;
			}
		}
	}
};

// In playtest mode, open message debugger when debugger key is pressed, reload scripts when reload key is pressed, and show export options when reload key is held.
CTE.Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
	CTE.Scene_Base_update.apply(this, arguments);
	
	if (CTE.isPlaytest()) {
		if (CTE.ReloadKey !== 0 && !Input.keyMapper[CTE.ReloadKey]) Input.keyMapper[CTE.ReloadKey] = "languagereload";
		if (CTE.MessageDebugKey !== 0 && !Input.keyMapper[CTE.MessageDebugKey]) Input.keyMapper[CTE.MessageDebugKey] = "messagedebug";
		
		if (Input.isTriggered("messagedebug") && !!SceneManager._scene._mapLoaded && !$gameMap.isEventRunning() && !CTE.TextDebug.open) { // Open message debugger
			SoundManager.playOk();
			CTE.loadLanguageScripts();
			CTE.TextDebug.open = true;
			CTE.TextDebug.currentFile = "";
			SceneManager.push(Scene_TextDebugger);
		}
		else if (Input.isTriggered("languagereload")) {
			SoundManager.playOk();
			if (CTE.LoadCTEFiles) { // For this case of reloading for debug, it's most convenient to just load from .txts and renew .ctes
				CTE.LoadCTEFiles_backup = CTE.LoadCTEFiles;
				CTE.LoadCTEFiles = false;
				CTE.GenerateCTEFiles_backup = CTE.GenerateCTEFiles;
				CTE.GenerateCTEFiles = true;
			}
			CTE.warn("Reloading all .txt language scripts.");
			CTE.loadLanguageScripts();
			
			if ($gameMap && $gameMessage
			&& $gameMessage.hasText() && !$gameMessage.isChoice() && !$gameMessage.isNumberInput() && !$gameMessage.isItemChoice()
			&& !CTE.TextDebug.open && !CTE.MessageTyper.previewing) { // Actively displaying message; show it again with updated language data
				SceneManager._scene._messageWindow.terminateMessage(); // Close message window
				CTE.currentMessageInterpreter._index = CTE.currentMessageIndex; // Set index back to start of message command
				CTE.currentMessageInterpreter.command101(); // Re-process message command
				SceneManager._scene._messageWindow.pause = false; // Clear waiting for input
				SceneManager._scene._messageWindow._waitCount = 0; // Clear pauses
				SceneManager._scene._messageWindow.startMessage(); // Show message
			}
		}
		else if (Input.isLongPressed("languagereload") && $gameMap && $gameMessage && !$gameMessage.isBusy()) {
			$gameMap._interpreter._list = [];
			$gameMap._interpreter.setWaitMode("message");
			var choices = [ "Export base language text", "Export ReferenceTable.csv", "Export IdenticalWarnings.txt", "Export .cte files for all languages",
										"Export reformatted language text", "Open message typer window", "Do nothing" ];
			$gameMap._interpreter.setupChoices([ choices, choices.length - 1, 0, 2, 0 ]);
			$gameMessage.setChoiceCallback(function(choice) {
				switch (choice) {
					case 0: // Export base language text
						CTE.exportingBase = true;
						CTE.beginExportProcess();
						break;
					case 1: // Export ReferenceTable.csv
						CTE.exportingTable = true;
						CTE.beginExportProcess();
						break;
					case 2: // Export IdenticalWarnings.txt
						CTE.exportingIdentical = true;
						CTE.beginExportProcess();
						break;
					case 3: // Export latest .ctes
						CTE.GenerateCTEFiles_backup = CTE.GenerateCTEFiles;
						CTE.LoadCTEFiles_backup = CTE.LoadCTEFiles;
						CTE.LoadCTEFiles = false;
						CTE.GenerateCTEFiles = true;
						CTE.fileModifiedTime = {}; // Ensure all files are reloaded regardless of modified time
						CTE.loadLanguageScripts();
						break;
					case 4: // Export reformatted language text
						if (!ConfigManager.isBaseLanguage()) {
							CTE.languageForReformat = ConfigManager.getLanguage();
							CTE.loadLanguage(CTE.languageForReformat);
							CTE.exportingReformat = true;
							CTE.beginExportProcess();
						}
						else {
							CTE.warn("Reformatted exporting is unnecessary for Base Language.");
						}
						break;
					case 5: // Open message typer window
						CTE.openMessageTyperWindow();
						break;
				}
			});
		}
	}
};

/******************************
LANGUAGE TEXT OVERRIDES
******************************/

// Define ID of map being loaded before loading it so context can be set correctly.
CTE.DataManager_loadMapData = DataManager.loadMapData;
DataManager.loadMapData = function(mapId) {
	if (mapId > 0) CTE.loadingMapId = mapId;
	CTE.DataManager_loadMapData.apply(this, arguments);
};

// Called from DataManager.onLoad. After loading data files, either update text, or define context for command lists.
CTE.onDataLoad = function(object) {
	// Upon loading Skills, Items, Weapons, Armors, or States, if languages have been loaded, update the text therein.
	if (CTE.languagesLoaded) {
		if (object === $dataSkills) CTE.updateDatabaseText("skills");
		else if (object === $dataItems) CTE.updateDatabaseText("items");
		else if (object === $dataWeapons) CTE.updateDatabaseText("weapons");
		else if (object === $dataArmors) CTE.updateDatabaseText("armors");
		else if (object === $dataStates) CTE.updateDatabaseText("states");
	}
	
	// Upon loading map, Common Events, or Troops, define contexts in the first command of every command list.
	if (object === $dataMap) {
		if ($dataMap && $dataMap.events) {
			for (var eventNum = 0; eventNum < $dataMap.events.length; eventNum++) {
				if ($dataMap.events[eventNum] !== null && $dataMap.events[eventNum].pages) {
					for (var pageIndex = 0; pageIndex < $dataMap.events[eventNum].pages.length; pageIndex++) {
						if ($dataMap.events[eventNum].pages[pageIndex] !== null && $dataMap.events[eventNum].pages[pageIndex].list) {
							var firstCommand = $dataMap.events[eventNum].pages[pageIndex].list[0];
							firstCommand.context = "map";
							firstCommand.mapId = CTE.loadingMapId;
							firstCommand.eventId = $dataMap.events[eventNum].id;
							firstCommand.pageNum = pageIndex + 1;
						}
					}
				}
			}
		}
	}
	
	if (object === $dataCommonEvents) {
		if ($dataCommonEvents) {
			for (var eventNum = 0; eventNum < $dataCommonEvents.length; eventNum++) {
				if ($dataCommonEvents[eventNum] !== null && $dataCommonEvents[eventNum].list) {
					var firstCommand = $dataCommonEvents[eventNum].list[0];
					firstCommand.context = "common";
					firstCommand.commonEventId = $dataCommonEvents[eventNum].id;
				}
			}
		}
	}
	
	if (typeof $dataCommonEvents2 !== "undefined" && object === $dataCommonEvents2) {
		if ($dataCommonEvents2) {
			for (var eventNum = 0; eventNum < $dataCommonEvents2.length; eventNum++) {
				if ($dataCommonEvents2[eventNum] !== null && $dataCommonEvents2[eventNum].list) {
					var firstCommand = $dataCommonEvents2[eventNum].list[0];
					firstCommand.context = "common";
					firstCommand.commonEventId = ($dataCommonEvents? $dataCommonEvents.length - 1 : 1000) + $dataCommonEvents2[eventNum].id;
				}
			}
		}
	}
	
	if (object === $dataTroops) {
		if ($dataTroops) {
			for (var troopNum = 0; troopNum < $dataTroops.length; troopNum++) {
				if ($dataTroops[troopNum] !== null && $dataTroops[troopNum].pages) {
					for (var pageIndex = 0; pageIndex < $dataTroops[troopNum].pages.length; pageIndex++) {
						if ($dataTroops[troopNum].pages[pageIndex] !== null && $dataTroops[troopNum].pages[pageIndex].list) {
							var firstCommand = $dataTroops[troopNum].pages[pageIndex].list[0];
							firstCommand.context = "troop";
							firstCommand.troopId = $dataTroops[troopNum].id;
							firstCommand.pageNum = pageIndex + 1;
						}
					}
				}
			}
		}
	}
};

// Get command position data for the given Game_Interpreter by extracting context variables from the first command in the list.
CTE.getPositionData = function(interpreter) {
	var position = { file: "", event: "", page: "" };
	
	if (!interpreter || !interpreter._list) return position;
	
	var firstCommand = interpreter._list[0];
	if (typeof firstCommand === "undefined") return position;
	
	var context = firstCommand.context || "";
	var mapId = firstCommand.mapId || 0;
	var eventId = firstCommand.eventId || 0;
	var pageNum = firstCommand.pageNum || 0;
	var commonEventId = firstCommand.commonEventId || 0;
	var troopId = firstCommand.troopId || 0;
	
	if (context === "common") { // Common event
		position["file"] = "commonevents";
		position["event"] = commonEventId;
		position["page"] = 0;
	}
	else if (context === "troop") { // Troop page
		position["file"] = "troops"; 
		position["event"] = troopId;
		position["page"] = pageNum;
	}
	else if (context === "map") { // Map event
		position["file"] = "map" + mapId;
		position["event"] = eventId;
		position["page"] = pageNum;
	}
	
	return position;
};

// Return a string description of position data for warning messages.
CTE.getPositionString = function(position, includeCommand) {
	if (position["file"] === "commonevents") { // Common event
		return "Common Event " + position["event"];
	}
	else if (position["file"] === "troops") { // Troop page
		return "Troop " + position["event"] + ", Page " + position["page"];
	}
	else if (position["file"] === "system" || position["file"] === "types" || position["file"] === "terms") { // System database
		var fileStr = position["file"][0].toUpperCase() + position["file"].substring(1);
		var commandStr = includeCommand && typeof position["command"] !== "undefined"? ", " + position["command"] : "";
		return fileStr + commandStr;
	}
	else if (position["file"] === "actors"
	|| position["file"] === "skills"
	|| position["file"] === "items"
	|| position["file"] === "weapons"
	|| position["file"] === "armors"
	|| position["file"] === "enemies"
	|| position["file"] === "states") { // Entry-based database
		var fileStr = position["file"][0].toUpperCase() + position["file"].substring(1);
		var commandStr = includeCommand && typeof position["command"] !== "undefined"? " (" + position["command"] + ")" : "";
		return fileStr + ", Entry " + position["event"] + commandStr;
	}
	else { // Map
		var mapNum = position["file"].replace("map", "");
		var eventStr = "Event " + position["event"];
		var pageStr = ", Page " + position["page"];
		var commandStr = includeCommand && typeof position["command"] !== "undefined"? " (" + position["command"] + ")" : "";
		if (position["event"] === "displayname") {
			eventStr = "Display Name";
			pageStr = "";
		}
		return "Map " + mapNum + ", " + eventStr + pageStr + commandStr;
	}
}

// Get command group identifier based on position and command type.
CTE.getCommandGroupId = function(position, commandName) {
	return position["event"] + "-" + position["page"] + "-" + commandName;
};

// Get command group identifier based on position in export process and command type.
CTE.getExportCommandGroupId = function(commandName) {
	return CTE.getCommandGroupId(CTE.exportingPosition, commandName);
};

// Get command text for CSV export given language, command name, and counter of command instances.
CTE.getCommandTextForCSV = function(language, commandName, commandCounter) {
	CTE.exportingPosition["command"] = commandName;
	var commandData = CTE.getCommandDataForLanguage(language, CTE.exportingPosition["file"], CTE.getExportCommandGroupId(commandName), commandCounter[commandName]);
	if (Array.isArray(commandData)) { // Data is conditional text array, format appropriately
		var result = "";
		for (var conditionIndex = 0; conditionIndex < commandData.length; conditionIndex++) {
			var condition = commandData[conditionIndex][0];
			var text = commandData[conditionIndex][1];
			result += (conditionIndex > 0? "\n" : "") + (condition !== ""? "@if " + condition + "\n" : "@else\n");
			result += text;
		}
		return result;
	}
	return commandData;
}

// Get the instance number of the command at the given index in the given command list.
CTE.getCommandNum = function(list, index) {
	if (typeof list[index] === "undefined") return -1;
	var myCode = list[index].code;
	var myCount = 0;
	for (var i = index - 1; i >= 0; i--) {
		if (list[i].code == myCode) {
			myCount++;
		}
	}
	return myCount;
};

// Evaluates a text condition.
CTE.conditionMet = function(condition) {
	if (condition === "") return true;
	
	var sides = [ condition, true ];
	var negate = [ false, false ];
	var comparison = "";
	
	// Look for a comparison operator. (If none is found, "condition == true" is assumed.)
	var comparisons = [ ">=", "<=", "!==", "!=", "===", "==", "=", ">", "<" ];
	for (var i = 0; i < comparisons.length; i++) {
		if (condition.includes(comparisons[i])) {
			comparison = comparisons[i];
			
			var comparisonIndex = condition.indexOf(comparisons[i]);
			sides[0] = condition.substring(0, comparisonIndex).trim();
			sides[1] = condition.substring(comparisonIndex + comparison.length, condition.length).trim();
			break;
		}
	}
	
	for (var i = 0; i < 2; i++) { // Convert values on both sides
		if (typeof sides[i] === "string") {
			while (sides[i].startsWith("!")) {
				negate[i] = !negate[i];
				sides[i] = sides[i].substring(1);
			}
			
			if (sides[i].match(/s\[(\d+)\]/i)) { // Switch
				var switchNum = sides[i].match(/s\[(\d+)\]/i)[1];
				if ($gameSwitches) sides[i] = $gameSwitches.value(switchNum);
			}
			else if (sides[i].match(/v\[(\d+)\]/i)) { // Variable
				var variableNum = sides[i].match(/v\[(\d+)\]/i)[1];
				if ($gameVariables) sides[i] = $gameVariables.value(variableNum);
			}
			
			if (typeof sides[i] === "string") {
				if (sides[i].toLowerCase() === "true" || sides[i].toLowerCase() === "on") sides[i] = true;
				if (sides[i].toLowerCase() === "false" || sides[i].toLowerCase() === "off") sides[i] = false;
			}
		}
		
		if (negate[i] && typeof sides[i] === "boolean") {
			sides[i] = !sides[i];
		}
		
		if (typeof sides[i] !== "boolean" && !isNaN(sides[i])) {
			sides[i] = parseInt(sides[i], 10);
		}
	}
	
	switch (comparison) {
		case "===": case "==": case "=":
			if (typeof sides[0] === "string") return sides[0] === sides[1];
			return sides[0] == sides[1];
		case "!==": case "!=":
			if (typeof sides[0] === "string") return sides[0] !== sides[1];
			return sides[0] != sides[1];
		case ">=": return sides[0] >= sides[1];
		case "<=": return sides[0] <= sides[1];
		case ">": return sides[0] > sides[1];
		case "<": return sides[0] < sides[1];
		case "":
			if (typeof sides[0] === "boolean") return sides[0];
			if (typeof sides[0] === "number") return sides[0] > 0;
			if (typeof sides[0] === "string") return sides[0] !== "";
	}
	
	return false;
};

// Localize message text.
CTE.Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
 Game_Interpreter.prototype.command101 = function() {
	if (ConfigManager.isBaseLanguage()) { // In base language, use original function
		return CTE.Game_Interpreter_command101.apply(this, arguments);
	}
	
	if (!$gameMessage.isBusy()) {
		var position = CTE.getPositionData(this);
		var file = position["file"];
		if (file === "") return CTE.Game_Interpreter_command101.apply(this, arguments); // No context for command
		var commandGroupId = CTE.getCommandGroupId(position, "message");
		var commandNum = CTE.getCommandNum(this._list, this._index);
		
		CTE.currentMessageInterpreter = this;
		CTE.currentMessageIndex = this._index;
		
		if (!CTE.commandDataExists(file, commandGroupId, commandNum)) {
			CTE.warn("No translation data found for " + CTE.getPositionString(position) + ", Message " + (commandNum + 1) + ".", 2);
			return CTE.Game_Interpreter_command101.apply(this, arguments);
		}
		
		var commandData = CTE.getCommandData(file, commandGroupId, commandNum);
		if (commandData === null) { // Data exists, but no valid condition met
			CTE.warn("No valid condition found for " + CTE.getPositionString(position) + ", Message " + (commandNum + 1) + ".", 2);
			return CTE.Game_Interpreter_command101.apply(this, arguments);
		}
		
		$gameMessage.setFaceImage(this._params[0], this._params[1]);
		$gameMessage.setBackground(this._params[2]);
		$gameMessage.setPositionType(this._params[3]);
		while (this.nextEventCode() === 401) { // Skip through text data
			this._index++;
		}
		
		if (commandData.toUpperCase().trim() === "<<REMOVE>>") { // Skip this text box entirely
			return false;
		}
		
		var lines = commandData.split("\n");
		for (var i = 0; i < lines.length; i++) {
			$gameMessage.add(lines[i]);
		}
		
		switch (this.nextEventCode()) {
		case 102: // Show Choices
			this._index++;
			
			commandGroupId = CTE.getCommandGroupId(position, "choice");
			commandNum = CTE.getCommandNum(this._list, this._index);
			
			var parameters = [...this.currentCommand().parameters];
			if (CTE.commandDataExists(file, commandGroupId, commandNum)) {
				var commandData = CTE.getCommandData(file, commandGroupId, commandNum);
				if (commandData === null) { // Data exists, but no valid condition met
					CTE.warn("No valid condition found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
				}
				else {
					var choices = commandData.split("\n");
					if (choices.length == parameters[0].length) {
						parameters[0] = choices;
					}
					else {
						CTE.warn("Choice counts do not match in " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
					}
				}
			}
			else {
				CTE.warn("No translation data found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
			}
			
			this.setupChoices(parameters);
			break;
		case 103: // Input Number
			this._index++;
			this.setupNumInput(this.currentCommand().parameters);
			break;
		case 104: // Select Item
			this._index++;
			this.setupItemChoice(this.currentCommand().parameters);
			break;
		}
		this._index++;
		this.setWaitMode('message');
	}
	return false;
};

// Localize choice text.
CTE.Game_Interpreter_command102 = Game_Interpreter.prototype.command102;
Game_Interpreter.prototype.command102 = function() {
	if (ConfigManager.isBaseLanguage()) { // In base language, use original function
		return CTE.Game_Interpreter_command102.apply(this, arguments);
	}
	
	if (!$gameMessage.isBusy()) {
		var position = CTE.getPositionData(this);
		var file = position["file"];
		if (file === "") return CTE.Game_Interpreter_command102.apply(this, arguments); // No context for command
		var commandGroupId = CTE.getCommandGroupId(position, "choice");
		var commandNum = CTE.getCommandNum(this._list, this._index);
		
		var parameters = [...this._params];
		var parametersChanged = false;
		if (CTE.commandDataExists(file, commandGroupId, commandNum)) {
			var commandData = CTE.getCommandData(file, commandGroupId, commandNum);
			if (commandData === null) { // Data exists, but no valid condition met
				CTE.warn("No valid condition found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
			}
			else {
				var choices = commandData.split("\n");
				if (choices.length == parameters[0].length) {
					parameters[0] = choices;
					parametersChanged = true;
				}
				else {
					CTE.warn("Choice counts do not match in " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
				}
			}
		}
		else {
			CTE.warn("No translation data found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
		}
	}
	
	// If parameters were not changed, go to original function.
	if (!parametersChanged) return CTE.Game_Interpreter_command102.apply(this, arguments);
	
	// Otherwise, do original code with updated parameters.
	if (!$gameMessage.isBusy()) {
		this.setupChoices(parameters);
		this._index++;
		this.setWaitMode("message");
	}
	return false;
};

// Localize scrolling text.
CTE.Game_Interpreter_command105 = Game_Interpreter.prototype.command105;
Game_Interpreter.prototype.command105 = function() {
	if (ConfigManager.isBaseLanguage()) { // In base language, use original function
		return CTE.Game_Interpreter_command105.apply(this, arguments);
	}
	
	if (!$gameMessage.isBusy()) {
		var position = CTE.getPositionData(this);
		var file = position["file"];
		if (file === "") return CTE.Game_Interpreter_command105.apply(this, arguments); // No context for command
		var commandGroupId = CTE.getCommandGroupId(position, "scrollingmessage");
		var commandNum = CTE.getCommandNum(this._list, this._index);
		
		if (!CTE.commandDataExists(file, commandGroupId, commandNum)) {
			CTE.warn("No translation data found for " + CTE.getPositionString(position) + ", Scrolling Message " + (commandNum + 1) + ".", 2);
			return CTE.Game_Interpreter_command105.apply(this, arguments);
		}
		
		var commandData = CTE.getCommandData(file, commandGroupId, commandNum);
		if (commandData === null) { // Data exists, but no valid condition met
			CTE.warn("No valid condition found for " + CTE.getPositionString(position) + ", Scrolling Message " + (commandNum + 1) + ".", 2);
			return CTE.Game_Interpreter_command105.apply(this, arguments);
		}
		
		$gameMessage.setScroll(this._params[0], this._params[1]);
		while (this.nextEventCode() === 405) { // Skip through text data
			this._index++;
		}
		
		var lines = commandData.split("\n");
		for (var i = 0; i < lines.length; i++) {
			$gameMessage.add(lines[i]);
		}
		
		this._index++;
		this.setWaitMode('message');
	}
	return false;
};

// Localize map display names. (Pass false to force base data name.)
Game_Map.prototype.displayName = function(useTranslation = true) {
	if (useTranslation && !ConfigManager.isBaseLanguage()) {
		if (CTE.dataExists("map" + this.mapId(), "displayname")) {
			return CTE.getData("map" + this.mapId(), "displayname");
		}
	}
	return $dataMap.displayName;
};

// Localize actor names using lookup.
Game_Actor.prototype.name = function() {
	if (!ConfigManager.isBaseLanguage()) {
		if (this._name === $dataActors[this.actorId()].name) { // Unchanged from database definition
			if (CTE.dataExists("actors-" + this.actorId(), "name")) {
				return CTE.getData("actors-" + this.actorId(), "name");
			}
		}
		else if (CTE.dataExists("namechange", this._name)) { // This name exists in name change translation index
			return CTE.getData("namechange", this._name);
		}
	}
	return this._name;
};

// Localize actor nicknames using lookup.
Game_Actor.prototype.nickname = function() {
	if (!ConfigManager.isBaseLanguage()) {
		if (this._nickname === $dataActors[this.actorId()].nickname) { // Unchanged from database definition
			if (CTE.dataExists("actors-" + this.actorId(), "title")) {
				return CTE.getData("actors-" + this.actorId(), "title");
			}
		}
		else if (CTE.dataExists("nicknamechange", this._nickname)) { // This name exists in nickname change translation index
			return CTE.getData("nicknamechange", this._nickname);
		}
	}
	return this._nickname;
};

// Localize actor profiles using lookup.
Game_Actor.prototype.profile = function() {
	if (!ConfigManager.isBaseLanguage()) {
		if (this._profile === $dataActors[this.actorId()].profile) { // Unchanged from database definition
			if (CTE.dataExists("actors-" + this.actorId(), "profile")) {
				return CTE.getData("actors-" + this.actorId(), "profile");
			}
		}
		else if (CTE.dataExists("profilechange", this._profile)) { // This name exists in profile change translation index
			return CTE.getData("profilechange", this._profile);
		}
	}
	return this._profile;
};

// Localize class names. (Cleanest way involves direct editing of object, so back up names for base language.)
Game_Actor.prototype.currentClass = function() {
	var myClass = $dataClasses[this._classId];
	if (!ConfigManager.isBaseLanguage()) { // Back up base language text and change to translation
		if (CTE.dataExists("classes-" + this._classId, "name")) {
			CTE.setBackupData("classes-" + this._classId, "name", myClass.name);
			myClass.name = CTE.getData("classes-" + this._classId, "name");
		}
	}
	else { // Restore base language text
		var backup = CTE.getBackupData("classes-" + this._classId, "name");
		if (backup !== null) myClass.name = backup;
	}
	return myClass;
};

// Localize text in various databases that can't be handled indirectly (Skills, Items, Weapons, Armor, States), backing up base language text.
CTE.updateDatabaseText = function(database = "") {
	var dbs = [ "skills", "items", "weapons", "armors", "states" ];
	
	for (var i = 0; i < dbs.length; i++) {
		if (database !== "" && dbs[i] !== database) continue;
		
		var myData = i == 0? $dataSkills : i == 1? $dataItems : i == 2? $dataWeapons : i == 3? $dataArmors : i == 4? $dataStates : null;
		if (myData === null) continue;
		
		for (var entryNum = 0; entryNum < myData.length; entryNum++) {
			var myItem = myData[entryNum];
			if (myItem === null) continue;
			
			var category = dbs[i] + "-" + entryNum;
			
			if (!ConfigManager.isBaseLanguage()) { // Back up base language text and change to translation
				// Name is shared by all databases
				if (CTE.dataExists(category, "name")) {
					CTE.setBackupData(category, "name", myItem.name);
					myItem.name = CTE.getData(category, "name");
				}
				
				if (i < 4) { // Description is shared by all before States
					if (CTE.dataExists(category, "description")) {
						CTE.setBackupData(category, "description", myItem.description);
						myItem.description = CTE.getData(category, "description");
					}
				}
				
				if (i == 0 || i == 4) { // Messages 1 and 2 are shared by Skills and States
					if (CTE.dataExists(category, "message1")) {
						CTE.setBackupData(category, "message1", myItem.message1);
						myItem.message1 = CTE.getData(category, "message1");
					}
					if (CTE.dataExists(category, "message2")) {
						CTE.setBackupData(category, "message2", myItem.message2);
						myItem.message2 = CTE.getData(category, "message2");
					}
				}
				
				if (i == 4) { // Messages 3 and 4 are States only
					if (CTE.dataExists(category, "message3")) {
						CTE.setBackupData(category, "message3", myItem.message3);
						myItem.message3 = CTE.getData(category, "message3");
					}
					if (CTE.dataExists(category, "message4")) {
						CTE.setBackupData(category, "message4", myItem.message4);
						myItem.message4 = CTE.getData(category, "message4");
					}
				}
			}
			else { // Restore base language text
				// Name is shared by all databases
				var backup = CTE.getBackupData(category, "name");
				if (backup !== null) myItem.name = backup;
				
				if (i < 4) { // Description is shared by all before States
					backup = CTE.getBackupData(category, "description");
					if (backup !== null) myItem.description = backup;
				}
				
				if (i == 0 || i == 4) { // Messages 1 and 2 are shared by Skills and States
					backup = CTE.getBackupData(category, "message1");
					if (backup !== null) myItem.message1 = backup;
					
					backup = CTE.getBackupData(category, "message2");
					if (backup !== null) myItem.message2 = backup;
				}
				
				if (i == 4) { // Messages 3 and 4 are States only
					backup = CTE.getBackupData(category, "message3");
					if (backup !== null) myItem.message3 = backup;
					
					backup = CTE.getBackupData(category, "message4");
					if (backup !== null) myItem.message4 = backup;
				}
			}
		}
	}
}

// Localize enemy names.
Game_Enemy.prototype.originalName = function() {
	if (!ConfigManager.isBaseLanguage()) {
		if (CTE.dataExists("enemies-" + this.enemyId(), "name")) {
			return CTE.getData("enemies-" + this.enemyId(), "name");
		}
	}
	return this.enemy().name;
};

// Localize basic terms.
TextManager.basic = function(basicId) {
	if (!ConfigManager.isBaseLanguage()) {
		var name = CTE.basicTermNames[basicId];
		if (CTE.dataExists("terms", name)) {
			return CTE.getData("terms", name);
		}
	}
	return $dataSystem.terms.basic[basicId] || '';
};

// Localize param terms.
TextManager.param = function(paramId) {
	if (!ConfigManager.isBaseLanguage()) {
		var name = CTE.paramTermNames[paramId];
		if (CTE.dataExists("terms", name)) {
			return CTE.getData("terms", name);
		}
	}
	return $dataSystem.terms.params[paramId] || '';
};

// Localize command terms.
TextManager.command = function(commandId) {
	if (!ConfigManager.isBaseLanguage()) {
		var name = CTE.commandTermNames[commandId];
		if (CTE.dataExists("terms", name)) {
			return CTE.getData("terms", name);
		}
	}
	return $dataSystem.terms.commands[commandId] || '';
};

// Localize message terms.
TextManager.message = function(messageId) {
	if (!ConfigManager.isBaseLanguage()) {
		var name = messageId.toLowerCase();
		if (CTE.dataExists("terms", name)) {
			return CTE.getData("terms", name);
		}
	}
	return $dataSystem.terms.messages[messageId] || '';
};

// Localize currency unit.
Object.defineProperty(TextManager, 'currencyUnit', {
	get: function() {
		if (!ConfigManager.isBaseLanguage()) {
			if (CTE.dataExists("system", "currency")) {
				return CTE.getData("system", "currency");
			}
		}
		return $dataSystem.currencyUnit;
	},
	configurable: true
});

// Localize skill type names.
Window_SkillType.prototype.makeCommandList = function() {
	if (this._actor) {
		var skillTypes = this._actor.addedSkillTypes();
		skillTypes.sort(function(a, b) {
			return a - b;
		});
		skillTypes.forEach(function(stypeId) {
			var name = $dataSystem.skillTypes[stypeId];
			if (!ConfigManager.isBaseLanguage()) {
				if (CTE.dataExists("types", "skilltypes")) {
					var list = CTE.getData("types", "skilltypes").split("\n");
					list.unshift(""); // Blank index 0
					if (stypeId < list.length) name = list[stypeId];
				}
			}
			this.addCommand(name, 'skill', true, stypeId);
		}, this);
	}
};

// Localize skill type names.
Window_ActorCommand.prototype.addSkillCommands = function() {
	var skillTypes = this._actor.addedSkillTypes();
	skillTypes.sort(function(a, b) {
		return a - b;
	});
	skillTypes.forEach(function(stypeId) {
		var name = $dataSystem.skillTypes[stypeId];
		if (!ConfigManager.isBaseLanguage()) {
			if (CTE.dataExists("types", "skilltypes")) {
				var list = CTE.getData("types", "skilltypes").split("\n");
				list.unshift(""); // Blank index 0
				if (stypeId < list.length) name = list[stypeId];
			}
		}
		this.addCommand(name, 'skill', true, stypeId);
	}, this);
};

// Localize equip slot names.
Window_EquipSlot.prototype.slotName = function(index) {
	if (this._actor) {
		var slots = this._actor.equipSlots();
		if (!ConfigManager.isBaseLanguage()) {
			if (CTE.dataExists("types", "equiptypes")) {
				var list = CTE.getData("types", "equiptypes").split("\n");
				list.unshift(""); // Blank index 0
				if (slots[index] < list.length) return list[slots[index]];
			}
		}
		return $dataSystem.equipTypes[slots[index]];
	}
	return '';
};

// Localize game title on boot.
Scene_Boot.prototype.updateDocumentTitle = function() {
	var gameTitle = CTE.getData("system", "title");
	if (gameTitle === null && $dataSystem) gameTitle = $dataSystem.gameTitle;
	if (gameTitle !== null) document.title = gameTitle;
};

// Add a "localize" argument for basic variable getter, and an override to force localization of strings.
CTE.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function(variableId, localize = false) {
	if ((localize || CTE.localizeVariableOverride) && this._data[variableId]) return CTE.localizeVariable(this._data[variableId], variableId);
	return CTE.Game_Variables_value.call(this, variableId);
};

// Localize string variable based on variable translation definitions, returning original value if nothing defined.
CTE.localizeVariable = function(str, targetVariable = 0) {
	if (typeof str !== "string") return str;
	
	if (targetVariable !== 0) {
		if (CTE.variableDataExists(targetVariable, str)) {
			return CTE.getVariableData(targetVariable, str);
		}
		if (CTE.variableRegexExists(targetVariable)) {
			var result = CTE.processVariableRegex(targetVariable, str);
			if (result !== str) return result;
		}
	}
	
	if (CTE.variableDataExists(0, str)) {
		return CTE.getVariableData(0, str);
	}
	if (CTE.variableRegexExists(0)) {
		var result = CTE.processVariableRegex(0, str);
		if (result !== str) return result;
	}
	
	return str;
};

// Set variable localize override when converting variable codes in messages.
CTE.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
	CTE.localizeVariableOverride = true;
	var result = CTE.Window_Base_convertEscapeCharacters.apply(this, arguments);
	CTE.localizeVariableOverride = false;
	return result;
};

// Localize game title (and map names, if they exist in the save data) for save files in file menu.
CTE.DataManager_loadSavefileInfo = DataManager.loadSavefileInfo;
DataManager.loadSavefileInfo = function(savefileId) {
	var saveInfo = CTE.DataManager_loadSavefileInfo.apply(this, arguments);
	if (saveInfo !== null) {
		if (!ConfigManager.isBaseLanguage()) {
			// If Base Language title and map name have not yet been backed up, do so before editing the variables.
			if (typeof saveInfo._backupTitle === "undefined") saveInfo._backupTitle = saveInfo.title;
			if (typeof saveInfo._backupMapName === "undefined") saveInfo._backupMapName = saveInfo.mapName;
			
			if (CTE.dataExists("system", "title")) {
				if (typeof saveInfo.title !== "undefined" && $dataSystem && saveInfo._backupTitle === $dataSystem.gameTitle) {
					saveInfo.title = CTE.getData("system", "title");
				}
			}
			
			if (typeof saveInfo.mapName !== "undefined") {
				if (CTE.dataExists("displayname", saveInfo._backupMapName)) {
					saveInfo.mapName = CTE.getData("displayname", saveInfo._backupMapName);
				}
			}
		}
		else {
			// Revert title and map name to Base Language backups if they were made.
			if (typeof saveInfo._backupTitle !== "undefined") saveInfo.title = saveInfo._backupTitle;
			if (typeof saveInfo._backupMapName !== "undefined") saveInfo.mapName = saveInfo._backupMapName;
		}
	}
	return saveInfo;
};

// When making save file info, keep non-translated map display name in a backup variable in case game uses a plugin to show display name.
CTE.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function() {
	var info = CTE.DataManager_makeSavefileInfo.apply(this, arguments);
	info._backupMapName = $gameMap.displayName(false);
	return info;
}

// Just before saving to global file (so that ordering of makeSavefileInfo function chain doesn't matter), revert title and map mame to Base Language backups, then remove the backup variables.
CTE.DataManager_saveGlobalInfo = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function(info) {
	for (var i = 0; i < info.length; i++) {
		var fileInfo = info[i];
		if (fileInfo === null || typeof fileInfo === "undefined") continue;
		if (typeof fileInfo._backupTitle !== "undefined") {
			fileInfo.title = fileInfo._backupTitle;
			fileInfo._backupTitle = undefined;
		}
		if (typeof fileInfo._backupMapName !== "undefined") {
			fileInfo.mapName = fileInfo._backupMapName;
			fileInfo._backupMapName = undefined;
		}
	}
	CTE.DataManager_saveGlobalInfo.call(this, info);
};

/******************************
ALTERNATE IMAGE LOADING
******************************/

// Automatically try to load translated images for current language.
CTE.ImageManager_loadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
	if (!ConfigManager.isBaseLanguage()) {
		// Determine if a translated version of the image exists in a subfolder for the current language.
		var language = ConfigManager.getLanguage();
		var imgSubfolder = folder.substr(folder.indexOf("img/") + "img/".length);
		var existsInList = false;
		if (typeof CTE.translatedImageList[language.toLowerCase()] !== "undefined" && CTE.translatedImageList[language.toLowerCase()].includes(imgSubfolder + filename)) {
			existsInList = true;
		}
		
		if (Utils.isNwjs()) { // Directly check if file exists
			var fs = require("fs");
			var path = require("path");
			var imageInLanguageSubfolder = path.join(path.dirname(process.mainModule.filename), folder + language + "/" + filename + (!Decrypter.hasEncryptedImages? ".png" : ".rpgmvp"));
			if (fs.existsSync(imageInLanguageSubfolder)) {
				if (!existsInList && CTE.MakeImageList) { // New file discovered; add it to list and re-save
					CTE.translatedImageList[language.toLowerCase()].push(imgSubfolder + filename);
					CTE.saveTranslatedImagesFile();
				}
				try {
					return CTE.ImageManager_loadBitmap.call(this, folder + language + "/", filename, hue, smooth);
				}
				catch (e) {
				}
			}
		}
		else { // Refer to list of known translated images
			if (existsInList) {
				try {
					return CTE.ImageManager_loadBitmap.call(this, folder + language + "/", filename, hue, smooth);
				}
				catch (e) {
				}
			}
		}
		
		// Otherwise, if file ends in _XX (Base Language Code), check for equivalent _YY (current language code).
		if (filename.match(new RegExp("_" + CTE.BaseLanguage + "$"))) {
			var newName = filename.slice(0, -CTE.BaseLanguage.length) + ConfigManager.getLanguage();
			existsInList = false;
			if (typeof CTE.translatedImageList[language.toLowerCase()] !== "undefined" && CTE.translatedImageList[language.toLowerCase()].includes(imgSubfolder + newName)) {
				existsInList = true;
			}
			
			if (Utils.isNwjs()) { // Directly check if file exists
				var fs = require("fs");
				var path = require("path");
				var altImage = path.join(path.dirname(process.mainModule.filename), folder + "/" + newName + (!Decrypter.hasEncryptedImages? ".png" : ".rpgmvp"));
				if (fs.existsSync(altImage)) {
					if (!existsInList && CTE.MakeImageList) { // New file discovered; add it to list and re-save
						CTE.translatedImageList[language.toLowerCase()].push(imgSubfolder + newName);
						CTE.saveTranslatedImagesFile();
					}
					try {
						return CTE.ImageManager_loadBitmap.call(this, folder, newName, hue, smooth);
					}
					catch (e) {
					}
				}
			}
			else { // Refer to list of known translated images
				if (existsInList) {
					try {
						return CTE.ImageManager_loadBitmap.call(this, folder, newName, hue, smooth);
					}
					catch (e) {
					}
				}
			}
		}
	}
	
	return CTE.ImageManager_loadBitmap.apply(this, arguments);
};

// In playtest, checks image folders for language subfolders and generates TranslatedImage.txt.
CTE.generateTranslatedImageList = function() {
	if (!Utils.isNwjs()) return;
	
	var fs = require("fs");
	var path = require("path");
	var imgPath = path.join(path.dirname(process.mainModule.filename), "img/");
	
	var imageFolders = [ "animations", "battlebacks1", "battlebacks2", "characters", "enemies", "faces", "parallaxes", "pictures", "sv_actors", "sv_enemies", "system", "tilesets", "titles1", "titles2" ];
	for (var i = 0; i < imageFolders.length; i++) {
		for (var languageIndex = 0; languageIndex < CTE.LanguageCodes.length; languageIndex++) {
			var language = CTE.LanguageCodes[languageIndex].toLowerCase();
			var imageFolder = imageFolders[i];
			
			// Add any files in language subfolders.
			var subfolderPath = path.join(imgPath, imageFolders[i] + "/" + language);
			if (fs.existsSync(subfolderPath)) {
				var files = fs.readdirSync(subfolderPath);
				for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
					var file = files[fileIndex];
					if (file.toLowerCase().endsWith(".png") || file.toLowerCase().endsWith(".rpgmvp")) {
						if (file.toLowerCase().endsWith(".png")) file = file.slice(0, -4);
						else if (file.toLowerCase().endsWith(".rpgmvp")) file = file.slice(0, -7);
						CTE.translatedImageList[language] = CTE.translatedImageList[language] || [];
						CTE.translatedImageList[language].push(imageFolder + "/" + file);
					}
				}
			}
		}
		
		// Check all files in folder for ones ending in _XX (Base Language Code), and add equivalents that exist for each language.
		var folderPath = path.join(imgPath, imageFolders[i] + "/");
		if (fs.existsSync(folderPath)) {
			var files = fs.readdirSync(folderPath);
			for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
				var filename = files[fileIndex];
				if (filename.toLowerCase().endsWith(".png") || filename.toLowerCase().endsWith(".rpgmvp")) {
					if (filename.toLowerCase().endsWith(".png")) filename = filename.slice(0, -4);
					else if (filename.toLowerCase().endsWith(".rpgmvp")) filename = filename.slice(0, -7);
					if (filename.match(new RegExp("_" + CTE.BaseLanguage + "$"))) {
						for (var languageIndex = 0; languageIndex < CTE.LanguageCodes.length; languageIndex++) {
							var language = CTE.LanguageCodes[languageIndex];
							if (language === CTE.BaseLanguage) continue;
							
							var newName = filename.slice(0, -CTE.BaseLanguage.length) + language;
							if (fs.existsSync(folderPath + newName + ".png") || fs.existsSync(folderPath + newName + ".rpgmvp")) {
								language = language.toLowerCase();
								CTE.translatedImageList[language] = CTE.translatedImageList[language] || [];
								CTE.translatedImageList[language].push(imageFolder + "/" + newName);
							}
						}
					}
				}
			}
		}
	}
	
	CTE.saveTranslatedImagesFile();
};

// In playtest, save TranslatedImage.txt based on list data.
CTE.saveTranslatedImagesFile = function() {
	if (!Utils.isNwjs()) return;
	
	var output = "";
	var keys = Object.keys(CTE.translatedImageList);
	for (var i = 0; i < keys.length; i++) {
		output += "::" + keys[i].toUpperCase() + "\n";
		for (var k = 0; k < CTE.translatedImageList[keys[i]].length; k++) {
			output += CTE.translatedImageList[keys[i]][k] + "\n";
		}
		if (i < keys.length - 1) output += "\n";
	}
	
	if (output !== "") {
		try {
			var fs = require("fs");
			var path = require("path");
			var languagesPath = path.join(path.dirname(process.mainModule.filename), CTE_getLanguagesFolder());
			fs.writeFileSync(languagesPath + "TranslatedImages.txt", output.replace(/\n/g, "\r\n"));
		}
		catch (e) {
			CTE.warn("Failed to write TranslatedImages.txt. " + e.message);
		}
	}
};

// Outside of NW.js, load translated image list from TranslatedImages.txt.
CTE.loadTranslatedImagesFile = function() {
	if (CTE.load(CTE_getLanguagesFolder() + "TranslatedImages.txt")) {
		var language = "";
		var lines = CTE.fileText.replace(/\r/g, "").split("\n");
		
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i].trim();
			if (line.startsWith("::")) {
				language = line.substring(2).toLowerCase();
			}
			else if (line !== "" && language !== "") {
				CTE.translatedImageList[language] = CTE.translatedImageList[language] || [];
				CTE.translatedImageList[language].push(line);
			}
		}
	}
};

/******************************
PAGE LANGUAGE CONDITIONS
******************************/

// Set up page language conditions whenever events refresh.
CTE.Game_Event_refresh = Game_Event.prototype.refresh;
Game_Event.prototype.refresh = function() {
	this.setPageLanguageConditions();
	CTE.Game_Event_refresh.apply(this, arguments);
};

// Define language conditions for each page based on whether there's a comment defining one at the top.
Game_Event.prototype.setPageLanguageConditions = function() {
	this.languageConditions = [];
	for (var i = 0; i < this.event().pages.length; i++) {
		var page = this.event().pages[i];
		
		var language = null;
		for (var commandIndex = 0; commandIndex < page.list.length; commandIndex++) {
			var command = page.list[commandIndex];
			if (!command) break;
			if (command.code === 108 || command.code === 408) {
				var comment = page.list[commandIndex].parameters[0];
				if (comment.toLowerCase().startsWith("<ctelanguage:")) {
					var startIndex = comment.toLowerCase().indexOf("<ctelanguage:") + 13;
					var endIndex = comment.indexOf(">", startIndex + 1);
					language = comment.substring(startIndex, endIndex).toLowerCase();
					break;
				}
			}
			else { // Stop as soon as a non-comment is reached
				break;
			}
		}
		
		if (language === null) { // No language
			this.languageConditions[i] = null;
		}
		else if (language.includes(",")) { // Multiple languages
			this.languageConditions[i] = language.split(",");
		}
		else { // Single language
			this.languageConditions[i] = [ language ];
		}
	}
};

// Alongside regular conditions, check language for pages that specify one, returning false if it doesn't match.
CTE.Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function(page) {
	var pageIndex = this.event().pages.indexOf(page);
	var condition = this.languageConditions[pageIndex];
	if (condition !== null && !condition.includes(ConfigManager.getLanguage().toLowerCase())) {
		return false;
	}
	return CTE.Game_Event_meetsConditions.apply(this, arguments);
};

/******************************
CONFIG LANGUAGE SETTING
******************************/

ConfigManager._language = "";

Object.defineProperty(ConfigManager, "language", {
	get: function() {
		return this._language;
	},
	set: function(value) {
		this._language = value;
		
		// Update database text for new language.
		CTE.updateDatabaseText();
		
		// Update window title.
		var gameTitle = CTE.getData("system", "title");
		if (gameTitle === null && $dataSystem) gameTitle = $dataSystem.gameTitle;
		if (gameTitle !== null) document.title = gameTitle;
		
		// Update anything custom.
		CTE.languageRefreshHandler();
	},
	configurable: true
});

ConfigManager.getLanguage = function() {
	return this._language;
};

ConfigManager.getLanguageIndex = function() {
	return CTE.LanguageCodes.indexOf(this.getLanguage());
};

ConfigManager.isLanguage = function(language) {
	return this.getLanguage().toLowerCase() === language.toLowerCase();
};

ConfigManager.isBaseLanguage = function() {
	return this.isLanguage(CTE.BaseLanguage);
};

CTE.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	var config = CTE.ConfigManager_makeData.apply(this, arguments);
	config.language = this.language;
	return config;
};

CTE.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	CTE.ConfigManager_applyData.apply(this, arguments);
	this.language = this.readLanguage(config, "language");
};

ConfigManager.readLanguage = function(config, name) {
	if (CTE.LockLanguage) return CTE.DefaultLanguage;
	var value = config[name];
	if (value !== undefined) {
		return value;
	}
	else {
		var userLanguageCode = CTE.languageCodeFromExternalAPI();
		return (userLanguageCode !== ""? userLanguageCode : CTE.DefaultLanguage !== ""? CTE.DefaultLanguage : CTE.BaseLanguage);
	}
};

/******************************
ADD LANGUAGE OPTION
******************************/

if (!CTE.LockLanguage) {
	CTE.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
	Window_Options.prototype.addGeneralOptions = function() {
		CTE.Window_Options_addGeneralOptions.apply(this, arguments);
		this.addCommand(CTE.getString("LanguageOptionName", CTE.BaseLanguageOptionName), "language");
	};
	
	CTE.Window_Options_statusText = Window_Options.prototype.statusText;
	Window_Options.prototype.statusText = function(index) {
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === "language") {
			if (value.toLowerCase() === CTE.BaseLanguage.toLowerCase()) {
				return CTE.BaseLanguageDisplayName;
			}
			else if (CTE.dataExistsForLanguage(value, "extra", "LanguageDisplayName")) {
				return CTE.getDataForLanguage(value, "extra", "LanguageDisplayName");
			}
			else {
				return value;
			}
		}
		return CTE.Window_Options_statusText.apply(this, arguments);
	};
	
	Window_Options.prototype.incrementLanguage = function(value, symbol) {
		var index = CTE.LanguageCodes.indexOf(value)
		index = (index + 1) % CTE.LanguageCodes.length;
		value = CTE.LanguageCodes[index];
		this.changeValue(symbol, value);
		this.refresh();
	};
	
	Window_Options.prototype.decrementLanguage = function(value, symbol) {
		var index = CTE.LanguageCodes.indexOf(value)
		index = (index + CTE.LanguageCodes.length - 1) % CTE.LanguageCodes.length;
		value = CTE.LanguageCodes[index];
		this.changeValue(symbol, value);
		this.refresh();
	};
	
	CTE.Window_Options_processOk = Window_Options.prototype.processOk;
	Window_Options.prototype.processOk = function() {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === "language") {
			return this.incrementLanguage(value, symbol);
		}
		CTE.Window_Options_processOk.apply(this, arguments);
	};
	
	CTE.Window_Options_cursorRight = Window_Options.prototype.cursorRight;
	Window_Options.prototype.cursorRight = function(wrap) {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === "language") {
			return this.incrementLanguage(value, symbol);
		}
		CTE.Window_Options_cursorRight.apply(this, arguments);
	};
	
	CTE.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
	Window_Options.prototype.cursorLeft = function(wrap) {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === "language") {
			return this.decrementLanguage(value, symbol);
		}
		CTE.Window_Options_cursorLeft.apply(this, arguments);
	};
}

/******************************
USE DEFAULT FONT FOR LANGUAGE
******************************/

// Preload defined default font for language as soon as language data has been loaded.
CTE.preloadDefaultFont = function(language = null) {
	if (language === null) language = ConfigManager.getLanguage();
	
	if (CTE.dataExistsForLanguage(language, "extra", "DefaultFont")) {
		var myFont = CTE.getDataForLanguage(language, "extra", "DefaultFont");
		if (myFont !== "" && !CTE.preloadedFonts.contains(myFont)) {
			Graphics._createFontLoader(myFont);
			CTE.preloadedFonts.push(myFont);
		}
	}
};

// Use specified default font for language.
CTE.Window_Base_standardFontFace = Window_Base.prototype.standardFontFace;
Window_Base.prototype.standardFontFace = function() {
	if (!ConfigManager.isBaseLanguage()) {
		var myFont = CTE.getString("DefaultFont", "");
		if (myFont !== "") {
			return myFont;
		}
	}
	return CTE.Window_Base_standardFontFace.apply(this, arguments);
};

CTE.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
	CTE.Bitmap_initialize.apply(this, arguments);
	if (!ConfigManager.isBaseLanguage()) {
		var myFont = CTE.getString("DefaultFont", "");
		if (myFont !== "") {
			this.fontFace = myFont;
		}
	}
};

/******************************
MESSAGE SPEED
******************************/

// Initialize speed modifier variables when a message starts.
CTE.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	CTE.Window_Message_startMessage.apply(this, arguments);
	this.speedBoostTimer = 0;
	this.extraCharCount = 0;
};

// Modify number of characters typed every X frames based on message speed setting for language.
CTE.Window_Message_updateMessage = Window_Message.prototype.updateMessage;
Window_Message.prototype.updateMessage = function() {
	if (Object.keys(PluginManager.parameters("MessageSpeedCustomize")).length > 0) { // Incorporate speed handling from MessageSpeedCustomize if using it
		var speed = this.getMessageSpeed();
		if (this._textState && !this._lineShowFast) {
			if (speed <= 0 || this._showAll) {
				this._showFast = true;
			} else if (!this.isEndOfText(this._textState)) {
				this._waitCount = speed - 1;
			}
		}
	}
	
	var speedSetting = CTE.getString("MessageSpeed", "1");
	if (speedSetting !== "" && speedSetting !== "1") {
		speedSetting = speedSetting.replace(/x/gi, "").replace(/0\./g, ".");
	}
	
	var modifier = 0
	var modifyPeriod = 0;
	switch (speedSetting) {
		case ".125": modifier = -7; modifyPeriod = 1; break; // 1/8
		case ".25": modifier = -3; modifyPeriod = 1; break; // 1/4
		case ".5": modifier = -1; modifyPeriod = 1; break; // 1/2
		case ".66": modifier = -1; modifyPeriod = 2; break; // 2/3 (repeating)
		case ".75": modifier = -1; modifyPeriod = 3; break; // 3/4
		case ".8": modifier = -1; modifyPeriod = 4; break; // 4/5
		case ".9": modifier = -1; modifyPeriod = 9; break; // 10/11 (approximate)
		case "1.1": modifier = 1; modifyPeriod = 10; break; // 11/10
		case "1.125": modifier = 1; modifyPeriod = 8; break; // 9/8
		case "1.16": modifier = 1; modifyPeriod = 6; break; // 7/6 (repeating)
		case "1.2": modifier = 1; modifyPeriod = 5; break; // 6/5
		case "1.25": modifier = 1; modifyPeriod = 4; break; // 5/4
		case "1.33": modifier = 1; modifyPeriod = 3; break; // 4/3 (repeating)
		case "1.5": modifier = 1; modifyPeriod = 2; break; // 3/2
		case "1.66": modifier = 1; modifyPeriod = 2; break; // 5/3 (repeating)
		case "2": modifier = 1; modifyPeriod = 1; break; // 2/1
	}
	
	// At 1x message speed, just use original function.
	if (modifier == 0) return CTE.Window_Message_updateMessage.apply(this, arguments);
	
	if (this._textState) {
		while (!this.isEndOfText(this._textState)) {
			if (this.needsNewPage(this._textState)) {
				this.newPage(this._textState);
			}
			
			if (this.extraCharCount < 0) { // Skip this frame if working through a negative modifier
				this.extraCharCount++;
				break;
			}
			
			this.updateShowFast();
			this.processCharacter(this._textState);
			
			if (this.extraCharCount <= 0) { // Advance loop timer if not working through extra characters
				this.speedBoostTimer++;
			}
			else { // Otherwise, work through extra characters
				this.extraCharCount--;
			}
			
			if (this.speedBoostTimer >= modifyPeriod) { // When loop timer reaches end of period, set the character modifier
				this.speedBoostTimer = 0;
				this.extraCharCount = modifier;
			}
			
			if (this.pause || this._waitCount > 0) {
				if (this.extraCharCount > 0) this.extraCharCount = 0; // If paused by a control code, give up on typing extra characters
				break;
			}
			if (!this._showFast && !this._lineShowFast && this.extraCharCount <= 0) { // Barring instant-type mode, stop processing characters if dealing with a negative modifier
				break;
			}
		}
		if (this.isEndOfText(this._textState)) {
			this.onEndOfText();
		}
		return true;
	} else {
		return false;
	}
};

/******************************
TEXT/CSV EXPORTING
******************************/

// Begin processing base data for export.
CTE.beginExportProcess = function() {
	if (CTE.exportingBase) {
		CTE.warn("Exporting text data for base language (" + (CTE.BaseExportFilename || CTE.BaseLanguage) + ")...");
	}
	if (CTE.exportingTable) {
		CTE.warn("Exporting language comparison table (ReferenceTable.csv)...");
	}
	if (CTE.exportingIdentical) {
		CTE.warn("Checking for identical text (logged to IdenticalWarnings.txt)...");
	}
	if (CTE.exportingReformat) {
		CTE.warn("Exporting reformatted text to " + (CTE.languageForReformat) + " (Reformatted)...");
	}
	
	CTE.exportedContent = { text: "", table: "" };
	CTE.exportedIdentical = "";
	CTE.variableStringAssignments = [];
	
	if (CTE.exportingTable || CTE.exportingIdentical || CTE.exportingReformat) {
		CTE.orderedLanguages = [...CTE.LanguageCodes];
		if (CTE.orderedLanguages.length > 0 && CTE.orderedLanguages[0].toLowerCase() !== CTE.BaseLanguage.toLowerCase()) {
			var baseIndex = CTE.orderedLanguages.indexOf(CTE.BaseLanguage);
			if (baseIndex != -1) {
				CTE.orderedLanguages.splice(baseIndex, 1);
				CTE.orderedLanguages.unshift(CTE.BaseLanguage);
			}
		}
	}
	
	if (CTE.exportingTable) { // Start the table with a header row labeling each language
		for (var i = 0; i < CTE.orderedLanguages.length; i++) {
			CTE.exportedContent.table += (i > 0? "," : "") + CTE.writeForTable(CTE.orderedLanguages[i]);
		}
	}
	
	CTE.exportingPosition = {};
	
	// Start by exporting all maps.
	CTE.exportingMapNum = 1;
	CTE.loadNextMap();
};

// Check for database loaded status to perform launch actions once ready. Otherwise, call CTE.onDataLoad to process certain data files.
CTE.DataManager_onLoad = DataManager.onLoad;
DataManager.onLoad = function(object) {
	if (object === $CTETemp) { // After temp-loading a map, export text from it, then move to next map (or databases, )
		CTE.exportMapText();
		CTE.exportingMapNum++;
		if (CTE.exportingMapNum < $dataMapInfos.length) {
			CTE.loadNextMap();
		}
		else {
			CTE.exportDatabases();
		}
	}
	else {
		// Create translated image list, either by checking files directly in NW.js or by loading from list.
		if (CTE.launchImageListPending) {
			CTE.launchImageListPending = false;
			if (Utils.isNwjs() && CTE.isPlaytest() && CTE.MakeImageList) { // Generate list
				CTE.generateTranslatedImageList();
			}
			else if (!Utils.isNwjs()) { // Load list from file
				CTE.loadTranslatedImagesFile();
			}
		}
		
		// Once enough of database is loaded to do so, load language scripts.
		if (CTE.launchLoadPending && $dataMapInfos && $dataCommonEvents && (!CTE.usingCommonEvents2 || $dataCommonEvents2) && $dataTroops) {
			CTE.launchLoadPending = false;
			CTE.loadLanguageScripts();
		}
		
		// If database is done loading and launch export has not been performed, start the process.
		if (CTE.launchExportPending && DataManager.isDatabaseLoaded()) {
			CTE.launchExportPending = false;
			if (Utils.isNwjs() && CTE.isPlaytest()) {
				if (CTE.ExportBaseOnLaunch || CTE.ExportTableOnLaunch || CTE.ExportIdenticalOnLaunch) {
					CTE.exportingBase = CTE.ExportBaseOnLaunch;
					CTE.exportingTable = CTE.ExportTableOnLaunch;
					CTE.exportingIdentical = CTE.ExportIdenticalOnLaunch;
					CTE.exportingReformat = false;
					CTE.beginExportProcess();
				}
			}
		}
		
		// Specially process certain files for in-game purposes.
		CTE.onDataLoad(object);
		
		// Go to original function.
		CTE.DataManager_onLoad.apply(this, arguments);
	}
};

// Load map file (if it exists) and wait for it to load. Move on to the next if it doesn't exist.
CTE.loadNextMap = function() {
	if (!Utils.isNwjs()) return;
	
	var fs = require("fs");
	var path = require("path");
	var dataPath = path.join(path.dirname(process.mainModule.filename), "data/");
	
	var filename = "Map%1.json".format(CTE.exportingMapNum.padZero(3));
	if ($dataMapInfos[CTE.exportingMapNum] && fs.existsSync(dataPath + filename)) { 
		$CTETemp = {};
		DataManager.loadDataFile("$CTETemp", filename);
	}
	else {
		CTE.exportingMapNum++;
		if (CTE.exportingMapNum < $dataMapInfos.length) {
			CTE.loadNextMap();
		}
		else {
			CTE.exportDatabases();
		}
	}
};

// Export map text from $CTETemp.
CTE.exportMapText = function() {
	CTE.exportingPosition["file"] = "map" + CTE.exportingMapNum;
	var mapContent = { text: "", table: "" };
	
	var mapDetails = "";
	if ($dataMapInfos[CTE.exportingMapNum]) {
		mapDetails = " (" + $dataMapInfos[CTE.exportingMapNum].name + ")";
	}
	var mapHeader = "=====Map" + CTE.exportingMapNum + "=====" + mapDetails + "\n";
	
	if ($CTETemp.displayName !== "") {
		CTE.writeFormat(mapContent, "\n#DisplayName:" + $CTETemp.displayName + "#{1}\n{0}\n##\n", $CTETemp.displayName, function(language) {
			CTE.exportingPosition["event"] = "displayname";
			CTE.exportingPosition["command"] = "DisplayName:" + $CTETemp.displayName;
			return CTE.getDataForLanguage(language, "map" + CTE.exportingMapNum, "displayname");
		}, "f", "displayname");
	}
	
	for (var eventNum = 0; eventNum < $CTETemp.events.length; eventNum++)
	{
		var ev = $CTETemp.events[eventNum];
		if (ev === null) continue;
		
		CTE.exportingPosition["event"] = ev.id;
		var eventContent = { text: "", table: "" };
		var eventHeader = "\n**********Event" + ev.id + "********** (" + ev.name + ") (" + ev.x + "," + ev.y + ")\n";
		
		for (var pageNum = 0; pageNum < ev.pages.length; pageNum++) {
			var page = ev.pages[pageNum];
			
			CTE.exportingPosition["page"] = pageNum + 1;
			var pageHeader = "-----Page" + (pageNum + 1) + "-----\n";
			
			var pageContent = { text: "", table: "" };
			CTE.exportCommandList(pageContent, page.list);
			
			CTE.writeToContentWithContent(eventContent, pageContent, pageHeader, "f-e-p");
		}
		
		CTE.writeToContentWithContent(mapContent, eventContent, eventHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, mapContent, mapHeader, "f");
	
	if (!CTE.AllInOneFile && !CTE.AllInOneMaps) {
		CTE.writeBaseFile("Map%1".format(CTE.exportingMapNum.padZero(3)));
	}
};

// Export text for a list of commands in a page, common event, or troop page.
CTE.exportCommandList = function(content, list) {
	var commandsContent = { text: "", table: "" };
	var commandCounter = {};
	var wroteNonComment = false;
	
	for (var commandNum = 0; commandNum < list.length; commandNum++) {
		var command = list[commandNum];
		var commandContent = { text: "", table: "" };
		
		var customOutput = CTE.commandExportHandlerPrefix(command);
		if (customOutput !== "") CTE.writeSame(commandContent, customOutput);
		
		var commandName = "";
		var wroteNonCustom = false;
		
		if (command.code == 101) { // Show Text
			commandName = "Message";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var str = "";
			var previousLine = false;
			do {
				commandNum++;
				command = list[commandNum];
				if (command.code == 401) { // Text content
					str += (previousLine? "\n" : "") + command.parameters[0];
					previousLine = true;
				}
				else {
					commandNum--;
				}
			} while (command.code == 401); // Text content
			
			var result = CTE.writeFormat(commandContent, "#Message#{1}\n{0}\n##", str, function(language) {
				return CTE.getCommandTextForCSV(language, commandName, commandCounter);
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 102) { // Show Choice
			commandName = "Choice";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var str = "";
			for (var i = 0; i < command.parameters[0].length; i++) {
				str += (i > 0? "\n" : "") + command.parameters[0][i];
			}
			
			var result = CTE.writeFormat(commandContent, "#Choice#{1}\n{0}\n##", str, function(language) {
				var commandText = CTE.getCommandTextForCSV(language, commandName, commandCounter);
				if (commandText !== null && !commandText.includes("@if") && str.split("\n").length !== commandText.split("\n").length) {
					CTE.warn("Choices in " + language + " do not match base in " + CTE.getPositionString(CTE.exportingPosition), 2);
				}
				return commandText;
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 105) { // Show Scrolling Text
			commandName = "ScrollingMessage";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var str = "";
			var previousLine = false;
			do {
				commandNum++;
				command = list[commandNum];
				if (command.code == 405) { // Text content
					str += (previousLine? "\n" : "") + command.parameters[0];
					previousLine = true;
				}
				else {
					commandNum--;
				}
			} while (command.code == 405); // Text content
			
			var result = CTE.writeFormat(commandContent, "#ScrollingMessage#{1}\n{0}\n##", str, function(language) {
				return CTE.getCommandTextForCSV(language, commandName, commandCounter);
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 122) { // Control Variables
			if (command.parameters[3] === 4) { // Script
				var script = command.parameters[4].trim(); // Script to evaluate
				try {
					if ((script.startsWith("\"") && script.endsWith("\""))
					|| (script.startsWith("'") && script.endsWith("'"))) { // Likely to be a literal string definition
						var value = eval(script);
						if (typeof value === "string") {
							for (var i = command.parameters[0]; i <= command.parameters[1]; i++) { // From start to end of variable range
								CTE.variableStringAssignments[i] = CTE.variableStringAssignments[i] || [];
								CTE.variableStringAssignments[i].push(value);
							}
						}
					}
				}
				catch (e) {
				}
			}
		}
		
		else if (command.code == 320) { // Change Name
			commandName = "NameChange";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var originalString = command.parameters[1].replace(/\n/g, "\\n");
			var result = CTE.writeFormat(commandContent, "#NameChange:" + originalString + "#{1}\n{0}\n##", originalString, function(language) {
				return CTE.getDataForLanguage(language, "namechange", originalString);
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 324) { // Change Nickname
			commandName = "NicknameChange";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var originalString = command.parameters[1].replace(/\n/g, "\\n");
			var result = CTE.writeFormat(commandContent, "#NicknameChange:" + originalString + "#{1}\n{0}\n##", originalString, function(language) {
				return CTE.getDataForLanguage(language, "nicknamechange", originalString);
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 325) { // Change Profile
			commandName = "ProfileChange";
			commandCounter[commandName] = commandCounter[commandName] || 0;
			
			var originalString = command.parameters[1].replace(/\n/g, "\\n");
			var result = CTE.writeFormat(commandContent, "#ProfileChange:" + originalString + "#{1}\n{0}\n##", originalString, function(language) {
				return CTE.getDataForLanguage(language, "profilechange", originalString);
			}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-" + CTE.exportingPosition["page"] + "-" + (commandCounter[commandName] + 1), commandName);
			commandCounter[commandName]++;
			if (result) wroteNonComment = true;
			wroteNonCustom = true;
		}
		
		else if (command.code == 402) { // Choice Case
			CTE.writeSame(commandContent, "<" + command.parameters[1] + ">");
			wroteNonCustom = true;
		}
		
		else if (command.code == 403) { // Cancel Case
			CTE.writeSame(commandContent, "<Cancel>");
			wroteNonCustom = true;
		}
		
		var customOutput = CTE.commandExportHandlerPostfix(command);
		if (customOutput !== "") CTE.writeSame(commandContent, customOutput);
		
		if (commandContent.text !== "") commandsContent.text += commandContent.text + (wroteNonCustom? "\n\n" : "");
		if (commandContent.table !== "") commandsContent.table += commandContent.table + (wroteNonCustom? "\n\n" : "");
	}
	
	// Don't write to content unless something of substance was written in the command list.
	if (wroteNonComment) {
		content.text += commandsContent.text;
		content.table += commandsContent.table;
	}
	
	if (CTE.exportingTable || CTE.exportingReformat) {
		// Check if there are excess commands defined in language scripts that didn't get reached going by the commands in the data.
		var commandNames = [ "Message", "Choice", "ScrollingMessage" ]; // Name/Nickname/ProfileChange work differently, and in fact should not be considered excess
		
		for (var i = 0; i < commandNames.length; i++) {
			var commandName = commandNames[i];
			commandCounter[commandName] = commandCounter[commandName] || 0;
			CTE.exportingPosition["command"] = commandName;
			
			var file = CTE.exportingPosition["file"];
			var commandGroupID = CTE.getExportCommandGroupId(commandName);
			
			var excessExists = false;
			for (var k = 0; k < CTE.orderedLanguages.length; k++) {
				var language = CTE.orderedLanguages[k];
				if (CTE.commandDataExistsForLanguage(language, file, commandGroupID, commandCounter[commandName])) {
					CTE.warn("Excess " + language + " text in " + CTE.getPositionString(CTE.exportingPosition, true), 2);
					excessExists = true;
				}
			}
			
			// If excess commands exist, write next instance of this command type, then check if more still exists in any language, and repeat if so.
			if (excessExists) {
				do {
					CTE.writeFormat(content, "#" + commandName + "#{1}\n{0}\n##\n\n", "<<<NOT FOUND IN BASE>>>", function(language) {
						return CTE.getCommandTextForCSV(language, commandName, commandCounter);
					}, "", "", false); // Pass false to not show warnings for missing text in other languages, since it's excess
					commandCounter[commandName]++;
					
					excessExists = false;
					if (CTE.exportingTable) {
						for (var k = 0; k < CTE.orderedLanguages.length; k++) {
							if (CTE.commandDataExistsForLanguage(CTE.orderedLanguages[k], file, commandGroupID, commandCounter[commandName])) {
								excessExists = true;
								break;
							}
						}
					}
					if (CTE.exportingReformat) {
						excessExists = CTE.commandDataExistsForLanguage(CTE.languageForReformat, file, commandGroupID, commandCounter[commandName]);
					}
				} while (excessExists);
			}
		}
	}
};

// After exporting maps, export the rest from databases.
CTE.exportDatabases = function() {
	if (!CTE.AllInOneFile && CTE.AllInOneMaps) { // Export map text to combined map file is enabled
		CTE.writeBaseFile("AllMaps");
	}
	
	CTE.exportDatabaseCommonEvents();
	if (!CTE.AllInOneFile && CTE.AllInOneCommons) {
		CTE.writeBaseFile("AllCommons");
	}
	
	CTE.exportDatabaseTroops();
	if (!CTE.AllInOneFile && CTE.AllInOneTroops) {
		CTE.writeBaseFile("AllTroops");
	}
	
	CTE.exportDatabaseActors();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Actors");
	}
	
	CTE.exportDatabaseClasses();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Classes");
	}
	
	CTE.exportDatabaseSkills();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Skills");
	}
	
	CTE.exportDatabaseItems();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Items");
	}
	
	CTE.exportDatabaseWeapons();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Weapons");
	}
	
	CTE.exportDatabaseArmors();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Armors");
	}
	
	CTE.exportDatabaseEnemies();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Enemies");
	}
	
	CTE.exportDatabaseStates();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/States");
	}
	
	CTE.exportDatabaseSystem();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/System");
	}
	
	CTE.exportVariablesSection();
	if (!CTE.AllInOneFile && !CTE.AllInOneDatabase) {
		CTE.writeBaseFile("Databases/Variables");
	}
	
	CTE.exportExtraSection();
	if (!CTE.AllInOneFile) {
		if (!CTE.AllInOneDatabase) {
			CTE.writeBaseFile("Databases/Extra");
		}
		else {
			CTE.writeBaseFile("AllDatabases");
		}
	}
	
	CTE.exportFinish();
};

// Export text from $dataCommonEvents (and $dataCommonEvents2).
CTE.exportDatabaseCommonEvents = function() {
	if (!$dataCommonEvents) return;
	CTE.exportingPosition["file"] = "commonevents";
	
	var commonContent = { text: "", table: "" };
	var fileHeader = CTE.AllInOneFile || CTE.AllInOneCommons? "=====CommonEvents=====\n" : "";
	
	var commonSize = CTE.usingCommonEvents2? ($dataCommonEvents.length + $dataCommonEvents2.length) : $dataCommonEvents.length;
	for (var eventIndex = 0; eventIndex < commonSize; eventIndex++)
	{
		var myData = $dataCommonEvents;
		var indexInData = eventIndex;
		if (CTE.usingCommonEvents2 && eventIndex >= $dataCommonEvents.length) {
			myData = $dataCommonEvents2;
			indexInData -= $dataCommonEvents.length;
		}
		
		var ev = myData[indexInData];
		if (ev === null) continue;
		
		var eventNum = ev.id + (CTE.usingCommonEvents2 && eventIndex >= $dataCommonEvents.length? $dataCommonEvents.length - 1 : 0);
		CTE.exportingPosition["event"] = eventNum;
		CTE.exportingPosition["page"] = 0;
		var eventHeader = "\n**********Common" + eventNum + "********** (" + ev.name + ")\n";
		
		var eventContent = { text: "", table: "" };
		CTE.exportCommandList(eventContent, ev.list);
		
		CTE.writeToContentWithContent(commonContent, eventContent, eventHeader, "f-e");
		
		if (!CTE.AllInOneFile && !CTE.AllInOneCommons && commonContent.text !== "") {
			if (commonContent.text.startsWith("\n")) commonContent.text = commonContent.text.replace("\n", "") // Don't have excess linebreak at start of file
			CTE.exportedContent.text = commonContent.text;
			CTE.writeBaseFile("Commons/Common%1".format(eventNum.padZero(4)));
			CTE.exportedContent.text = "";
			commonContent.text = "";
		}
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, commonContent, fileHeader, "f");
};

// Export text from $dataTroops.
CTE.exportDatabaseTroops = function() {
	if (!$dataTroops) return;
	CTE.exportingPosition["file"] = "troops";
	
	var allTroopsContent = { text: "", table: "" };
	var fileHeader = CTE.AllInOneFile || CTE.AllInOneTroops? "=====Troops=====\n" : "";
	
	for (var troopNum = 0; troopNum < $dataTroops.length; troopNum++)
	{
		var troop = $dataTroops[troopNum];
		if (troop === null) continue;
		
		CTE.exportingPosition["event"] = troop.id;
		var troopHeader = (CTE.AllInOneFile || CTE.AllInOneTroops? "\n" : "") + "**********Troop" + troop.id + "********** (" + troop.name + ")\n";
		var troopContent = { text: "", table: "" };
		
		for (var pageNum = 0; pageNum < troop.pages.length; pageNum++) {
			var page = troop.pages[pageNum];
			
			CTE.exportingPosition["page"] = pageNum + 1;
			var pageHeader = "-----Page" + (pageNum + 1) + "-----\n";
			
			var pageContent = { text: "", table: "" };
			CTE.exportCommandList(pageContent, page.list);
			
			CTE.writeToContentWithContent(troopContent, pageContent, pageHeader, "f-e-p");
		}
		
		CTE.writeToContentWithContent(allTroopsContent, troopContent, troopHeader, "f-e");
		
		if (!CTE.AllInOneFile && !CTE.AllInOneTroops && allTroopsContent.text !== "") {
			CTE.exportedContent.text = allTroopsContent.text;
			CTE.writeBaseFile("Troops/Troop%1".format(troopNum.padZero(4)));
			CTE.exportedContent.text = "";
			allTroopsContent.text = "";
		}
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, allTroopsContent, fileHeader, "f");
};

// Export text from $dataActors.
CTE.exportDatabaseActors = function() {
	if (!$dataActors) return;
	CTE.exportingPosition["file"] = "actors";
	
	var content = { text: "", table: "" };
	var header = "=====Actors=====\n";
	
	for (var entryNum = 0; entryNum < $dataActors.length; entryNum++)
	{
		var entry = $dataActors[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", entry.name);
		CTE.databaseExportString(entryContent, "Title", entry.nickname);
		CTE.databaseExportString(entryContent, "Profile", entry.profile);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataClasses.
CTE.exportDatabaseClasses = function() {
	if (!$dataClasses) return;
	CTE.exportingPosition["file"] = "classes";
	
	var content = { text: "", table: "" };
	var header = "=====Classes=====\n";
	
	for (var entryNum = 0; entryNum < $dataClasses.length; entryNum++)
	{
		var entry = $dataClasses[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", entry.name);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataSkills.
CTE.exportDatabaseSkills = function() {
	if (!$dataSkills) return;
	CTE.exportingPosition["file"] = "skills";
	
	var content = { text: "", table: "" };
	var header = "=====Skills=====\n";
	
	for (var entryNum = 0; entryNum < $dataSkills.length; entryNum++)
	{
		var entry = $dataSkills[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		// Prefer backed-up original text if it exists.
		var category = "skills-" + entryNum;
		var name = CTE.getBackupData(category, "name");
		var description = CTE.getBackupData(category, "description");
		var message1 = CTE.getBackupData(category, "message1");
		var message2 = CTE.getBackupData(category, "message2");
		
		if (name === null) name = entry.name || "";
		if (description === null) description = entry.description || "";
		if (message1 === null) message1 = entry.message1 || "";
		if (message2 === null) message2 = entry.message2 || "";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", name);
		CTE.databaseExportString(entryContent, "Description", description);
		CTE.databaseExportString(entryContent, "Message1", message1);
		CTE.databaseExportString(entryContent, "Message2", message2);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataItems.
CTE.exportDatabaseItems = function() {
	if (!$dataItems) return;
	CTE.exportingPosition["file"] = "items";
	
	var content = { text: "", table: "" };
	var header = "=====Items=====\n";
	
	for (var entryNum = 0; entryNum < $dataItems.length; entryNum++)
	{
		var entry = $dataItems[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		// Prefer backed-up original text if it exists.
		var category = "items-" + entryNum;
		var name = CTE.getBackupData(category, "name");
		var description = CTE.getBackupData(category, "description");
		
		if (name === null) name = entry.name || "";
		if (description === null) description = entry.description || "";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", name);
		CTE.databaseExportString(entryContent, "Description", description);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataWeapons.
CTE.exportDatabaseWeapons = function() {
	if (!$dataWeapons) return;
	CTE.exportingPosition["file"] = "weapons";
	
	var content = { text: "", table: "" };
	var header = "=====Weapons=====\n";
	
	for (var entryNum = 0; entryNum < $dataWeapons.length; entryNum++)
	{
		var entry = $dataWeapons[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		// Prefer backed-up original text if it exists.
		var category = "weapons-" + entryNum;
		var name = CTE.getBackupData(category, "name");
		var description = CTE.getBackupData(category, "description");
		
		if (name === null) name = entry.name || "";
		if (description === null) description = entry.description || "";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", name);
		CTE.databaseExportString(entryContent, "Description", description);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataArmors.
CTE.exportDatabaseArmors = function() {
	if (!$dataArmors) return;
	CTE.exportingPosition["file"] = "armors";
	
	var content = { text: "", table: "" };
	var header = "=====Armors=====\n";
	
	for (var entryNum = 0; entryNum < $dataArmors.length; entryNum++)
	{
		var entry = $dataArmors[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		// Prefer backed-up original text if it exists.
		var category = "armors-" + entryNum;
		var name = CTE.getBackupData(category, "name");
		var description = CTE.getBackupData(category, "description");
		
		if (name === null) name = entry.name || "";
		if (description === null) description = entry.description || "";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", name);
		CTE.databaseExportString(entryContent, "Description", description);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataEnemies.
CTE.exportDatabaseEnemies = function() {
	if (!$dataEnemies) return;
	CTE.exportingPosition["file"] = "enemies";
	
	var content = { text: "", table: "" };
	var header = "=====Enemies=====\n";
	
	for (var entryNum = 0; entryNum < $dataEnemies.length; entryNum++)
	{
		var entry = $dataEnemies[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", entry.name);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataStates.
CTE.exportDatabaseStates = function() {
	if (!$dataStates) return;
	CTE.exportingPosition["file"] = "states";
	
	var content = { text: "", table: "" };
	var header = "=====States=====\n";
	
	for (var entryNum = 0; entryNum < $dataStates.length; entryNum++)
	{
		var entry = $dataStates[entryNum];
		if (entry === null) continue;
		
		var entryContent = { text: "", table: "" };
		var entryHeader = "\n**********Entry" + entry.id + "**********\n";
		
		// Prefer backed-up original text if it exists.
		var category = "states-" + entryNum;
		var name = CTE.getBackupData(category, "name");
		var description = CTE.getBackupData(category, "description");
		var message1 = CTE.getBackupData(category, "message1");
		var message2 = CTE.getBackupData(category, "message2");
		var message3 = CTE.getBackupData(category, "message3");
		var message4 = CTE.getBackupData(category, "message4");
		
		if (name === null) name = entry.name || "";
		if (description === null) description = entry.description || "";
		if (message1 === null) message1 = entry.message1 || "";
		if (message2 === null) message2 = entry.message2 || "";
		if (message3 === null) message3 = entry.message3 || "";
		if (message4 === null) message4 = entry.message4 || "";
		
		CTE.exportingPosition["event"] = entry.id;
		CTE.databaseExportString(entryContent, "Name", name);
		CTE.databaseExportString(entryContent, "Message1", message1);
		CTE.databaseExportString(entryContent, "Message2", message2);
		CTE.databaseExportString(entryContent, "Message3", message3);
		CTE.databaseExportString(entryContent, "Message4", message4);
		
		CTE.writeToContentWithContent(content, entryContent, entryHeader, "f-e");
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Export text from $dataSystem, including Types and Terms tabs.
CTE.basicTermNames = [ "Level", "LevelAbbr", "HP", "HPAbbr", "MP", "MPAbbr", "TP", "TPAbbr", "EXP", "EXPAbbr" ];
CTE.paramTermNames = [ "MaxHP", "MaxMP", "Attack", "Defense", "MAttack", "MDefense", "Agility", "Luck", "HitRate", "EvasionRate" ];
CTE.commandTermNames = [ "Fight", "Escape", "AttackCommand", "GuardCommand", "ItemMenu", "SkillMenu",
	"EquipMenu", "StatusMenu", "Formation", "Save", "GameEnd", "Options",
	"Weapon", "Armor", "KeyItem", "Equip", "Optimize", "Clear",
	"NewGame", "Continue", "", "ToTitle", "Cancel", "", "Buy", "Sell" ];

CTE.exportDatabaseSystem = function() {
	var db = $dataSystem;
	if (!db) return;
	
	// System tab.
	var content = { text: "", table: "" };
	var header = "=====System=====\n";
	CTE.exportingPosition["file"] = "system";
	CTE.exportingPosition["event"] = 0;
	
	CTE.databaseExportString(content, "Title", db.gameTitle);
	CTE.databaseExportString(content, "Currency", db.currencyUnit);
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
	
	// Types tab.
	content = { text: "", table: "" };
	header = "=====Types=====\n";
	CTE.exportingPosition["file"] = "types"; 
	
	CTE.databaseExportString(content, "SkillTypes", CTE.linebreakList(db.skillTypes, 1));
	CTE.databaseExportString(content, "EquipTypes", CTE.linebreakList(db.equipTypes, 1));
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
	
	// Terms tab.
	content = { text: "", table: "" };
	header = "=====Terms=====\n";
	CTE.exportingPosition["file"] = "terms"; 
	
	var terms = db.terms;
	for (var i = 0; i < terms.basic.length; i++) {
		CTE.databaseExportString(content, CTE.basicTermNames[i], terms.basic[i]);
	}
	for (var i = 0; i < terms.params.length; i++) {
		CTE.databaseExportString(content, CTE.paramTermNames[i], terms.params[i]);
	}
	for (var i = 0; i < terms.commands.length; i++) {
		if (CTE.commandTermNames[i] !== "") {
			CTE.databaseExportString(content, CTE.commandTermNames[i], terms.commands[i]);
		}
	}
	
	var msg = terms.messages;
	CTE.databaseExportString(content, "AlwaysDash", msg.alwaysDash);
	CTE.databaseExportString(content, "CommandRemember", msg.commandRemember);
	CTE.databaseExportString(content, "BGMVolume", msg.bgmVolume);
	CTE.databaseExportString(content, "BGSVolume", msg.bgsVolume);
	CTE.databaseExportString(content, "MEVolume", msg.meVolume);
	CTE.databaseExportString(content, "SEVolume", msg.seVolume);
	CTE.databaseExportString(content, "Possession", msg.possession);
	CTE.databaseExportString(content, "EXPTotal", msg.expTotal);
	CTE.databaseExportString(content, "EXPNext", msg.expNext);
	CTE.databaseExportString(content, "SaveMessage", msg.saveMessage);
	CTE.databaseExportString(content, "LoadMessage", msg.loadMessage);
	CTE.databaseExportString(content, "File", msg.file);
	CTE.databaseExportString(content, "PartyName", msg.partyName);
	CTE.databaseExportString(content, "Emerge", msg.emerge);
	CTE.databaseExportString(content, "Preemptive", msg.preemptive);
	CTE.databaseExportString(content, "Surprise", msg.surprise);
	CTE.databaseExportString(content, "EscapeStart", msg.escapeStart);
	CTE.databaseExportString(content, "EscapeFailure", msg.escapeFailure);
	CTE.databaseExportString(content, "Victory", msg.victory);
	CTE.databaseExportString(content, "Defeat", msg.defeat);
	CTE.databaseExportString(content, "ObtainEXP", msg.obtainExp);
	CTE.databaseExportString(content, "ObtainGold", msg.obtainGold);
	CTE.databaseExportString(content, "ObtainItem", msg.obtainItem);
	CTE.databaseExportString(content, "LevelUp", msg.levelUp);
	CTE.databaseExportString(content, "ObtainSkill", msg.obtainSkill);
	CTE.databaseExportString(content, "UseItem", msg.useItem);
	CTE.databaseExportString(content, "CriticalToEnemy", msg.criticalToEnemy);
	CTE.databaseExportString(content, "CriticalToActor", msg.criticalToActor);
	CTE.databaseExportString(content, "ActorDamage", msg.actorDamage);
	CTE.databaseExportString(content, "ActorRecovery", msg.actorRecovery);
	CTE.databaseExportString(content, "ActorGain", msg.actorGain);
	CTE.databaseExportString(content, "ActorLoss", msg.actorLoss);
	CTE.databaseExportString(content, "ActorDrain", msg.actorDrain);
	CTE.databaseExportString(content, "ActorNoDamage", msg.actorNoDamage);
	CTE.databaseExportString(content, "ActorNoHit", msg.actorNoHit);
	CTE.databaseExportString(content, "EnemyDamage", msg.enemyDamage);
	CTE.databaseExportString(content, "EnemyRecovery", msg.enemyRecovery);
	CTE.databaseExportString(content, "EnemyGain", msg.enemyGain);
	CTE.databaseExportString(content, "EnemyLoss", msg.enemyLoss);
	CTE.databaseExportString(content, "EnemyDrain", msg.enemyDrain);
	CTE.databaseExportString(content, "EnemyNoDamage", msg.enemyNoDamage);
	CTE.databaseExportString(content, "EnemyNoHit", msg.enemyNoHit);
	CTE.databaseExportString(content, "Evasion", msg.evasion);
	CTE.databaseExportString(content, "MagicEvasion", msg.magicEvasion);
	CTE.databaseExportString(content, "CounterAttack", msg.counterAttack);
	CTE.databaseExportString(content, "Substitute", msg.substitute);
	CTE.databaseExportString(content, "BuffAdd", msg.buffAdd);
	CTE.databaseExportString(content, "DebuffAdd", msg.debuffAdd);
	CTE.databaseExportString(content, "BuffRemove", msg.buffRemove);
	CTE.databaseExportString(content, "ActionFailure", msg.actionFailure);
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header, "f");
};

// Add the Variables section at the end, including any detected string assignments.
CTE.exportVariablesSection = function() {
	var content = { text: "", table: "" };
	var header = "=====Variables=====\n";
	
	var writtenAssignments = [];
	
	for (var i = 0; i < CTE.variableStringAssignments.length; i++) {
		if (CTE.variableStringAssignments[i] && CTE.variableStringAssignments.length > 0) {
			for (var k = 0; k < CTE.variableStringAssignments[i].length; k++) {
				var baseString = CTE.variableStringAssignments[i][k];
				writtenAssignments[i] = writtenAssignments[i] || [];
				writtenAssignments[i].push(baseString);
				CTE.writeFormat(content, "#V" + i + "#\n" + baseString + "\n{0}\n\n", baseString, function(language) {
					return CTE.getVariableDataForLanguage(language, i, baseString);
				}, "", "", false);
			}
		}
	}
	
	if (CTE.exportingTable || CTE.exportingReformat) {
		// Assemble a list of all known variable definitions not already written.
		var normalKeys = [];
		var regexKeys = [];
		for (var i = 1; i < CTE.orderedLanguages.length; i++) {
			var language = CTE.orderedLanguages[i];
			if (CTE.data[language] && CTE.data[language]["variables"]) {
				var variableKeys = Object.keys(CTE.data[language]["variables"]);
				for (var varIndex = 0; varIndex < variableKeys.length; varIndex++) {
					var targetVariable = variableKeys[varIndex];
					var ruleKeys = Object.keys(CTE.data[language]["variables"][targetVariable]);
					for (var ruleIndex = 0; ruleIndex < ruleKeys.length; ruleIndex++) {
						var baseString = ruleKeys[ruleIndex];
						if (typeof writtenAssignments[targetVariable] === "undefined" || !writtenAssignments[targetVariable].includes(baseString)) {
							if (baseString !== "__regex__") {
								normalKeys[targetVariable] = normalKeys[targetVariable] || [];
								if (!normalKeys[targetVariable].includes(baseString)) {
									normalKeys[targetVariable].push(baseString);
								}
							}
							else {
								regexKeys[targetVariable] = regexKeys[targetVariable] || [];
								var regexList = CTE.data[language]["variables"][targetVariable]["__regex__"];
								for (var regexIndex = 0; regexIndex < regexList.length; regexIndex++) {
									regexKeys[targetVariable].push(regexList[regexIndex][0]);
								}
							}
						}
					}
				}
			}
		}
		
		// Then write the values from each language except base.
		for (var targetVariable = 0; targetVariable < Math.max(normalKeys.length, regexKeys.length); targetVariable++) {
			if (normalKeys[targetVariable]) {
				var ruleKeys = Object.keys(normalKeys[targetVariable]);
				
				for (var ruleIndex = 0; ruleIndex < ruleKeys.length; ruleIndex++) {
					var baseString = normalKeys[targetVariable][ruleIndex];
					
					if (CTE.exportingTable) {
						CTE.writeSame(content, targetVariable != 0? "#V" + targetVariable + "#\n" : "##\n", true, true);
						CTE.writeSame(content, baseString + "\n", true, true);
						
						for (var i = 1; i < CTE.orderedLanguages.length; i++) {
							var language = CTE.orderedLanguages[i];
							var value = CTE.getVariableDataForLanguage(language, targetVariable, baseString);
							if (value === null) value = "<<<NOT FOUND>>>";
							content.table += "," + CTE.writeForTable(value);
						}
						content.table += "\n\n";
					}
					
					if (CTE.exportingReformat) {
						CTE.writeSame(content, targetVariable != 0? "#V" + targetVariable + "#\n" : "##\n");
						CTE.writeSame(content, baseString + "\n");
						var language = CTE.languageForReformat;
						var value = CTE.getVariableDataForLanguage(language, targetVariable, baseString);
						if (value === null) value = "<<<NOT FOUND>>>";
						content.text += value + "\n\n";
					}
				}
			}
			
			if (regexKeys[targetVariable]) {
				for (var ruleIndex = 0; ruleIndex < regexKeys[targetVariable].length; ruleIndex++) {
					var baseString = regexKeys[targetVariable][ruleIndex];
					
					if (CTE.exportingTable) {
						CTE.writeSame(content, targetVariable != 0? "#V" + targetVariable + ",regex#\n" : "#regex#\n", true, true);
						CTE.writeSame(content, baseString + "\n", true, true);
						
						for (var i = 1; i < CTE.orderedLanguages.length; i++) {
							var language = CTE.orderedLanguages[i];
							var value = "<<<NOT FOUND>>>";
							if (CTE.data[language]["variables"][targetVariable]
							&& CTE.data[language]["variables"][targetVariable]["__regex__"]) { // Look for baseString in regex definitions for this language
								var regexList = CTE.data[language]["variables"][targetVariable]["__regex__"];
								for (var searchRuleIndex = 0; searchRuleIndex < regexList.length; searchRuleIndex++) {
									if (regexList[searchRuleIndex][0] === baseString) {
										value = regexList[searchRuleIndex][1];
										break;
									}
								}
							}
							content.table += "," + CTE.writeForTable(value);
						}
						content.table += "\n\n";
					}
					
					if (CTE.exportingReformat) {
						CTE.writeSame(content, targetVariable != 0? "#V" + targetVariable + ",regex#\n" : "#regex#\n");
						CTE.writeSame(content, baseString + "\n");
						
						var language = CTE.languageForReformat;
						var value = "<<<NOT FOUND>>>";
						if (CTE.data[language]["variables"][targetVariable]
						&& CTE.data[language]["variables"][targetVariable]["__regex__"]) { // Look for baseString in regex definitions for this language
							var regexList = CTE.data[language]["variables"][targetVariable]["__regex__"];
							for (var searchRuleIndex = 0; searchRuleIndex < regexList.length; searchRuleIndex++) {
								if (regexList[searchRuleIndex][0] === baseString) {
									value = regexList[searchRuleIndex][1];
									break;
								}
							}
						}
						content.text += value + "\n\n";
					}
				}
			}
		}
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header);
}

// Add the Extra section at the end, for defining arbitrary data values.
CTE.exportExtraSection = function() {
	var content = { text: "", table: "" };
	var header = "=====Extra=====\n";
	
	if (CTE.exportingBase) {
		content.text += "// Core Language Settings\n\n"
			+ "// The name of the language, as displayed in the options menu.\n"
			+ "LanguageDisplayName=" + CTE.BaseLanguageDisplayName + "\n\n"
			+ "// The name of the \"Language\" option in the options menu.\n"
			+ "LanguageOptionName=" + CTE.BaseLanguageOptionName + "\n\n"
			+ "// The default font for the language. (Usually GameFont. Will use standard font of base game if not defined.)\n"
			+ "DefaultFont=GameFont\n\n"
			+ "// The standard typing speed of messages. (Default 1x. Will use 1x if not defined.)\n"
			+ "// Supported values: 0.125x, 0.25x, 0.5x, 0.66x, 0.75x, 0.8x, 0.9x, 1x, 1.1x, 1.125x, 1.16x, 1.2x, 1.25x, 1.33x, 1.5x, 1.66x, 2x (\"x\" and leading \"0\" can be omitted)\n"
			+ "MessageSpeed=" + CTE.BaseMessageSpeed + "\n\n\n"
			+ "// User-Defined Variables\n\n"
			+ "PlaceholderDataName=value";
	}
	
	if (CTE.exportingTable || CTE.exportingReformat) {
		// First, assemble a list of all known keys across all languages.
		var allKeys = [];
		for (var i = 0; i < CTE.orderedLanguages.length; i++) {
			var language = CTE.orderedLanguages[i];
			if (CTE.data[language] && CTE.data[language]["extra"]) {
				var keys = Object.keys(CTE.data[language]["extra"]);
				for (var k = 0; k < keys.length; k++) {
					if (!allKeys.includes(keys[k])) {
						allKeys.push(keys[k]);
					}
				}
			}
		}
		
		if (CTE.exportingTable) {
			// Write the values for each key in each language except base.
			for (var k = 0; k < allKeys.length; k++) {
				var key = allKeys[k];
				var keyOrigName = CTE.getDataForLanguage(language, "extrakeys", key);
				if (keyOrigName === null) keyOrigName = key;
				
				if (k > 0) content.table += "\n";
				for (var i = 0; i < CTE.orderedLanguages.length; i++) {
					var language = CTE.orderedLanguages[i];
					if (i == 0) { // Base language
						content.table += CTE.writeForTable(keyOrigName + "=");
					}
					else { // Other languages
						var value = CTE.getString(key, "<<<NOT FOUND>>>", language);
						content.table += (i > 0? "," : "") + CTE.writeForTable(keyOrigName + "=" + value);
					}
				}
			}
		}
		
		if (CTE.exportingReformat) {
			// Write the values for each key in export language.
			for (var k = 0; k < allKeys.length; k++) {
				var key = allKeys[k];
				var keyOrigName = CTE.getDataForLanguage(language, "extrakeys", key);
				if (keyOrigName === null) keyOrigName = key;
				
				var language = CTE.languageForReformat;
				var value = CTE.getString(key, "<<<NOT FOUND>>>", language);
				content.text += (k > 0? "\n" : "") + keyOrigName + "=" + value.replace(/\n/g, "\\n");
			}
		}
	}
	
	CTE.writeToContentWithContent(CTE.exportedContent, content, header);
};

// Export a generic database field.
CTE.databaseExportString = function(content, fieldName, str) {
	if (CTE.exportingBase || CTE.exportingReformat || CTE.exportingTable) {
		CTE.writeFormat(content, "#" + fieldName + "#{1}\n{0}\n##\n\n", str, function(language) {
			var entry = CTE.exportingPosition["event"];
			CTE.exportingPosition["command"] = fieldName;
			return CTE.getDataForLanguage(language, CTE.exportingPosition["file"] + (entry !== 0? "-" + entry : ""), fieldName);
		}, CTE.exportingPosition["file"] + "-" + CTE.exportingPosition["event"] + "-0-1", fieldName);
	}
};

// Write text safely for table, handling commas and linebreaks appropriately.
CTE.writeForTable = function(str) {
	if (str.includes(",")) { // Put quotes around values containing commas and double any quotes inside
		str = str.replace(/"/g, "\"\"");
		str = "\"" + str + "\"";
	}
	if (str.includes("\n")) {
		str = str.replace(/\n/g, "\\n");
	}
	return str;
};

// Write to text/table, repeating it for all language columns in CSV mode.
CTE.writeSame = function(content, str, tableOnly = false, firstBlank = false) {
	if ((CTE.exportingBase || CTE.exportingReformat) && !tableOnly) {
		content.text += str;
	}
	if (CTE.exportingTable) {
		var result = "";
		if (!str.includes("\n")) {
			for (var i = 0; i < CTE.orderedLanguages.length; i++) {
				if (i == 0 && firstBlank) continue;
				result += (i > 0? "," : "") + CTE.writeForTable(str);
			}
		}
		else {
			var splitString = str.split("\n");
			for (var k = 0; k < splitString.length; k++) { 
				if (k > 0) result += "\n";
				if (splitString[k] !== "") {
					for (var i = 0; i < CTE.orderedLanguages.length; i++) {
						if (i == 0 && firstBlank) continue;
						result += (i > 0? "," : "") + CTE.writeForTable(splitString[k]);
					}
				}
			}
		}
		content.table += result;
	}
};

// Calls writeSame using a temporary content object and returns the object.
CTE.writeSameTemp = function(str, tableOnly = false, firstBlank = false) {
	var tempContent = { text: "", table: "" };
	CTE.writeSame(tempContent, str, tableOnly, firstBlank);
	return tempContent;
};

// Write to text/table following a format, using baseValue for base language and languageFunction(language) for others. Returns boolean for whether it wrote something.
CTE.writeFormat = function(content, format, baseValue, languageFunction, locationID = "", fieldName = "", missingWarning = true) {
	if (CTE.exportingBase) {
		content.text += format.replace(/\{0\}/g, baseValue).replace(/\{1\}/g, "");
	}
	if (CTE.exportingReformat) {
		var language = CTE.languageForReformat;
		var myValue = languageFunction(language);
		var ignoreMe = false;
		if (myValue === null) { // Language function didn't find anything
			myValue = "<<<NOT FOUND>>>";
			if (CTE.shouldIgnore(language, locationID, fieldName)) {
				return false;
			}
			else if (missingWarning) {
				CTE.warn(language + " text not found for " + CTE.getPositionString(CTE.exportingPosition, true), 2);
			}
		}
		var comment = "";
		if (CTE.shouldIgnore(language, locationID, fieldName, true)) comment = " %ignorethis"; // Specifically ignored
		if (baseValue === "<<<NOT FOUND IN BASE>>>") { // Excess text
			comment = " " + baseValue;
			format = format.replace(/#([^#]+)#/, function(match, commandName) { return "_" + commandName + "_"; });
		}
		content.text += format.replace(/\{0\}/g, myValue).replace(/\{1\}/g, comment);
	}
	if (CTE.exportingTable || CTE.exportingIdentical) {
		var lines = [];
		var values = [];
		for (var i = 0; i < CTE.orderedLanguages.length; i++) {
			var language = CTE.orderedLanguages[i];
			var myValue = i == 0? baseValue : languageFunction(language);
			values.push(myValue);
			
			if (i > 0 && myValue === null) { // Language function didn't find anything
				myValue = "<<<NOT FOUND>>>";
				if (CTE.shouldIgnore(language, locationID, fieldName)) {
					myValue = "<<<IGNORED>>>";
				}
				else if (missingWarning) {
					CTE.warn(language + " text not found for " + CTE.getPositionString(CTE.exportingPosition, true), 2);
				}
			}
			
			if (CTE.exportingTable) {
				var myText = format.replace(/\{0\}/g, myValue).replace(/\{1\}/g, "");
				if (!myText.includes("\n")) {
					lines[0] = lines[0] || [];
					lines[0][i] = CTE.writeForTable(myText);
				}
				else {
					var splitText = myText.split("\n");
					for (var k = 0; k < splitText.length; k++) {
						lines[k] = lines[k] || [];
						lines[k][i] = CTE.writeForTable(splitText[k]);
					}
				}
			}
		}
		
		// Check for duplicate values between languages if enabled.
		if (CTE.exportingIdentical) {
			if ((new Set(values)).size !== values.length) {
				for (var i = 0; i < CTE.orderedLanguages.length; i++) {
					if (values[i] === null || values[i].trim() === "") continue;
					
					var duplicatedLanguages = [];
					for (var k = i + 1; k < CTE.orderedLanguages.length; k++) {
						if (values[i] === values[k]) {
							if (CTE.shouldIgnore(CTE.orderedLanguages[k], locationID, fieldName)) continue;
							if (!duplicatedLanguages.includes(CTE.orderedLanguages[i])) duplicatedLanguages.push(CTE.orderedLanguages[i]);
							duplicatedLanguages.push(CTE.orderedLanguages[k]);
							values[k] = null;
						}
					}
					
					if (duplicatedLanguages.length > 0) {
						CTE.exportedIdentical += CTE.commaList(duplicatedLanguages) + " identical in " + CTE.getPositionString(CTE.exportingPosition)
							+ "\n#" + CTE.exportingPosition["command"] + "#\n" + values[i] + "\n##\n\n";
					}
				}
			}
		}
		
		if (CTE.exportingTable) {
			for (var k = 0; k < lines.length; k++) {
				if (k > 0) content.table += "\n";
				if (k == lines.length - 1 && lines[k][0] === "") continue;
				
				for (var i = 0; i < CTE.orderedLanguages.length; i++) {
					content.table += (i > 0? "," : "") + (lines[k][i] || "");
				}
			}
		}
	}
	
	return true;
};

// When exporting reformatted script, return %ignore if the given section specifically is marked as ignored.
CTE.writeReformatIgnore = function(locationID, fieldName = "") {
	if (CTE.exportingReformat && CTE.shouldIgnore(CTE.languageForReformat, locationID, fieldName, true)) {
		return "%ignore\n\n";
	}
	return "";
};

// Add content to targetContent if not empty. Takes into account header, and %ignores in reformatting mode.
CTE.writeToContentWithContent = function(targetContent, content, header = "", locationID = "") {
	var ignoreText = CTE.writeReformatIgnore(locationID);
	if (content.text !== "" || content.table != "" || ignoreText !== "") {
		var headerContent = CTE.writeSameTemp(header);
		if (targetContent === CTE.exportedContent) { // Add separating linebreaks beforehand if there is existing text
			targetContent.text += (CTE.exportedContent.text !== ""? "\n\n" : "");
			targetContent.table += (CTE.exportedContent.table !== ""? "\n\n" : "");
		}
		targetContent.text += headerContent.text + ignoreText + content.text;
		targetContent.table += headerContent.table + content.table;
	}
};

// Print out an array/list as a linebroken list.
CTE.linebreakList = function(list, startIndex = 0) {
	var str = "";
	for (var i = startIndex; i < list.length; i++) {
		str += list[i] + (i < list.length - 1? "\n" : "");
	}
	return str;
};

// Print out an array/list as a list with commas.
CTE.commaList = function(list, startIndex = 0) {
	var str = "";
	for (var i = startIndex; i < list.length; i++) {
		str += list[i] + (i < list.length - 1? ", " : "");
	}
	return str;
};

// Write exported text to file.
CTE.exportFinish = function() {
	if (!Utils.isNwjs()) return;
	
	var fs = require("fs");
	var path = require("path");
	var languagesPath = path.join(path.dirname(process.mainModule.filename), CTE_getLanguagesFolder());
	
	try {
		if (!fs.existsSync(languagesPath)){
			fs.mkdirSync(languagesPath);
		}
		
		if (CTE.exportingBase || CTE.exportingReformat) {
			if (CTE.AllInOneFile) {
				CTE.writeBaseFile();
			}
		}
		
		if (CTE.exportingBase) {
			CTE.warn("Finished exporting text data for base language (" + (CTE.BaseExportFilename || CTE.BaseLanguage) + ").");
		}
		
		if (CTE.exportingReformat) {
			CTE.warn("Finished exporting reformatted text to " + CTE.languageForReformat + " (Reformatted).");
		}
		
		if (CTE.exportingTable) {
			try {
				var filename = "ReferenceTable.csv";
				CTE.exportedContent.table = CTE.exportedContent.table.replace(/^$/gm, ",".repeat(CTE.orderedLanguages.length - 1)); // Fill in blank lines with appropriate number of commas
				fs.writeFileSync(languagesPath + filename, CTE.exportedContent.table.replace(/\n/g, "\r\n"));
				CTE.warn("Finished exporting language comparison table (" + filename + ").");
			}
			catch (e) {
				CTE.warn("Failed to write " + filename + ". " + e.message);
			}
		}
		
		if (CTE.exportingIdentical) {
			try {
				if (CTE.exportedIdentical !== "") {
					CTE.warn("Wrote log of identical text (IdenticalWarnings.txt).");
				}
				else {
					CTE.warn("No identical text found between languages.");
				}
				var filename = "IdenticalWarnings.txt";
				if (CTE.exportedIdentical !== "" || fs.existsSync(languagesPath + filename)) { // Overwrite file with blank one if a log already exists
					fs.writeFileSync(languagesPath + filename, CTE.exportedIdentical.replace(/\n/g, "\r\n"));
				}
			}
			catch (e) {
				CTE.warn("Failed to write " + filename + ". " + e.message);
			}
		}
	}
	catch (e) {
		CTE.warn("Failed to export. " + e.message);
	}
	
	CTE.exportingBase = false;
	CTE.exportingTable = false;
	CTE.exportingIdentical = false;
	CTE.exportingReformat = false;
};

// Write a file for the base script, either the entire thing all in one or an individual part in the subfolder for that language.
CTE.writeBaseFile = function(type = "") {
	if (!Utils.isNwjs()) {
		CTE.exportedContent.text = "";
		return;
	}
	
	if (!CTE.exportingBase && !CTE.exportingReformat) return;
	
	var language = CTE.exportingBase? (CTE.BaseExportFilename || CTE.BaseLanguage) : CTE.exportingReformat? (CTE.languageForReformat + " (Reformatted)") : "Unknown";
	var filename = (type === ""? language : type) + ".txt";
	var inSubfolder = false;
	if (type.includes("/")) {
		inSubfolder = true;
		filename = type.substring(type.indexOf("/") + 1) + ".txt";
		type = type.substring(0, type.indexOf("/"));
	}
	
	try {
		var fs = require("fs");
		var path = require("path");
		var languagesPath = path.join(path.dirname(process.mainModule.filename), CTE_getLanguagesFolder());
		var languageFolder = path.join(languagesPath, language + "/");
		var saveFolder = inSubfolder? path.join(languageFolder + type + "/") : type !== ""? languageFolder : languagesPath;
		
		if (!fs.existsSync(languagesPath)) {
			fs.mkdirSync(languagesPath);
		}
		if (type !== "" && !fs.existsSync(languageFolder)) {
			fs.mkdirSync(languageFolder);
		}
		if (inSubfolder && !fs.existsSync(saveFolder)) {
			fs.mkdirSync(saveFolder);
		}
		
		fs.writeFileSync(saveFolder + filename, CTE.exportedContent.text.replace(/\n/g, "\r\n"));
	}
	catch (e) {
		CTE.warn("Failed to write " + filename + ". " + e.message);
	}
	
	CTE.exportedContent.text = "";
};

/******************************
MESSAGE DEBUGGER
******************************/

CTE.TextDebug = CTE.TextDebug || {};
CTE.TextDebug.currentFile = "";
CTE.TextDebug.currentEvent = -1;
CTE.TextDebug.lastFileIndex = 0;
CTE.TextDebug.lastIndex = new Map();
CTE.TextDebug.searchString = "";

// Return identifier for storing lastIndex values.
CTE.TextDebug.getFileIdentifier = function() {
	return this.currentEvent == -1? this.currentFile : this.currentFile + this.currentEvent
};

// Message debugger container scene.
function Scene_TextDebugger() {
	this.initialize.apply(this, arguments);
};

Scene_TextDebugger.prototype = Object.create(Scene_MenuBase.prototype);
Scene_TextDebugger.prototype.constructor = Scene_MenuBase;

Scene_TextDebugger.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
	this._choiceWindow = new TextDebugger_Window_ChoiceList();
	this.addChild(this._choiceWindow);
};

Scene_TextDebugger.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this._backgroundSprite.visible = false;
};

// Message debugger menu window.
function TextDebugger_Window_ChoiceList() {
	this.initialize.apply(this, arguments);
};

TextDebugger_Window_ChoiceList.prototype = Object.create(Window_Selectable.prototype);
TextDebugger_Window_ChoiceList.prototype.constructor = TextDebugger_Window_ChoiceList;

// Initialization.
TextDebugger_Window_ChoiceList.prototype.initialize = function() {
	this._list = [];
	Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.width, Graphics.height);
	this.openness = 255;
	this.active = true;
	this.updatePlacement();
	this.makeCommandList();
	this.select(CTE.TextDebug.currentFile === ""? CTE.TextDebug.lastFileIndex : CTE.TextDebug.lastIndex.get(CTE.TextDebug.getFileIdentifier()));
	this.refresh();
};

// Set up window position and size.
TextDebugger_Window_ChoiceList.prototype.updatePlacement = function() {
	this.x = 0;
	this.y = 0;
	this.width = Graphics.width;
	this.height = Graphics.height;
};

// Generate choice list for either all files, or messages within a file.
TextDebugger_Window_ChoiceList.prototype.makeCommandList = function() {
	this._list = [];
	if (CTE.TextDebug.currentFile === "") { // File list
		this.makeFileList();
	}
	else if (CTE.TextDebug.currentFile == "commonevents") { // Common event message list
		this.makeCommonMessageList(CTE.TextDebug.currentEvent);
	}
	else if (CTE.TextDebug.currentFile == "troops") { // Troop message list
		this.makeTroopMessageList(CTE.TextDebug.currentEvent);
	}
	else { // Map message list
		this.makeMapMessageList(CTE.TextDebug.currentFile);
	}
};

// Make file list out of data for current language.
TextDebugger_Window_ChoiceList.prototype.makeFileList = function() {
	var language = ConfigManager.getLanguage();
	if (typeof CTE.data[language] === "undefined") {
		if (ConfigManager.isBaseLanguage()) {
			Window_Command.prototype.addCommand.call(this, "No language data for Base Language.", "");
		}
		else {
			Window_Command.prototype.addCommand.call(this, "Language data not found for " + language + ".", "");
		}
		return;
	}
	
	var keys = Object.keys(CTE.data[language]);
	for (var i = 0; i < keys.length; i++) {
		var fileKey = keys[i];
		if (fileKey.startsWith("map")) {
			var hasMessages = false;
			var mapKeys = Object.keys(CTE.data[language][fileKey]);
			for (var k = 0; k < mapKeys.length; k++) {
				if (mapKeys[k].contains("-message")) {
					hasMessages = true;
					break;
				}
			}
			
			if (hasMessages) {
				var mapID = fileKey.replace("map", "");
				var mapName = $dataMapInfos[mapID].name || "";
				var previewText = "Map " + mapID + (mapName !== ""? ": " + mapName : "");
				Window_Command.prototype.addCommand.call(this, previewText, fileKey);
			}
		}
		else if (fileKey.startsWith("commonevents")) {
			var commonKeys = Object.keys(CTE.data[language][fileKey]);
			var commonList = [];
			
			for (var k = 0; k < commonKeys.length; k++) {
				var dashIndex = commonKeys[k].indexOf("-");
				var commonID = commonKeys[k].substring(0, dashIndex);
				if (dashIndex != -1 && commonKeys[k].contains("-message") && !commonList.includes(commonID)) {
					commonList.push(commonID);
				}
			}
			
			for (var k = 0; k < commonList.length; k++) {
				var commonID = commonList[k];
				var myData = $dataCommonEvents;
				var indexInData = commonID;
				if (CTE.usingCommonEvents2 && commonID >= $dataCommonEvents.length) {
					myData = $dataCommonEvents2;
					indexInData -= $dataCommonEvents.length;
				}
				var commonName = myData[indexInData].name || "";
				var previewText = "Common Event " + commonID + (commonName !== ""? ": " + commonName : "");
				Window_Command.prototype.addCommand.call(this, previewText, "common" + commonID);
			}
		}
		else if (fileKey.startsWith("troops")) {
			var troopKeys = Object.keys(CTE.data[language][fileKey]);
			var troopList = [];
			
			for (var k = 0; k < troopKeys.length; k++) {
				var dashIndex = troopKeys[k].indexOf("-");
				var troopID = troopKeys[k].substring(0, dashIndex);
				if (dashIndex != -1 && troopKeys[k].contains("-message") && !troopList.includes(troopID)) {
					troopList.push(troopID);
				}
			}
			
			for (var k = 0; k < troopList.length; k++) {
				var troopID = commonList[k];
				var troopName = $dataTroops[troopID].name || "";
				var previewText = "Troop " + troopID + (troopName !== ""? ": " + troopName : "");
				Window_Command.prototype.addCommand.call(this, previewText, "troop" + troopID);
			}
		}
	}
};

// Make list of messages in map, with unselectable headers for event and page.
TextDebugger_Window_ChoiceList.prototype.makeMapMessageList = function(file) {
	var language = ConfigManager.getLanguage();
	CTE.loadLanguage(language);
	
	var keys = Object.keys(CTE.data[language][file]);
	var lastHeader = "";
	for (var i = 0; i < keys.length; i++) {
		var dataKey = keys[i];
		if (!dataKey.contains("-message")) continue;
		
		var firstDashIndex = dataKey.indexOf("-");
		var secondDashIndex = dataKey.indexOf("-", firstDashIndex + 1);
		var eventID = dataKey.substring(0, firstDashIndex);
		var pageID = dataKey.substring(firstDashIndex + 1, secondDashIndex);
		if (secondDashIndex != -1) {
			var header = "\\c[1]***** Event " + eventID + ", Page " + pageID + " *****";
			if (header !== lastHeader) {
				Window_Command.prototype.addCommand.call(this, header, "");
				lastHeader = header;
			}
			
			var messages = CTE.getDataForLanguage(language, file, dataKey);
			for (var k = 0; k < messages.length; k++) {
				var message = messages[k];
				var displayText = this.formatDisplayMessage(message);
				var messageData = {};
				messageData.id = dataKey;
				messageData.commandNum = k;
				Window_Command.prototype.addCommand.call(this, displayText, messageData);
			}
		}
	}
};

// Make list of messages in common event.
TextDebugger_Window_ChoiceList.prototype.makeCommonMessageList = function(event) {
	CTE.loadLanguage(ConfigManager.getLanguage());
	
	var dataKey = event + "-0-message";
	var messages = CTE.getData("commonevents", dataKey);
	if (messages === null) return;
	
	for (var i = 0; i < messages.length; i++) {
		var message = messages[i];
		var displayText = this.formatDisplayMessage(message);
		var messageData = {};
		messageData.id = dataKey;
		messageData.commandNum = i;
		Window_Command.prototype.addCommand.call(this, displayText, messageData);
	}
};

// Make list of messages in troop, with unselectable headers for page.
TextDebugger_Window_ChoiceList.prototype.makeTroopMessageList = function(event) {
	var language = ConfigManager.getLanguage();
	CTE.loadLanguage(language);
	
	var file = "troops";
	if (typeof CTE.data[language][file] === "undefined") return;
	
	var keys = Object.keys(CTE.data[language][file]);
	var lastHeader = "";
	for (var i = 0; i < keys.length; i++) {
		var dataKey = keys[i];
		if (!dataKey.contains("-message")) continue;
		
		var firstDashIndex = dataKey.indexOf("-");
		var secondDashIndex = dataKey.indexOf("-", firstDashIndex + 1);
		var eventID = dataKey.substring(0, firstDashIndex);
		var pageID = dataKey.substring(firstDashIndex + 1, secondDashIndex);
		if (secondDashIndex != -1 && eventID == event) {
			var header = "\\c[1]***** Page " + pageID + " *****";
			if (header !== lastHeader) {
				Window_Command.prototype.addCommand.call(this, header, "");
				lastHeader = header;
			}
			
			var messages = CTE.getDataForLanguage(language, file, dataKey);
			for (var k = 0; k < messages.length; k++) {
				var message = messages[k];
				var displayText = this.formatDisplayMessage(message);
				var messageData = {};
				messageData.id = dataKey;
				messageData.commandNum = k;
				Window_Command.prototype.addCommand.call(this, displayText, messageData);
			}
		}
	}
};

// Modify message for display in choice list as a single line.
TextDebugger_Window_ChoiceList.prototype.formatDisplayMessage = function(message) {
	var tempMessage = CTE.messageDebuggerPreviewTextHandler(message);
	if (tempMessage) message = tempMessage;
	
	if (Array.isArray(message)) { // Conditional text array; go with text from first conditional branch
		message = message[0][1];
	}
	
	message = message.replace(/\n/g, " "); // Replace linebreaks
	message = message.replace(/\\}/g, ""); // Remove \} (shrink text) codes to avoid text being parsed as "{...}" and showing as undefined
	message = this.convertEscapeCharacters(message); // Process remaining escape codes
	return message.trim();
};

// Return size of list.
TextDebugger_Window_ChoiceList.prototype.maxItems = function() {
	return this._list.length;
};

// Draw choice entry.
TextDebugger_Window_ChoiceList.prototype.drawItem = function(index) {
	var rect = this.itemRectForText(index);
	var text = this._list[index].name;
	
	// Calculate maximum font size of text to determine Y offset.
	this.contents.fontSize = 20;
	var maxFontSize = 20;
	var regExp = /\x1b[\{\}]/g;
	for (; ;) {
		var array = regExp.exec(text);
		if (array) {
			if (array[0] === "\x1b{") {
				this.makeFontBigger();
			}
			if (array[0] === "\x1b}") {
				this.makeFontSmaller();
			}
			if (maxFontSize < this.contents.fontSize) {
				maxFontSize = this.contents.fontSize;
			}
		}
		else {
			break;
		}
	}
	this.contents.fontSize = 20;
	
	var heightOffset = (20 - maxFontSize) / 2;
	this.drawTextEx(text, rect.x, rect.y + heightOffset);
};

// Process input.
TextDebugger_Window_ChoiceList.prototype.update = function() {
	this._animationCount++;
	
	Window_Selectable.prototype.processCursorMove.call(this);
	
	// Allow holding down left/right/page buttons to scroll.
	var lastIndex = this.index();
	if (Input.isRepeated("right")) {
		this.select(Math.min(this.index() + 10, this.maxItems() - 1));
	}
	if (Input.isRepeated("left")) {
		this.select(Math.max(this.index() - 10, 0));
	}
	if (this.index() !== lastIndex) {
		SoundManager.playCursor();
	}
	
	if (Input.isRepeated("pagedown")) {
		this.cursorPagedown();
	}
	if (Input.isRepeated("pageup")) {
		this.cursorPageup();
	}
	
	if (Input.isTriggered("messagedebug")) {
		var searchKey = window.prompt("Enter text to search for.", CTE.TextDebug.searchString);
		if (searchKey === null || searchKey === "") return;
		CTE.TextDebug.searchString = searchKey;
		this.doSearch(searchKey);
	}
	
	if (Input.isTriggered("ok")) {
		if (this.maxItems() == 0) {
			SoundManager.playBuzzer();
			return;
		}
		this.onChoice(this.index());
	}
	
	if (Input.isTriggered("cancel")) {
		SoundManager.playCancel();
		if (CTE.TextDebug.currentFile !== "") { // Message list; back out and recreate file list
			CTE.TextDebug.lastIndex.set(CTE.TextDebug.getFileIdentifier(), this.index()); // Memorize position in this list
			CTE.TextDebug.currentFile = "";
			CTE.TextDebug.currentEvent = -1;
			this.makeCommandList();
			this.select(CTE.TextDebug.lastFileIndex);
			this.refresh();
		}
		else { // File list; close the menu
			CTE.TextDebug.lastFileIndex = this.index(); // Memorize position in file list
			this.close();
			CTE.TextDebug.open = false;
		}
	}
};

// OK button handler.
TextDebugger_Window_ChoiceList.prototype.onChoice = function(index) {
	var choice = this._list[index].symbol;
	if (choice === "") {
		SoundManager.playBuzzer();
		return;
	}
	SoundManager.playOk();
	
	if (CTE.TextDebug.currentFile === "") { // File list; enter message list for the selected file
		CTE.TextDebug.lastFileIndex = index; // Memorize position in file list
		if (choice.startsWith("common")) {
			CTE.TextDebug.currentFile = "commonevents";
			CTE.TextDebug.currentEvent = choice.replace("common", "");
		}
		else if (choice.startsWith("troop")) {
			CTE.TextDebug.currentFile = "troops";
			CTE.TextDebug.currentEvent = choice.replace("troop", "");
		}
		else {
			CTE.TextDebug.currentFile = choice;
			CTE.TextDebug.currentEvent = -1;
		}
		
		var fileIdentifier = CTE.TextDebug.getFileIdentifier();
		if (!CTE.TextDebug.lastIndex.has(fileIdentifier)) CTE.TextDebug.lastIndex.set(fileIdentifier, 0); // Initialize position in this list
		this.makeCommandList();
		this.select(CTE.TextDebug.lastIndex.get(fileIdentifier));
		this.refresh();
	}
	else { // Show selected message, temporarily closing menu (keeping CTE.TextDebug.open set to true)
		CTE.TextDebug.lastIndex.set(CTE.TextDebug.getFileIdentifier(), this.index()); // Memorize position in this list
		this.close();
		
		CTE.loadLanguage(ConfigManager.getLanguage());
		var message = CTE.getCommandData(CTE.TextDebug.currentFile, choice.id, choice.commandNum);
		var source = CTE.TextDebug.currentFile;
		if (source === "commonevents") source = "commonevent" + CTE.TextDebug.currentEvent;
		if (source === "troops") source = "troop" + CTE.TextDebug.currentEvent;
		CTE.messageDebuggerMessageSettingsHandler(message, source);
		$gameMessage.add(message);
	}
};

// Search through text in list, prioritizing exact matches.
TextDebugger_Window_ChoiceList.prototype.doSearch = function(searchKey) {
	if (this._list.length == 0) return;
	searchKey = searchKey.toLowerCase();
	
	var startIndex = this.index();
	var index = startIndex;
	var firstMatch = -1;
	
	do {
		index = (index + 1) % this.maxItems();
		var name = this._list[index].name? this._list[index].name.toLowerCase() : "";
		if (name === searchKey) {
			this.select(index);
			return;
		}
		else if (firstMatch == -1 && name.includes(searchKey)) {
			firstMatch = index;
		}
	} while (index != startIndex);
	
	if (firstMatch != -1) {
		this.select(firstMatch);
	}
	else {
		window.alert("Not found.");
	}
};

// Close the menu.
TextDebugger_Window_ChoiceList.prototype.close = function() {
	SceneManager.pop();
};

// After closing a message initiated by message debugger, reopen the menu.
CTE.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
	CTE.Window_Message_terminateMessage.apply(this, arguments);
	if (CTE.TextDebug.open || CTE.MessageTyper.previewing) {
		CTE.messageDebuggerMessageSettingsPostHandler();
		if (CTE.TextDebug.open) {
			SceneManager.push(Scene_TextDebugger);
		}
		if (CTE.MessageTyper.previewing) {
			CTE.MessageTyper.previewing = false;
		}
	}
};

/******************************
MESSAGE TYPER
******************************/

CTE.MessageTyper = {};

// Open (or show) the message typer window.
CTE.openMessageTyperWindow = function() {
	if (typeof CTE.MessageTyper.frame !== "undefined") {
		CTE.MessageTyper.frame.focus();
		return;
	}
	
	if (!Utils.isNwjs()) return;
	
	var fs = require("fs");
	var path = require("path");
	var gamePath = path.dirname(process.mainModule.filename);
	try {
		fs.writeFileSync(gamePath + "/CTEWindowPlaceholder.htm", "");
	}
	catch (e) {
		CTE.warn("Could not open message typer; unable to make placeholder HTML file.");
		return;
	}
	
	if (typeof Zale !== "undefined" && typeof Zale.GameFocus !== "undefined") { // If using pause-on-focus plugin, disable for better usability of preview
		CTE.MessageTyper.FocusPauseGraphicsBackup = Zale.GameFocus.PauseGraphics;
		CTE.MessageTyper.FocusPauseAudioBackup = Zale.GameFocus.PauseAudio;
		Zale.GameFocus.PauseGraphics = false;
		Zale.GameFocus.PauseAudio = false;
	}
	
	var gui = require("nw.gui");
	var width = 800;
	var height = 200;
	var x = Math.round(((window.innerWidth - width) / 2) + window.screenX);
	var y = window.screenY;
	CTE.MessageTyper.gameWindow = gui.Window.get();
	gui.Window.open("CTEWindowPlaceholder.htm", { title: "Message Typer", x: x, y: y, width: width, height: height }, function(newWindow) {
		CTE.MessageTyper.frame = newWindow;
		newWindow.on("loaded", function() { CTE.MessageTyper.initWindow(); });
	});
};

// Initialize the message typer window after creating.
CTE.MessageTyper.initWindow = function() {
	// Remove placeholder file.
	var fs = require("fs");
	fs.unlink("CTEWindowPlaceholder.htm");
	
	// Unset variable holding window when closed.
	CTE.MessageTyper.frame.on("close", function() {
		CTE.MessageTyper.frame = undefined;
		if (typeof CTE.MessageTyper.FocusPauseGraphicsBackup !== "undefined") {
			Zale.GameFocus.PauseGraphics = CTE.MessageTyper.FocusPauseGraphicsBackup;
			Zale.GameFocus.PauseAudio = CTE.MessageTyper.FocusPauseAudioBackup;
		}
		this.close(true);
	});
	
	// Close window when game window closes/is reloaded.
	CTE.MessageTyper.gameWindow.on("document-end", function() {
		if (typeof CTE.MessageTyper.frame !== "undefined") CTE.MessageTyper.frame.close();
	});
	CTE.MessageTyper.gameWindow.on("close", function() {
		if (typeof CTE.MessageTyper.frame !== "undefined") CTE.MessageTyper.frame.close();
		this.close(true);
	});
	
	// Set window to always be on top.
	CTE.MessageTyper.frame.setAlwaysOnTop(true);
	
	// Set up document body.
	var document = CTE.MessageTyper.frame.window.document;
	document.body.style.height = (CTE.MessageTyper.frame.height - 16) + "px";
	
	// Load font CSS.
	var cssLink = document.createElement("link");
	cssLink.rel = "stylesheet";
	cssLink.type = "text/css";
	cssLink.href = "fonts/gamefont.css";
	document.getElementsByTagName("head")[0].appendChild(cssLink);
	
	// Create input box.
	var input = document.createElement("textarea");
	input.style.width = "100%";
	input.style.height = (CTE.MessageTyper.frame.height - 48) + "px";
	input.style.fontFamily = "GameFont";
	input.style.fontSize = "24px";
	input.style.resize = "none";
	input.onkeypress = CTE.MessageTyper.onKeyPress;
	input.oninput = CTE.MessageTyper.onInput;
	document.body.appendChild(input);
	input.focus();
	CTE.MessageTyper.inputBox = input;
	
	// Create option boxes.
	CTE.MessageTyper.speedOption = [];
	for (var i = 0; i < 2; i ++) {
		var displaySpeed = document.createElement("input");
		displaySpeed.type = "radio";
		displaySpeed.name = "displaySpeed";
		displaySpeed.id = i == 0? "instant" : "normal";
		displaySpeed.value = i == 0? "instant" : "normal";
		if (i == 0) displaySpeed.checked = true;
		displaySpeed.style.float = "left";
		document.body.appendChild(displaySpeed);
		CTE.MessageTyper.speedOption[i] = displaySpeed;
		
		var speedLabel = document.createElement("label");
		speedLabel.style.float = "left";
		speedLabel.style.marginTop = "10px";
		speedLabel.style.fontFamily = "sans-serif";
		speedLabel.style.userSelect = "none";
		speedLabel.innerHTML = i == 0? "Show Instantly" : "Type Normally";
		speedLabel.appendChild(displaySpeed);
		document.body.appendChild(speedLabel);
	}
	
	var padding = document.createElement("div");
	padding.style.display = "inline-block";
	padding.style.padding = "32px 32px 0px 0px";
	padding.style.float= "left";
	document.body.appendChild(padding);
	
	CTE.MessageTyper.updateOption = [];
	for (var i = 0; i < 2; i ++) {
		var updateType = document.createElement("input");
		updateType.type = "radio";
		updateType.name = "updateType";
		updateType.id = i == 0? "instant" : "normal";
		updateType.value = i == 0? "instant" : "normal";
		if (i == 0) updateType.checked = true;
		updateType.style.float = "left";
		document.body.appendChild(updateType);
		CTE.MessageTyper.updateOption[i] = updateType;
		
		var updateLabel = document.createElement("label");
		updateLabel.style.float = "left";
		updateLabel.style.marginTop = "10px";
		updateLabel.style.fontFamily = "sans-serif";
		updateLabel.style.userSelect = "none";
		updateLabel.innerHTML = i == 0? "Refresh On Edit" : "Don't Refresh";
		updateLabel.appendChild(updateType);
		document.body.appendChild(updateLabel);
	}
	
	// Create preview button.
	var previewButton = document.createElement("button");
	previewButton.innerHTML = "Preview";
	previewButton.style.fontSize = "16px";
	previewButton.style.float = "right";
	previewButton.style.marginTop = "8px";
	previewButton.style.userSelect = "none";
	previewButton.onclick = CTE.MessageTyper.startPreview;
	document.body.appendChild(previewButton);
	
	// Create message terminate button.
	var terminateButton = document.createElement("button");
	terminateButton.innerHTML = "Close Preview";
	terminateButton.style.fontSize = "16px";
	terminateButton.style.float = "right";
	terminateButton.style.marginTop = "8px";
	terminateButton.style.userSelect = "none";
	terminateButton.onclick = CTE.MessageTyper.terminatePreview;
	document.body.appendChild(terminateButton);
};

// On pressing Enter, preview the typed message in-game.
CTE.MessageTyper.onKeyPress = function(event) {
	if (event.keyCode == 13 && !event.shiftKey) { // Enter
		CTE.MessageTyper.startPreview();
		event.preventDefault();
	}
};

// Close message window if previewing.
CTE.MessageTyper.terminatePreview = function() {
	if (CTE.MessageTyper.previewing && $gameMap && $gameMessage) {
		SceneManager._scene._messageWindow.terminateMessage();  // Close message window
		SceneManager._scene._messageWindow.pause = false; // Clear waiting for input
		SceneManager._scene._messageWindow._waitCount = 0; // Clear pauses
		$gameMessage.clear();
	}
};

// If textbox changes while previewing a message and setting is enabled, reset message with new text.
CTE.MessageTyper.onInput = function(event) {
	if (CTE.MessageTyper.updateOption[0].checked && CTE.MessageTyper.previewing && $gameMap && $gameMessage) {
		CTE.MessageTyper.terminatePreview();
		
		var message = CTE.MessageTyper.inputBox.value;
		CTE.messageDebuggerMessageSettingsHandler(message, "");
		$gameMessage.add(message);
		SceneManager._scene._messageWindow.startMessage();
		SceneManager._scene._messageWindow._showFast = CTE.MessageTyper.speedOption[0].checked;
		CTE.MessageTyper.previewing = true; // Reset after it gets turned off by terminating message
	}
};

// Preview the typed message in-game.
CTE.MessageTyper.startPreview = function() {
	if ($gameMessage && !$gameMessage.isBusy()) {
		CTE.MessageTyper.previewing = true;
		var message = CTE.MessageTyper.inputBox.value;
		CTE.messageDebuggerMessageSettingsHandler(message, "");
		$gameMessage.add(message);
		SceneManager._scene._messageWindow.startMessage();
		SceneManager._scene._messageWindow._showFast = CTE.MessageTyper.speedOption[0].checked;
	}
};

/******************************
WARNING LOGS
******************************/

CTE.warn = function(object, level = 1) {
	if (CTE.LogSetting >= level) {
		console.log(object);
	}
};



/******************************
CUSTOMIZABLE HANDLERS
******************************/

// Customizable directory for language files. Can be defined before the plugin loads.
if (typeof CTE_getLanguagesFolder === "undefined") {
	CTE_getLanguagesFolder = function() {
		return "languages/";
	};
};

// Customizable handler for command export. Check command.code for any desired commands, and return a string to write.
// If dealing with a command code that already writes something, this "prefix" function lets you insert text before the standard output.
CTE.commandExportHandlerPrefix = function(command) {
	CTE.speakerName = CTE.speakerName || "";
	CTE.lastSpeakerWritten = CTE.lastSpeakerWritten || "";
	CTE.talkSpriteName = CTE.talkSpriteName || "";
	CTE.lastTalkSpriteWritten = CTE.lastTalkSpriteWritten || "";
	CTE.precedingSound = CTE.precedingSound || "";
	CTE.notableConditions = CTE.notableConditions || [];
	CTE.notableConditionReference = CTE.notableConditionReference || [];
	if (typeof CTE.complexConditions === "undefined") CTE.complexConditions = false;
	
	if (command.code == 101) { // Show Text: Write current speaker name and/or talk sprite and/or sound
		var comment = "";
		
		if (CTE.speakerName !== "") {
			if (CTE.speakerName !== CTE.lastSpeakerWritten) {
				CTE.lastSpeakerWritten = CTE.speakerName;
				comment += "{" + CTE.getString("Name_" + CTE.speakerName, CTE.speakerName) + "}";
			}
		}
		
		if (CTE.talkSpriteName !== "") {
			if (CTE.talkSpriteName !== CTE.lastTalkSpriteWritten) {
				CTE.lastTalkSpriteWritten = CTE.talkSpriteName;
				comment += (comment !== ""? " " : "") + "[" + CTE.talkSpriteName + "]";
			}
		}
		
		if (CTE.precedingSound !== "") {
			comment += (comment !== ""? "\n" : "") + "{SE: " + CTE.precedingSound + "}";
			CTE.precedingSound = "";
		}
		
		if (comment !== "") {
			return comment + "\n";
		}
	}
	
	if (command.code == 111) { // Conditional Branch: Include notable conditions that involve select switches/variables
		var conditionType = parseInt(command.parameters[0], 10);
		
		if (conditionType == 0) { // Switch
			var notableSwitches = [
				21, // Anzu Alive
				22, // Hayasaka Alive
				23, // Kurumada Alive
				24, // Ranmaru Alive
				25, // Mai Alive
				26, // Hinako Alive
				641, // Alice Alive Route
				642, // Reko Alive Route
				821, // Kanna Alive Route
				822, // Sou Alive Route
			];
			
			var switchId = parseInt(command.parameters[1], 10);
			if (notableSwitches.includes(switchId)) {
				var switchName = "Switch #" + switchId + " (" + $dataSystem.switches[switchId] + ")";
				CTE.notableConditions.push(command.indent);
				CTE.notableConditionReference[command.indent] = switchName;
				if (CTE.notableConditions.length >= 2) CTE.complexConditions = true;
				
                var switchValue = (parseInt(command.parameters[2]) == 0);
                return "<If " + switchName + " is " + (switchValue? "ON" : "OFF") + ">\n\n";
			}
		}
		
		else if (conditionType == 1) { // Variable
			var notableVariables = [
				458, // Island Existence survivor count
				476 // Island Existence protagonist ID
			];
			var protagonistNames = [ "Sara", "Joe", "Keiji", "Kanna", "Q-taro", "Sou", "Reko", "Nao", "Kai", "Gin", "N/A", "Mishima", "Gonbee" ];
			
			var variableId = parseInt(command.parameters[1], 10);
			if (notableVariables.includes(variableId)) {
				var variableName = "Variable #" + variableId + " (" + $dataSystem.variables[variableId] + ")";
				CTE.notableConditions.push(command.indent);
				CTE.notableConditionReference[command.indent] = variableName;
				if (CTE.notableConditions.length >= 2) CTE.complexConditions = true;
				
				var rightSide = command.parameters[3];
				if (parseInt(command.parameters[2]) != 0) { // Variable reference
                    rightSide = "V" + rightSide + " (" + $dataSystem.variables[rightSide] + ")";
				}
				else {
					if (variableId == 476) rightSide += " (" + protagonistNames[parseInt(rightSide, 10)] + ")";
				}
				
                var comparisonStr = [ "==", ">=", "<=", ">", "<", "!=" ];
                var comparisonIndex = parseInt(command.parameters[4], 10);
				
                return "<If " + variableName + " " + comparisonStr[comparisonIndex] + " " + rightSide + ">\n\n";
			}
		}
	}
	
	if (command.code == 231) { // Show Picture: Keep track of character talk sprites to note those shown before messages
		if (command.parameters[1].startsWith("cara")) {
			CTE.talkSpriteName = CTE.getTalkSpriteDescription(command.parameters[1]);
		}
	}
	
	if (command.code == 250) { // Play SE: Keep track of sounds to note those played just before messages
		CTE.precedingSound = command.parameters[0].name;
	}
	
	if (command.code == 356) { // Plugin Command: Handle hame box commands
		var parameter = command.parameters[0];
		
		if (parameter.startsWith("NameBoxSet")) { // Set speaker name
			var name = parameter.replace("NameBoxSet", "").trim();
			CTE.speakerName = name;
			
			// If running completeness check, warn if there is no existing translation for this name.
			if (typeof CTE.checkingNameCompleteness !== "undefined" && CTE.checkingNameCompleteness) {
				if (CTE.getString("Name_" + name, "") === "") {
					CTE.warn("Missing translation for name: " + name, 0);
				}
			}
		}
		
		if (parameter.startsWith("NameBoxReset")) { // Explicitly no speaker
			CTE.speakerName = "N/A";
		}
	}
	
	if (command.code == 402 || command.code == 403 || command.code == 404) { // Choice Case, Cancel Case, Choice End: Force writing speaker/sprite for messages after case names, for clarity
		CTE.lastSpeakerWritten = "";
		CTE.lastTalkSpriteWritten = "";
	}
	
	if (command.code == 0 && command.indent == 0) { // Terminator: Reset variables to prepare for next event/page
		CTE.speakerName = "";
		CTE.lastSpeakerWritten = "";
		CTE.talkSpriteName = "";
		CTE.lastTalkSpriteWritten = "";
		CTE.precedingSound = "";
		CTE.notableConditions = [];
		CTE.notableConditionReference = [];
		CTE.complexConditions = false;
	}
	
	// Clear preceding sound if there's something significant in-between
	if (command.code != 250 // Play SE
		&& command.code != 224 // Flash Screen
		&& command.code != 356) { // Plugin Command (i.e. NameBoxSet)
		CTE.precedingSound = "";
	}
	
	if (command.code == 404) { // Choice End
		return "<Choice End>\n\n";
	}
	
	if (command.code == 411 && CTE.notableConditions.includes(command.indent)) { // Condition Branch Else, but only if the condition was notable
		var extraInfo = "";
		if (CTE.complexConditions) extraInfo = " (" + CTE.notableConditionReference[command.indent] + ")";
		return "<Else" + extraInfo + ">\n\n";
	}
	
	if (command.code == 412 && CTE.notableConditions.includes(command.indent)) { // Condition Branch End, but only if the condition was notable
		var extraInfo = "";
		if (CTE.complexConditions) extraInfo = " (" + CTE.notableConditionReference[command.indent] + ")";		
		if (CTE.notableConditions.includes(command.indent)) {
			CTE.notableConditions.splice(CTE.notableConditions.indexOf(command.indent), 1);
		}
		return "<Condition End" + extraInfo + ">\n\n";
	}
	
	return ""; // Nothing to write
};

// If dealing with a command code that already writes something, this "postfix" function lets you insert text after the standard output.
// (Unless you want to write something both before and after an already-supported command, you probably only want to use one or the other.)
CTE.commandExportHandlerPostfix = function(command) {
	if (command.code == 99999) { // Placeholder
		return "{Comment}\n\n";
	}
	return ""; // Nothing to write
};

// Returns description of talk sprite given name of picture.
CTE.getTalkSpriteDescription = function(picture, includeExpression = true) {
	if (!picture.startsWith("cara")) return "";
	
	try {
		var numbers = picture.replace("cara", "").split("-");
		var characterID = parseInt(numbers[0], 10);
		var expressionID = numbers.length > 1? parseInt(numbers[1], 10) : 0;
	}
	catch (e) {
		return "";
	}
	
	// At least for time being, leave out expression descriptions (defined here for English, definable via Extra strings in other language scripts) for Japanese.
	if (ConfigManager.isBaseLanguage()) {
		includeExpression = false;
	}
	
	var character = "";
	var expression = "";
	
	switch (characterID) {
		case 0:
			character = "サラ";
			switch (expressionID) {
				case 1: expression = "Default (no collar)"; break;
				case 2: expression = "Default"; break;
				case 3: expression = "Pointing"; break;
				case 4: expression = "Disturbed"; break;
				case 5: expression = "Tired eyes"; break;
				case 6: expression = "Tired eyes, mouth open"; break;
				case 8: expression = "Tired eyes, slight frown"; break;
				case 10: expression = "Evil grin"; break;
				case 13: expression = "Hands on hips, upset"; break;
				case 14: expression = "Hands on hips, smirk"; break;
				case 15: expression = "Hands on hips, surprise"; break;
				case 16: expression = "Surprise"; break;
				case 17: expression = "Hands on hips, smug smile"; break;
				case 18: expression = "Hands on hips, closed-eyes smile"; break;
				case 20: expression = "Hands on hips, nervous sweat"; break;
				case 21: expression = "Hands on hips, wink"; break;
				case 22: expression = "Hands on hips, groan"; break;
				case 23: expression = "Hands on hips, sweatdrop"; break;
				case 25: expression = "Looking away"; break;
				case 26: expression = "Yell"; break;
				case 27: expression = "Stern look"; break;
				case 28: expression = "Nervous sweat"; break;
				case 29: expression = "Smug smile"; break;
				case 31: expression = "Serious look"; break;
				case 32: expression = "Serious look, sweat"; break;
			}
			break;
		
		case 1:
			character = "ジョー";
			switch (expressionID) {
				case 1: expression = "Default (no collar)"; break;
				case 2: expression = "Eyes-open smile (no collar)"; break;
				case 3: expression = "Eyes-closed smile (no collar)"; break;
				case 4: expression = "Serious look (no collar)"; break;
				case 5: expression = "Furrowed brow (no collar)"; break;
				case 6: expression = "Upset groan (no collar)"; break;
				case 11: expression = "Default"; break;
				case 12: expression = "Eyes-open smile"; break;
				case 13: expression = "Eyes-closed smile"; break;
				case 14: expression = "Serious look"; break;
				case 15: expression = "Furrowed brow"; break;
				case 16: expression = "Upset groan"; break;
				case 17: expression = "Folded arms wondering"; break;
				case 18: expression = "Folded arms sweatdrop"; break;
				case 19: expression = "Sweating bullets, forced smile"; break;
				case 20: expression = "Sweating bullets, eyebrows-up smile"; break;
				case 21: expression = "Sweating bullets, eyes-open smile"; break;
				case 22: expression = "Serious look, sweating"; break;
				case 23: expression = "Serious look and eyebags, sweating bullets"; break;
				case 24: expression = "Hallucination (shadowy face)"; break;
				case 25: expression = "Hallucination (visible face)"; break;
				case 26: expression = "Hallucination (blacked-out face)"; break;
				case 27: expression = "Hallucination disappearing 1"; break;
				case 28: expression = "Hallucination disappearing 2"; break;
				case 29: expression = "Hallucination disappearing 3"; break;
				case 30: expression = "Hallucination disappearing 4"; break;
				case 31: expression = "Disappearing 1"; break;
				case 32: expression = "Disappearing 2"; break;
				case 33: expression = "Disappearing 3"; break;
				case 34: expression = "Disappearing 4"; break;
				case 35: expression = "Folded arms smile"; break;
			}
			break;
		
		case 2:
			character = "ケイジ";
			switch (expressionID) {
				case 1: expression = "Default smile"; break;
				case 2: expression = "Frown"; break;
				case 3: expression = "Stern"; break;
				case 4: expression = "Looking to side"; break;
				case 5: expression = "Looking to side, glancing gravely"; break;
				case 6: expression = "Scratching shoulder, musing"; break;
				case 7: expression = "Scratching shoulder, smiling"; break;
				case 8: expression = "Scratching shoulder, surprised"; break;
				case 9: expression = "Right hand under face, sweating"; break;
				case 10: expression = "Left arm down, default smile"; break;
				case 11: expression = "Left arm down, frown"; break;
				case 12: expression = "Left arm down, stern"; break;
				case 13: expression = "Turned to side"; break;
				case 14: expression = "Turned to side, slight smile"; break;
				case 15: expression = "Turned to side, head lowered uneasily"; break;
				case 16: expression = "Turned to side, looking ahead"; break;
				case 17: expression = "Turned to side, gripping face in fear"; break;
				case 18: expression = "Turned to side, gripping face and sweating"; break;
				case 19: expression = "Evil grin"; break;
				case 20: expression = "Turned to side tousling hair"; break;
				case 21: expression = "Turned to side tousling hair, slight smile"; break;
				case 22: expression = "Facing forward, neutral look"; break;
				case 23: expression = "Turned to side, grave smirk"; break;
				case 24: expression = "Policeman, mouth open"; break;
				case 25: expression = "Policeman, neutral"; break;
				case 26: expression = "Policeman, furrowed brow"; break;
				case 27: expression = "Policeman, furrowed brow + sweat"; break;
				case 28: expression = "Policeman, clenched teeth"; break;
				case 29: expression = "Policeman, clenched teeth, wide eyes"; break;
				case 30: expression = "Policeman, wide eyes of surprise"; break;
				case 31: expression = "Policeman, shocked horror"; break;
				case 32: expression = "Policeman, furrowed brow, clenched teeth"; break;
				case 33: expression = "Policeman, look of despair"; break;
				case 34: expression = "Gripping shadowed face"; break;
				case 35: expression = "Gripping shadowed face, sweating"; break;
				case 36: expression = "Gripping shadowed face, sweating (bloodshot eyes)"; break;
				case 37: expression = "Facing forward, murderous intent"; break;
			}
			break;
		
		case 3:
			character = "カンナ";
			switch (expressionID) {
				case 1: expression = "Arms crossed, default look"; break;
				case 2: expression = "Arms crossed, neutral smile"; break;
				case 3: expression = "Arms crossed, fully dead-eyed"; break;
				case 4: expression = "Arms crossed, dead-eyed"; break;
				case 5: expression = "Arms crossed, angry shout"; break;
				case 6: expression = "Arms crossed, angry shout with tears"; break;
				case 7: expression = "Arms crossed, angry shout with tears, wet skirt"; break;
				case 8: expression = "Arms crossed, fully dead-eyed, wet skirt"; break;
				case 9: expression = "Neutral smile"; break;
				case 10: expression = "Default look"; break;
				case 11: expression = "Dead-eyed, mouth closed"; break;
				case 12: expression = "Dead-eyed, mouth open"; break;
				case 13: expression = "Offended shout"; break;
				case 14: expression = "Angry shout (lightless eyes)"; break;
				case 15: expression = "Angry shout with tears (lightless eyes)"; break;
				case 16: expression = "Looking down to side with smile"; break;
				case 17: expression = "Looking down to side, eyes looking back curiously"; break;
				case 18: expression = "Hands in front smile"; break;
				case 19: expression = "Hands in front closed-eye smile"; break;
				case 20: expression = "Hands in front closed-dead-eyes smile"; break;
				case 21: expression = "Hands in front closed-dead-eyes smile with tears"; break;
				case 22: expression = "Offended shout with sweat"; break;
				case 23: expression = "Angry shout"; break;
				case 24: expression = "Angry shout with sweat"; break;
				case 25: expression = "Angry shout, horrified face, brows upturned"; break;
				case 26: expression = "Angry shout, horrified face"; break;
				case 27: expression = "Upset look"; break;
				case 28: expression = "Upset look, horrified face, mouth closed"; break;
				case 29: expression = "Upset look, horrified face, mouth open"; break;
				case 30: expression = "Upset look, mouth closed"; break;
				case 31: expression = "Looking down to side, blushing, covering face"; break;
			}
			break;
		
		case 4:
			character = "Qタロウ";
			switch (expressionID) {
				case 1: expression = "Smile with thumbs-up"; break;
				case 2: expression = "Open mouth, closed fist"; break;
				case 3: expression = "Lowered-eyes smile"; break;
				case 4: expression = "Smile with closed fist"; break;
				case 5: expression = "Fists-balled shout"; break;
				case 6: expression = "Fists balled, teeth clenched, sweat"; break;
				case 7: expression = "Touching cap, face in shadow, frown"; break;
				case 8: expression = "Touching cap, face in shadow, mouth open"; break;
				case 9: expression = "Touching cap, face in shadow, frown, sweat"; break;
				case 10: expression = "Touching cap, face in shadow, mouth open, sweat"; break;
				case 11: expression = "Arms lowered, teeth clenched, sweat"; break;
				case 12: expression = "Arms lowered, teeth clenched, freaked out"; break;
				case 13: expression = "Arms lowered, teeth clenched, lowered eyes of despair"; break;
				case 14: expression = "Arms lowered, eyes clearing up"; break;
				case 15: expression = "Touching cap, face in shadow, frown with sweat"; break;
				case 16: expression = "Holding cap in hand"; break;
				case 17: expression = "Holding cap in hand, mouth open"; break;
				case 18: expression = "Holding cap in hand, grinning"; break;
				case 19: expression = "Holding cap in hand, grinning, eyes shut"; break;
				case 20: expression = "Holding gun, shouting"; break;
				case 21: expression = "Holding gun, clenched teeth"; break;
				case 22: expression = "Holding gun, clenched teeth, freaked-out look"; break;
				case 24: expression = "Touching cap, face in shadow, grin with sweat"; break;
				case 25: expression = "Fists-balled shout with sweat"; break;
			}
			break;
		
		case 5:
			character = "ソウ";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Smile"; break;
				case 3: expression = "Closed-eyes smile"; break;
				case 4: expression = "Looking down to side"; break;
				case 5: expression = "Grave glare"; break;
				case 6: expression = "Looking down to side with smirk"; break;
				case 7: expression = "Stunned look"; break;
				case 8: expression = "Smile with lightless eyes"; break;
				case 9: expression = "Afraid look with lightless eyes"; break;
				case 10: expression = "Sarcastic eyes"; break;
				case 11: expression = "Disdainful pose"; break;
				case 12: expression = "Disdainful pose, closed-eyes smile"; break;
				case 13: expression = "Disdainful pose, dark eyes"; break;
				case 14: expression = "Disdainful pose, smug eyes"; break;
				case 15: expression = "Looking down to side with frown"; break;
				case 16: expression = "Looking down to side with smug smirk"; break;
				case 17: expression = "Looking down to side, glancing with frown"; break;
				case 18: expression = "Looking down to side, glancing with smirk"; break;
				case 19: expression = "Looking down to side, sighing"; break;
				case 20: expression = "Looking down to side, annoyed"; break;
				case 21: expression = "Looking down to side, annoyed, grim look"; break;
				case 22: expression = "Looking down to side, annoyed, tearing up"; break;
				case 23: expression = "Pulling down scarf to show collar"; break;
				case 24: expression = "Pulling down scarf to show collar, grin"; break;
				case 25: expression = "Scared look"; break;
				case 26: expression = "Scared look, grave face"; break;
				case 27: expression = "Hands out, mouth open"; break;
				case 28: expression = "Hands out, bewildered eyes, clenched teeth"; break;
				case 29: expression = "Hands out, bewildered eyes, clenched teeth, sweatdrop"; break;
				case 30: expression = "Hands out, bewildered eyes with bags"; break;
				case 31: expression = "Hands out, mouth open, eyes with bags"; break;
				case 32: expression = "Hands out, mouth open, angry eyes with bags"; break;
				case 33: expression = "Hands out, mouth open, angry eyes with bags, grim face"; break;
				case 34: expression = "Hands out, bewildered eyes, clenched teeth, grim face"; break;
				case 35: expression = "Hands out, mouth open, grim face"; break;
				case 36: expression = "Hands out, mouth open, angry eyes, grim face"; break;
				case 37: expression = "Turned to side, clutching head in hands"; break;
				case 38: expression = "Afraid and spiky"; break;
			}
			break;
		
		case 6:
			character = "レコ";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Throwing horns, grim scowl"; break;
				case 4: expression = "Smile"; break;
				case 5: expression = "Looking to side with frown"; break;
				case 6: expression = "Looking to side with scowl"; break;
				case 7: expression = "Looking to side with scowl, eyes closed"; break;
				case 8: expression = "Looking to side with grim scowl"; break;
				case 9: expression = "Looking to side with grim scowl, eyes closed"; break;
				case 10: expression = "Hands out, glaring scowl"; break;
				case 11: expression = "Hands out, glaring scowl, sweating"; break;
				case 12: expression = "Hands out, wide-eyed shout"; break;
				case 13: expression = "Hands out, closed-eyes smile"; break;
				case 15: expression = "Hands out, teary-eyed shout"; break;
				case 16: expression = "Hands out, running makeup, scowl"; break;
				case 17: expression = "Hands out, running makeup, closed teeth"; break;
				case 18: expression = "Hands out, running makeup, shout"; break;
				case 19: expression = "Fists out, enraged face"; break;
				case 20: expression = "No makeup, somber face"; break;
				case 21: expression = "No makeup, mouth open"; break;
				case 22: expression = "No makeup, sad eyes"; break;
				case 23: expression = "No makeup, sad eyes, mouth open"; break;
				case 24: expression = "No makeup, sad eyes, closed teeth"; break;
				case 25: expression = "No makeup, angry eyes, closed teeth"; break;
				case 26: expression = "No makeup, fists out, angry sad eyes"; break;
				case 27: expression = "No makeup, angry eyes, mouth open"; break;
				case 28: expression = "No makeup, fists out, angry eyes"; break;
				case 30: expression = "No makeup, angry eyes, closed teeth"; break;
				case 31: expression = "No makeup, fists out, enraged face"; break;
				case 32: expression = "No makeup, hands out, worried look"; break;
				case 33: expression = "Hands out, scowl, tearful eyes"; break;
				case 34: expression = "Hands out, shout, tearful eyes"; break;
				case 35: expression = "Hands out, closed teeth, tearful eyes"; break;
				case 36: expression = "Lights-out silhouette"; break;
				case 37: expression = "Lights-out silhouette, looking to side"; break;
				case 38: expression = "Fists out, angry sad eyes"; break;
				case 39: expression = "Fists out, angry eyes"; break;
				case 40: expression = "Fists out, angry eyes, mouth open"; break;
				case 41: expression = "Fists out, shocked eyes, mouth open"; break;
			}
			break;
		
		case 7:
			character = "ナオ";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Wide eyes, mouth open"; break;
				case 3: expression = "Wide eyes, grim look, raised finger"; break;
				case 4: expression = "Raised finger"; break;
				case 5: expression = "Holding wrist, looking down"; break;
				case 6: expression = "Holding wrist, looking down (lightless eyes)"; break;
				case 7: expression = "School uniform, mouth open"; break;
				case 8: expression = "School uniform, wide eyes"; break;
				case 9: expression = "Holding wrist, looking toward camera"; break;
				case 10: expression = "Wide eyes, closed teeth, grim look"; break;
				case 11: expression = "Wide eyes, open mouth, grim look, raised finger"; break;
				case 12: expression = "Closed-eyes smile"; break;
				case 13: expression = "Closed-eyes blush smile"; break;
				case 14: expression = "Tired eyes, looking to side"; break;
				case 15: expression = "Tired eyes, looking to side, grim look"; break;
				case 16: expression = "Closed eyes"; break;
				case 17: expression = "Closed tired eyes"; break;
				case 18: expression = "Closed tired tearful eyes"; break;
				case 19: expression = "Tired half-closed eyes"; break;
				case 20: expression = "Angry eyebrows, mouth open"; break;
				case 21: expression = "Angry eyebrows, mouth open, raised finger"; break;
				case 22: expression = "Lowered eyebrows, grim look, mouth open"; break;
				case 23: expression = "View from behind of pushing"; break;
				case 24: expression = "Hand on chest, head lowered, grim look"; break;
				case 25: expression = "Hand on chest, relieved smile"; break;
				case 26: expression = "Looking up and to side"; break;
				case 27: expression = "Looking up and to side, sweatdrop"; break;
			}
			break;
		
		case 8:
			character = "カイ";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Raised eyebrows"; break;
				case 3: expression = "Lowered eyebrows"; break;
				case 4: expression = "Hand on chin, looking to side"; break;
				case 5: expression = "Looking down and to side, holding up ladle"; break;
				case 6: expression = "Looking down and to side"; break;
				case 7: expression = "Looking down and to side, grinning grimly"; break;
				case 8: expression = "Holding up bleeding wrists"; break;
				case 9: expression = "Holding up bleeding wrists, smile"; break;
				case 10: expression = "Holding up bleeding wrists, shouting"; break;
				case 11: expression = "Looking down and to side, fade in shadow"; break;
				case 12: expression = "Looking down and to side, sweating nervously"; break;
				case 13: expression = "Looking down and to side, furrowed brow shout, sweating"; break;
				case 14: expression = "Hiding face with frying pan"; break;
				case 15: expression = "Looking down and to side, eyes red from crying (no collar/utensils)"; break;
				case 16: expression = "Default (no collar/utensils)"; break;
				case 17: expression = "Raised eyebrows (no collar/utensils)"; break;
				case 18: expression = "Blue apron, default (no collar/utensils)"; break;
				case 19: expression = "Blue apron, raised eyebrows (no collar/utensils)"; break;
				case 20: expression = "Hand on chin, looking to side (no collar/utensils)"; break;
				case 21: expression = "Blue apron, hand on chin, looking to side (no collar/utensils)"; break;
				case 22: expression = "Holding new apron with smile (no collar/utensils)"; break;
				case 23: expression = "Hallucination"; break;
				case 24: expression = "Past appearance as assassin"; break;
			}
			break;
		
		case 9:
			character = "ギン";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Smile"; break;
				case 3: expression = "Worried"; break;
				case 4: expression = "Horrified look"; break;
				case 5: expression = "Smile, hands in front"; break;
				case 6: expression = "Mad, claws raised"; break;
				case 7: expression = "Shocked, claws raised"; break;
				case 8: expression = "Wolf"; break;
				case 9: expression = "Horrified, claws raised"; break;
				case 10: expression = "Looking up, hands in front"; break;
				case 11: expression = "Looking up, blushing smile"; break;
				case 12: expression = "Looking up, sad"; break;
				case 13: expression = "Looking up, sad, grave look"; break;
				case 14: expression = "Looking up, tearful"; break;
				case 15: expression = "Looking up, tearful, grave look"; break;
				case 16: expression = "Looking up, wide eyes"; break;
				case 17: expression = "Looking up, wide eyes with shadow"; break;
				case 18: expression = "Looking up, wide eyes, grave look"; break;
				case 19: expression = "Mad, claws raised, tearful eyes"; break;
				case 20: expression = "Unamused eyes"; break;
				case 21: expression = "Looking to side"; break;
				case 22: expression = "Looking to side, raised eyebrows"; break;
			}
			break;
		
		case 11:
			character = "アリス";
			switch (expressionID) {
				case 1: expression = "Default glare"; break;
				case 2: expression = "Surprised face"; break;
				case 3: expression = "Closed-eyes grin"; break;
				case 4: expression = "Glance to side, sweating"; break;
				case 5: expression = "Fist to palm, glare"; break;
				case 6: expression = "Fist to palm, closed-eyes grin"; break;
				case 7: expression = "Confused shout"; break;
				case 8: expression = "Angry shout"; break;
				case 9: expression = "Angry, gritted teeth"; break;
				case 10: expression = "Fist to palm, angry shout, grim look"; break;
				case 11: expression = "Fist to palm, angry, gritted teeth, grim look"; break;
				case 12: expression = "Confused shout, grim look"; break;
				case 13: expression = "Confused eyes, closed teeth"; break;
				case 14: expression = "Look to side, glare"; break;
				case 15: expression = "Look to side, angry shout"; break;
				case 16: expression = "Look to side, pensive look"; break;
				case 17: expression = "Look to side, sad look"; break;
				case 18: expression = "Look to side, glare, clutching chest and sweating"; break;
				case 19: expression = "Look to side, angry shout, clutching chest and sweating"; break;
				case 20: expression = "Look to side, sad look, clutching chest and sweating"; break;
				case 22: expression = "Tired face"; break;
				case 23: expression = "Tired face, mouth open"; break;
				case 24: expression = "Tired face, closed-eyes smile"; break;
				case 25: expression = "Tired face, closed teeth"; break;
				case 26: expression = "Tired face, eyes open"; break;
				case 27: expression = "Tired face, eyes open wider"; break;
				case 28: expression = "Tired face, angry shout"; break;
				case 29: expression = "Tired face, fist to palm, closed teeth"; break;
				case 30: expression = "Tired face, fist to palm, angry shout"; break;
				case 31: expression = "Tired face, clutching chest"; break;
				case 32: expression = "Tired face, clutching chest, angry shout"; break;
				case 33: expression = "Lights-out silhouette"; break;
				case 34: expression = "Lights-out silhouette, clutching chest"; break;
				case 35: expression = "Refreshed face, open-mouth smile"; break;
				case 36: expression = "Fist to palm, enraged"; break;
			}
			break;
		
		case 12:
			character = "ミシマ";
			switch (expressionID) {
				case 1: expression = "Default smile"; break;
				case 2: expression = "Mouth open"; break;
				case 4: expression = "Default smile (no collar)"; break;
				case 5: expression = "Mouth open (no collar)"; break;
				case 6: expression = "Hallucination"; break;
				case 7: expression = "Serious frown"; break;
				case 13: expression = "Hand on chin, grin"; break;
				case 22: expression = "Adjusting glasses, grin"; break;
				case 25: expression = "Standing proud, happy grin"; break;
			}
			break;
		
		case 14:
			character = "ホエミー";
			switch (expressionID) {
				case 1: expression = "Default smile"; break;
				case 2: expression = "Closed-eyes smile"; break;
				case 3: expression = "Mouth open"; break;
				case 4: expression = "Angry"; break;
				case 5: expression = "Angry, bleeding"; break;
				case 6: expression = "Smug smile"; break;
				case 7: expression = "Default smile (darkened)"; break;
				case 8: expression = "Smile smile (darkened)"; break;
				case 9: expression = "Lab coat (Emiri Harai)"; break;
			}
			break;
		
		case 15:
			character = "ハンナキー";
			switch (expressionID) {
				case 1: expression = "Default frown"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Raised eyebrows"; break;
				case 4: expression = "Wide smile"; break;
				case 5: expression = "Wide smile, swirly eyes"; break;
				case 6: expression = "Lights-out silhouette"; break;
				case 7: expression = "Holding hat, face in shadow"; break;
				case 8: expression = "Holding hat, face in shadow, mouth open"; break;
				case 9: expression = "Lab coat (Michiru Namida)"; break;
			}
			break;
		
		case 16:
			character = "ガシュー";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Raised eyebrow"; break;
				case 4: expression = "Furrowed brow"; break;
				case 5: expression = "Eyes closed"; break;
				case 6: expression = "Head tilt"; break;
				case 7: expression = "Holding gun"; break;
				case 12: expression = "Clutching chest and sweating"; break;
				case 13: expression = "Clutching chest and sweating, mouth open"; break;
				case 14: expression = "Gun to head"; break;
				case 15: expression = "Gun to head, mouth open"; break;
				case 16: expression = "Gun to head, smile"; break;
			}
			break;
		
		case 17:
			character = "サラの父";
			switch (expressionID) {
				case 1: expression = "Default smile"; break;
				case 2: expression = "Toothy grin"; break;
				case 3: expression = "Neutral"; break;
				case 4: expression = "Enraged"; break;
				case 5: expression = "Brown suit, face in shadow"; break;
				case 6: expression = "Brown suit, eyes closed smile"; break;
				case 7: expression = "Brown suit, hat in hand"; break;
				case 8: character = "アルジー"; expression = "Default smile"; break;
				case 9: character = "アルジー"; expression = "Hand on hat"; break;
				case 10: character = "アルジー"; expression = "Hat in hand"; break;
			}
			break;
		
		case 18:
			character = "ノエル";
			switch (expressionID) {
				case 1: expression = "Smile sign"; break;
				case 2: expression = "Ice cream over mouth"; break;
				case 3: expression = "Cat mouth sign"; break;
				case 4: expression = "Angry face sign"; break;
				case 5: expression = "Mishima face sign"; break;
				case 6: expression = "Smirk-in-profile sign"; break;
				case 7: expression = "Smile sign, swirly eyes"; break;
				case 8: expression = "Blank eyes sign"; break;
				case 9: expression = "Looking up at hole in forehead"; break;
			}
			break;
		
		case 19:
			character = "ミドリ";
			switch (expressionID) {
				case 1: expression = "Default grin (no collar)"; break;
				case 2: expression = "Default grin"; break;
				case 3: expression = "Open-mouth frown"; break;
				case 4: expression = "Closed-eyes grin"; break;
				case 5: expression = "Mouth open"; break;
				case 6: expression = "Mouth open, swirly eyes"; break;
				case 7: expression = "Swirly eyes, evil dark overlay"; break;
				case 8: expression = "Open-mouth frown (no collar)"; break;
				case 9: expression = "Closed-eyes grin (no collar)"; break;
				case 10: expression = "Mouth open (no collar)"; break;
				case 11: expression = "Mouth open, swirly eyes (no collar)"; break;
				case 12: expression = "Hand detached, default grin"; break;
				case 14: case 18: expression = "Hand detached, closed-eyes grin"; break; // 14 and 18 are identical
				case 15: case 19: expression = "Hand detached, mouth open"; break; // 15 and 19 are identical
				case 17: expression = "Hand detached, open-mouth frown"; break;
				case 20: expression = "Gripping arm with sweat, bewildered eyes, grin"; break;
				case 21: expression = "Gripping arm with sweat, bewildered eyes, open-mouth frown"; break;
				case 22: expression = "Gripping arm with sweat, bewildered eyes, mouth open"; break;
				case 23: expression = "Gripping arm with sweat, bewildered eyes, mouth open in confusion"; break;
				case 24: expression = "Gripping arm with sweat, grin"; break;
				case 25: expression = "Gripping arm with sweat, open-mouth frown"; break;
				case 26: expression = "Gripping arm with sweat, mouth open"; break;
				case 27: expression = "Gripping arm with sweat, lowered eyebrows, grin"; break;
				case 28: expression = "Gripping arm with sweat, lowered eyebrows, open-mouth frown"; break;
				case 29: expression = "Gripping arm with sweat, lowered eyebrows, mouth open"; break;
				case 30: expression = "Gripping arm with sweat, lowered eyebrows, mouth open in confusion"; break;
				case 31: expression = "Smug smirk with grave look"; break;
				case 32: expression = "Gripping arm with sweat, closed-eyes grin"; break;
				case 33: expression = "Head bowed"; break;
			}
			break;
		
		case 20:
			character = "メグミ";
			switch (expressionID) {
				case 1: expression = "Smile"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Furrowed brow"; break;
				case 4: expression = "Lowered eyes, mouth open"; break;
				case 5: expression = "Lowered eyes, mouth closed"; break;
			}
			break;
		
		case 21:
			character = "少年ケイジ";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Frown"; break;
				case 3: expression = "Sweat, mouth closed"; break;
				case 4: expression = "Sweat, mouth open"; break;
			}
			break;
		
		case 22:
			character = "おまわりさん";
			switch (expressionID) {
				case 1: expression = "Smile"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Closed-eye smile"; break;
				case 4: expression = "Surprise"; break;
				case 99: expression = "Hallucination"; break;
			}
			break;
		
		case 91:
			character = "ランマル";
			switch (expressionID) {
				case 1: expression = "Hand up, mouth open"; break;
				case 2: expression = "Hand up, mouth closed"; break;
				case 3: expression = "Hand up, eyes to side, mouth open"; break;
				case 4: expression = "Hand up, eyes to side, mouth closed"; break;
				case 5: expression = "Hand up, eyes to side, mouth open wide"; break;
				case 6: expression = "Hand up, surprised eyes, mouth closed"; break;
				case 7: expression = "Hand up, surprised eyes, closed teeth"; break;
				case 8: expression = "Hand tilted, mouth open"; break;
				case 9: expression = "Hand tilted, mouth closed"; break;
				case 10: expression = "Hand tilted, eyes to side, mouth open"; break;
				case 11: expression = "Hand tilted, eyes to side, mouth closed"; break;
				case 12: expression = "Hand tilted, eyes to side, mouth open wide"; break;
				case 13: expression = "Hand tilted, surprised eyes, mouth closed"; break;
				case 14: expression = "Hand tilted, surprised eyes, closed teeth"; break;
				case 15: expression = "Hands in pockets, mouth open"; break;
				case 16: expression = "Hands in pockets, mouth closed"; break;
				case 17: expression = "Hands in pockets, eyes to side"; break;
				case 18: expression = "Hands in pockets, surprised eyes, mouth closed"; break;
				case 19: expression = "Hands in pockets, surprised eyes, closed teeth"; break;
				case 20: expression = "Hand tilted, furrowed brow, mouth open"; break;
				case 21: expression = "Hands in pockets, furrowed brow, mouth closed"; break;
				case 22: expression = "Hands in pockets, worried with grim look, closed teeth"; break;
				case 23: expression = "Hands in pockets, worried with grim look, mouth open"; break;
				case 24: expression = "Hands in pockets, closed-eyes smile"; break;
				case 25: expression = "Hands in pockets, raised-eyebrows smile"; break;
				case 26: expression = "Hands in pockets, furrowed brow, clenched teeth, grim look"; break;
				case 27: expression = "Hands in pockets, worried, closed teeth"; break;
				case 28: expression = "Hands in pockets, wide eyes, mouth open"; break;
				case 29: expression = "Hands in pockets, eyes to side, mouth wide open"; break;
				case 30: expression = "Hand on face, looking down fearfully"; break;
				case 31: expression = "Hand on face, looking to side"; break;
				case 32: expression = "Hand on face, looking to side and glancing toward camera"; break;
				case 33: expression = "Hand on face, looking to side, mouth open"; break;
				case 34: expression = "Hand on face, looking to side and glancing toward camera, mouth open"; break;
				case 35: expression = "Hand on face, looking to side, mouth hidden"; break;
				case 36: expression = "Hand on face, looking to side, mouth hidden, sweating fearfully"; break;
				case 37: expression = "Hand on face, looking to side, mouth hidden, sweating"; break;
				case 38: expression = "Evil, smile"; break;
				case 39: expression = "Evil, closed mouth"; break;
				case 40: expression = "Evil, mouth open"; break;
				case 41: expression = "Evil, thin mouth"; break;
				case 42: expression = "Evil, hands out, mouth open"; break;
				case 43: expression = "Evil, hands out, thin mouth"; break;
				case 44: expression = "Evil, furrowed brow, mouth open"; break;
				case 45: expression = "Evil, furrowed brow, angry mouth"; break;
				case 46: expression = "Evil, hands out, furrowed brow, mouth open"; break;
				case 47: expression = "Evil, hands out, furrowed brow, angry mouth"; break;
				case 48: expression = "Evil, furrowed brow, closed mouth"; break;
			}
			break;
		
		case 92:
			character = "マイ";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Smile"; break;
				case 3: expression = "Closed-eyes smile"; break;
				case 4: expression = "Mouth open, bottoms of eyes slightly higher"; break;
				case 6: expression = "Lowered eyebrows, closed-teeth smile"; break;
				case 7: expression = "Clasped hands, wink with tongue out"; break;
				case 8: expression = "Clasped hands, blushing closed-eyes smile"; break;
				case 9: expression = "Clasped hands, blushing open-eyes smile"; break;
				case 10: expression = "Worried eyebrows, closed teeth"; break;
				case 11: expression = "Worried eyebrows, mouth open"; break;
				case 12: expression = "Worried eyebrows, closed teeth, grim look"; break;
				case 13: expression = "Worried eyebrows, mouth open, grim look"; break;
				case 14: expression = "Worried eyebrows, scared eyes, closed teeth, grim look"; break;
				case 15: expression = "Worried eyebrows, scared eyes, mouth open, grim look"; break;
				case 16: expression = "Worried eyebrows, crying, closed teeth, grim look"; break;
				case 17: expression = "Looking down at hand"; break;
				case 18: expression = "Looking down at hand, eyes closed"; break;
				case 19: expression = "Looking down at hand, lowered brows"; break;
				case 20: expression = "Looking down at hand, mouth open"; break;
				case 21: expression = "Looking down at hand, mouth open, eyes closed crying"; break;
				case 22: expression = "Looking down at hand, lowered brows, mouth open"; break;
				case 23: expression = "Looking down at hand, mouth open, teary eyes"; break;
				case 24: expression = "Looking down at hand, angry brows, mouth open"; break;
			}
			break;
		
		case 93:
			character = "ヒナコ";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Small grin"; break;
				case 4: expression = "Eyes closed"; break;
				case 5: expression = "Eyes closed, mouth open"; break;
				case 6: expression = "Eyes closed, grin"; break;
				case 7: expression = "Sad eyes"; break;
				case 8: expression = "Sad eyes, mouth open"; break;
				case 9: expression = "Furrowed brow"; break;
				case 10: expression = "Furrowed brow, mouth open"; break;
				case 11: expression = "Grave look"; break;
				case 12: expression = "Grave look, mouth open"; break;
				case 13: expression = "Grave look, eyes closed"; break;
				case 14: expression = "Real Hinako silhouette"; break;
			}
			break;
		
		case 94:
			character = "ハヤサカ";
			switch (expressionID) {
				case 1: expression = "Default"; break;
				case 2: expression = "Mouth open"; break;
				case 3: expression = "Mouth open, glancing to side"; break;
				case 4: expression = "Teeth clenched, sweating"; break;
				case 5: expression = "Hand in front, mouth open"; break;
				case 6: expression = "Hand in front, teeth clenched, sweating"; break;
				case 7: expression = "Eyes closed, teeth clenched, sweating"; break;
				case 8: expression = "Hand sticking out, eyes closed, teeth clenched, sweating"; break;
				case 9: expression = "Hand sticking out, eyes closed, teeth clenched"; break;
				case 10: expression = "Teeth clenched"; break;
				case 11: expression = "Eyes wide, teeth clenched, sweating"; break;
				case 12: expression = "Eyes wide, mouth open, sweating"; break;
				case 13: expression = "Eyes wide, teeth clenched, sweating, grave look"; break;
				case 14: expression = "Eyes wide, mouth open, sweating, grave look"; break;
				case 15: expression = "Eyes closed, teeth clenched, sweating, grave look"; break;
				case 16: expression = "Teeth clenched, sweating, grave look"; break;
				case 19: expression = "Glasses off, hand sticking out, mouth open"; break;
				case 20: expression = "Holding glasses across chest, sweating"; break;
				case 21: expression = "Hand sticking out, eyes closed"; break;
			}
			break;
		
		case 95:
			character = "クルマダ";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Frown"; break;
				case 3: expression = "Grin"; break;
				case 4: expression = "Clenched teeth, closed fist"; break;
				case 5: expression = "Shouting mouth"; break;
				case 6: expression = "Shouting mouth, closed fist"; break;
				case 7: expression = "Slight surprise"; break;
				case 8: expression = "Angry"; break;
				case 9: expression = "Angry, clenched teeth"; break;
				case 10: expression = "Angry, shouting"; break;
				case 11: expression = "Narrowed eyes, sweating"; break;
				case 12: expression = "Narrowed eyes, smirk, sweating"; break;
				case 13: expression = "Narrowed eyes, clenched teeth, sweating"; break;
				case 14: expression = "Narrowed eyes, shouting"; break;
				case 15: expression = "Damaged, mouth open"; break;
				case 16: expression = "Damaged, frown"; break;
				case 17: expression = "Damaged, grin"; break;
				case 18: expression = "Damaged, clenched teeth"; break;
				case 19: expression = "Damaged, shouting"; break;
				case 20: expression = "Damaged, slight surprise"; break;
				case 21: expression = "Damaged, angry"; break;
				case 22: expression = "Damaged, angry, clenched teeth"; break;
				case 23: expression = "Damaged, angry, shouting"; break;
				case 24: expression = "Fatally damaged, mouth open"; break;
				case 25: expression = "Fatally damaged, frown"; break;
				case 26: expression = "Fatally damaged, grin"; break;
				case 27: expression = "Fatally damaged, clenched teeth"; break;
				case 28: expression = "Fatally damaged, shouting"; break;
				case 29: expression = "Fatally damaged, slight surprise"; break;
				case 30: expression = "Fatally damaged, angry"; break;
				case 31: expression = "Fatally damaged, angry, clenched teeth"; break;
				case 32: expression = "Fatally damaged, angry, shouting"; break;
				case 33: expression = "Damaged, sad, clenched teeth"; break;
				case 34: expression = "Damaged, sad, mouth open"; break;
				case 35: expression = "Damaged, crying"; break;
				case 36: expression = "Damaged, crying, powered off"; break;
				case 37: expression = "Fatally damaged, sad, clenched teeth"; break;
				case 38: expression = "Fatally damaged, sad, mouth open"; break;
				case 39: expression = "Fatally damaged, sad, crying"; break;
				case 40: expression = "Fatally damaged, crying, powered off"; break;
				case 43: expression = "Fatally damaged, powered off"; break;
				case 44: expression = "Damaged, powered off"; break;
			}
			break;
		
		case 96:
			character = "アンズ";
			switch (expressionID) {
				case 1: expression = "Clown mask"; break;
				case 2: expression = "Worried"; break;
				case 3: expression = "Raised eyebrows"; break;
				case 4: expression = "Concerned"; break;
				case 5: expression = "Surprised"; break;
				case 6: expression = "Smile"; break;
				case 7: expression = "Scared look, mouth closed"; break;
				case 8: expression = "Scared look, mouth open"; break;
				case 9: expression = "Horrified look, mouth closed"; break;
				case 10: expression = "Horrified look, mouth open"; break;
				case 11: expression = "Hood over half of face, worried, mouth open"; break;
				case 12: expression = "Hood over half of face, worried"; break;
				case 13: expression = "Hood over half of face, smile"; break;
				case 14: expression = "Face buried in darkness of hood"; break;
			}
			break;
		
		case 99:
			character = "ソウの影";
			switch (expressionID) {
				case 1: expression = "Mouth open"; break;
				case 2: expression = "Smile"; break;
			}
			break;
		
		case 999:
			switch (expressionID) {
				case 0: character = "人の影"; break;
				case 1: character = "ボッツン"; break;
				case 2: character = "警察の影"; break;
				case 3: character = "男の影"; break;
			}
			break;
	}
	
	var characterDisplayName = CTE.getString("Name_" + character, CTE.getString("TalkSpriteName_" + character, character));
	if (characterDisplayName === "ミドリ") characterDisplayName = CTE.getString("MidoriDefaultName", character);
	
	// Use expression descriptions provided in language scripts if they exist.
	if (includeExpression) expression = CTE.getString("TalkSpriteDescription_" + picture, expression);
	
	var format = includeExpression && expression !== ""? CTE.getString("TalkSpriteFormatWithExpression", "{0}、{1} / {2}")
		: CTE.getString("TalkSpriteFormatWithoutExpression", "{0} / {2}")
	return format.replace(/\{0\}/g, characterDisplayName).replace(/\{1\}/g, expression).replace(/\{2\}/g, picture);
};

// Called whenever the language is changed or language files are reloaded.
// Use it to refresh anything that uses translated text and may be open when language is changed.
CTE.languageRefreshHandler = function() {
};

// Called at the start of the function that processes display text for messages in the Message Debugger.
// Useful for replacing message codes added by plugins.
CTE.messageDebuggerPreviewTextHandler = function(message) {
	//message = message.replace(/\\yourcodehere\[[^\]+]\]/gi, "");
	return message;
};

// Called before displaying messages via the Message Debugger. Use to configure message display (i.e. window visibility) as desired.
// Passes message content and name of source ("map##", "commonevent##", or "troop##") for potential reference purposes.
CTE.messageDebuggerMessageSettingsHandler = function(message, source) {
	$gameMessage.setBackground(0); // 0 for window, 1 for dimmed box, 2 for transparent
};

// Called on returning from message displayed via the Message Debugger. Useful for erasing any message window pictures displayed beforehand.
CTE.messageDebuggerMessageSettingsPostHandler = function() {
};

// Called for default language, prioritized over Default Language setting.
// The default function tries to returns a language code based on the Steam user language if using a Steam API plugin.
// Change the language codes here if they don't match the ones you're using. Theoretically modifiable to use the API of another launcher.
CTE.languageCodeFromExternalAPI = function() {
	// Set languageFunction to a known function that will return Steam user language; if none is found, set to null.
	var languageFunction = (typeof OrangeGreenworks !== "undefined"? OrangeGreenworks.getGameLanguage : undefined) // OrangeGreenworks
		|| Game_System.prototype.getCurrentGameLanguage // Archeia_Steamworks
		|| null;
	
	// No function found, so return empty string.
	if (languageFunction === null) {
		return "";
	}
	
	// Get Steam API language code using the chosen function.
	var userLanguage = languageFunction();
	if (typeof userLanguage === "undefined" || userLanguage === null) {
		return "";
	}
	
	// Convert userLanguage (Steam API language code) to languageCode (language code for this plugin).
	var languageCode = "";
	switch (userLanguage) {
		case "arabic": languageCode = "ar"; break;
		case "bulgarian": languageCode = "bg"; break;
		case "schinese": languageCode = "zh-CN"; break;
		case "tchinese": languageCode = "zh-TW"; break;
		case "czech": languageCode = "cs"; break;
		case "danish": languageCode = "da"; break;
		case "dutch": languageCode = "nl"; break;
		case "english": languageCode = "en"; break;
		case "finnish": languageCode = "fi"; break;
		case "french": languageCode = "fr"; break;
		case "german": languageCode = "de"; break;
		case "greek": languageCode = "el"; break;
		case "hungarian": languageCode = "hu"; break;
		case "italian": languageCode = "it"; break;
		case "japanese": languageCode = "jp"; break;
		case "koreana": languageCode = "ko"; break;
		case "norwegian": languageCode = "no"; break;
		case "polish": languageCode = "pl"; break;
		case "portuguese": languageCode = "pt"; break;
		case "brazilian": languageCode = "pt-BR"; break;
		case "romanian": languageCode = "ro"; break;
		case "russian": languageCode = "ru"; break;
		case "spanish": languageCode = "es"; break;
		case "latam": languageCode = "es-419"; break;
		case "swedish": languageCode = "sv"; break;
		case "thai": languageCode = "th"; break;
		case "turkish": languageCode = "tr"; break;
		case "ukrainian": languageCode = "uk"; break;
		case "vietnamese": languageCode = "vn"; break;
	}
	
	// If a languageCode was determined, check that the language code is in the Language Codes list before returning it.
	if (languageCode !== "") {
		languageCode = languageCode.toUpperCase();
		for (var i = 0; i < CTE.LanguageCodes.length; i++) {
			if (languageCode === CTE.LanguageCodes[i].toUpperCase()) {
				return languageCode;
			}
		}
	}
	
	// No valid code found, so return empty string.
	return "";
};



/******************************
YTTD-SPECIFIC FUNCTIONS
******************************/

// Enable use of CommonEvents2 so that additional events are also exported and loaded.
CTE.usingCommonEvents2 = true;

// Before starting any animation, switch ID as defined in Extra, or create new animation from JSON and add to list.
CTE.addedAnimationsMap = {};

CTE.Game_Screen_startAnimation = Game_Screen.prototype.startAnimation;
Game_Screen.prototype.startAnimation = function(x, y, id, loop) {
	if (!ConfigManager.isBaseLanguage()) {
		var convertValue = CTE.getString("AnimationConvert_" + id, id);
		if (typeof convertValue === "string" && convertValue.trim().startsWith("{")) { // JSON
			var language = ConfigManager.getLanguage();
			var originalID = id;
			
			if (typeof CTE.addedAnimationsMap[language] !== "undefined"
			&& typeof CTE.addedAnimationsMap[language][originalID] !== "undefined") { // Get ID of already-added animation
				id = CTE.addedAnimationsMap[language][originalID];
			}
			else { // Add animation and store its ID
				try {
					var animation = JSON.parse(convertValue);
					$dataAnimations.push(animation);
					id = $dataAnimations.length - 1;
					
					CTE.addedAnimationsMap[language] = CTE.addedAnimationsMap[language] || {};
					CTE.addedAnimationsMap[language][originalID] = id;
				}
				catch (e) {
					CTE.warn("Error parsing JSON for AnimationConvert_ " + id + ". " + e.message);
				}
			}
		}
		else { // ID of built-in animation
			id = parseInt(convertValue, 10);
		}
	}
	CTE.Game_Screen_startAnimation.apply(this, arguments);
};

// Add touchpadMode setting (with localized string) and language setting to options.
Window_Options.prototype.addGeneralOptions = function() {
	this.addCommand(TextManager.alwaysDash, 'alwaysDash');
	this.addCommand(TextManager.commandRemember, 'commandRemember');
	if (!CTE.LockLanguage) {
		this.addCommand(CTE.getString("LanguageOptionName", CTE.BaseLanguageOptionName), "language");
	}
	this.addCommand(CTE.getString("OptionTouchpadMode", "ミニゲ自動クリック"), 'touchpadMode');
};

// Convert NameBoxSet names using "Name_XXX" definitions in Extra.
CTE.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	if (command === "NameBoxSet") {
		var name = args[0];
		for (var i = 1; i < args.length; i++)
			name += " " + args[i];
		
		var newName = CTE.getString("Name_" + name, "");
		if (newName !== "") {
			args = [ newName ];
		}
	}
	
	CTE.Game_Interpreter_pluginCommand.apply(this, arguments);
};

// Convert D_TEXT strings.
Sprite_Picture.prototype._processText = function(bitmap) {
	var text = this.dTextInfo.value;
	if (!ConfigManager.isBaseLanguage()) {
		text = text.replace(/発言力：/g, CTE.getString("DText_発言力：", "発言力："));
		text = text.replace(/精神：/g, CTE.getString("DText_精神：", "精神："));
	}
	
	var textState = {index: 0, x: 0, y: 0, text: text, left: 0, line: -1, height: 0};
	this._processNewLine(textState, bitmap);
	textState.height = this.hiddenWindow.calcTextHeight(textState, false);
	textState.index  = 0;
	while (textState.text[textState.index]) {
		this._processCharacter(textState, bitmap);
	}
};

// Return whether the current language should make all Balance Battles horizontal (i.e. Kai vs. Nao in Main Game 1, which is vertical in Japanese).
CTE.forceHorizontalBalanceBattles = function() {
	if (ConfigManager.isBaseLanguage()) {
		return false;
	}
	
	// Check if this is defined via Extra variable, but if it doesn't exist, fall back on explicit definition.
	var value = CTE.getNumber("MakeBalanceBattlesHorizontal", -1);
	if (value != -1) {
		return value == 1;
	}
	
	var horizontalLanguages = [ "EN" ];
	for (var i = 0; i < horizontalLanguages.length; i++) {
		if (ConfigManager.isLanguage(horizontalLanguages[i])) {
			return true;
		}
	}
	return false;
};

// Internally convert localized game titles (i.e. "Your Turn To Die") to Japanese title for compatibility with pre-CTE saves.
CTE.DataManager_loadGlobalInfo = DataManager.loadGlobalInfo;
DataManager.loadGlobalInfo = function() {
	var localizedNames = [ "Your Turn To Die", "Kimi ga Shine", "Mors Tua", "다수결 데스게임" ];
	var globalInfo = CTE.DataManager_loadGlobalInfo.call(this, arguments);
	for (var i = 1; i <= this.maxSavefiles(); i++) {
		if (globalInfo[i] == null) continue;
		if (localizedNames.includes(globalInfo[i].title)) {
			globalInfo[i].title = $dataSystem.gameTitle;
		}
	}
	return globalInfo;
};

// On load, internally convert localized variables back toJapanese for compatibility with pre-CTE saves.
CTE.DataManager_loadGameWithoutRescue = DataManager.loadGameWithoutRescue;
DataManager.loadGameWithoutRescue = function(savefileId) {
	var result = CTE.DataManager_loadGameWithoutRescue.apply(this, arguments);
	
	if (result && typeof $gameVariables !== "undefined") {
		var targetVariables = [ 3, 177 ]; // V3 for active item in discussion, V177 for correct item to use
		var conversions = [
			["Four Papers", "４枚組の紙"], ["Quatro Papéis", "４枚組の紙"], ["4 листа бумаги", "４枚組の紙"],
			["Transceiver", "トランシーバー"], ["Transceptor", "トランシーバー"], ["Рация", "トランシーバー"],
			["Voice Recorder", "ボイスレコーダー"], ["Gravador de Voz", "ボイスレコーダー"], ["Диктофон", "ボイスレコーダー"],
			["Green Book", "緑の本"], ["Livro Verde", "緑の本"], ["Зелёная книга", "緑の本"],
			["Lantern", "灯ろう"], ["Lanterna", "灯ろう"], ["Фонарь", "灯ろう"],
			["Note", "何かのメモ"], ["Nota", "何かのメモ"], ["Записка", "何かのメモ"],
			["ID Card", "IDカード"], ["Cartão ID", "IDカード"], ["ID-карта", "IDカード"],
			["First-Aid Kit", "救急キット"], ["Kit de Primeiros Socorros", "救急キット"], ["Аптечка", "救急キット"],
			["Upgrade Parts", "ランクアップパーツ"], ["Peças de Atualização", "ランクアップパーツ"], ["Улучшенные детали", "ランクアップパーツ"]
		];
		
		for (var targetIndex = 0; targetIndex < targetVariables.length; targetIndex++) {
			for (var convertIndex = 0; convertIndex < conversions.length; convertIndex++) {
				if ($gameVariables.value(targetVariables[targetIndex]) === conversions[convertIndex][0]) {
					$gameVariables.setValue(targetVariables[targetIndex], conversions[convertIndex][1]);
					break;
				}
			}
		}
	}
	
	return result;
};

// To avoid difficulty with text sounds and speed changes, don't use the normal CTE updateMessage - revert to the backup before that replacement.
Window_Message.prototype.updateMessage = CTE.Window_Message_updateMessage;

// Instead, use speed factor for current language to alter defaultSpeed.
CTE.Window_Message_defaultTextInfo = Window_Message.prototype.defaultTextInfo;
Window_Message.prototype.defaultTextInfo = function() {
	CTE.Window_Message_defaultTextInfo.apply(this, arguments);
	
	if (!ConfigManager.isBaseLanguage()) {
		var speedSetting = CTE.getString("MessageSpeed", "1");
		if (speedSetting !== "" && speedSetting !== "1") {
			speedSetting = speedSetting.replace(/x/gi, "");
		}
		var factor = Number(speedSetting);
		this._speed = Math.round(this._speed * factor);
	}
};

// Same as above.
CTE.Window_Message_clearFlags = Window_Message.prototype.clearFlags;
Window_Message.prototype.clearFlags = function() {
    CTE.Window_Message_clearFlags.apply(this, arguments);
	
	if (!ConfigManager.isBaseLanguage()) {
		var speedSetting = CTE.getString("MessageSpeed", "1");
		if (speedSetting !== "" && speedSetting !== "1") {
			speedSetting = speedSetting.replace(/x/gi, "");
		}
		var factor = Number(speedSetting);
		this._speed = Math.round(this._speed * factor);
	}
};

// Extend choice text localization to include choices chained together as well.
CTE.Game_Interpreter_addChoices = Game_Interpreter.prototype.addChoices;
Game_Interpreter.prototype.addChoices = function(params, i, data, d) {
	if (!ConfigManager.isBaseLanguage()) {
		var position = CTE.getPositionData(this);
		var file = position["file"];
		if (file === "") return CTE.Game_Interpreter_addChoices.apply(this, arguments); // No context for command
		var commandGroupId = CTE.getCommandGroupId(position, "choice");
		var commandNum = CTE.getCommandNum(this._list, i);
		
		var parameters = [...params];
		if (CTE.commandDataExists(file, commandGroupId, commandNum)) {
			var commandData = CTE.getCommandData(file, commandGroupId, commandNum);
			if (commandData === null) { // Data exists, but no valid condition met
				CTE.warn("No valid condition found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
			}
			else {
				var choices = commandData.split("\n");
				if (choices.length == parameters[0].length) {
					parameters[0] = choices;
				}
				else {
					CTE.warn("Choice counts do not match in " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
				}
			}
		}
		else {
			CTE.warn("No translation data found for " + CTE.getPositionString(position) + ", Choice " + (commandNum + 1) + ".", 2);
		}
		
		return CTE.Game_Interpreter_addChoices.call(this, parameters, i, data, d);
	}
	return CTE.Game_Interpreter_addChoices.apply(this, arguments);
};


/* Name Entry Window */

// Change window width depending on language.
Window_NameEdit.prototype.windowWidth = function() {
	return CTE.getNumber("NameEntryWidth", 480);
};

// Rearrange a few characters and add backspace before Page.
Window_NameInput.LATIN1 =
	[ "A","B","C","D","E",  "a","b","c","d","e",
	"F","G","H","I","J",  "f","g","h","i","j",
	"K","L","M","N","O",  "k","l","m","n","o",
	"P","Q","R","S","T",  "p","q","r","s","t",
	"U","V","W","X","Y",  "u","v","w","x","y",
	"Z","[","]","^","_",  "z","{","}","(",")",
	"0","1","2","3","4",  "!","#","$","%","&",
	"5","6","7","8","9",  ":",";","+","-","~",
	"/","=","@",",",".",  "*"," ","Back","Page","OK" ];
Window_NameInput.LATIN2 =
	[ "Á","É","Í","Ó","Ú",  "á","é","í","ó","ú",
	"À","È","Ì","Ò","Ù",  "à","è","ì","ò","ù",
	"Â","Ê","Î","Ô","Û",  "â","ê","î","ô","û",
	"Ä","Ë","Ï","Ö","Ü",  "ä","ë","ï","ö","ü",
	"Ā","Ē","Ī","Ō","Ū",  "ā","ē","ī","ō","ū",
	"Ã","Å","Æ","Ç","Ð",  "ã","å","æ","ç","ð",
	"Ñ","Õ","Ø","Š","Ŵ",  "ñ","õ","ø","š","ŵ",
	"Ý","Ŷ","Ÿ","Ž","Þ",  "ý","ÿ","ŷ","ž","þ",
	"Ĳ","Œ","ĳ","œ","ß",  "«","»","Back","Page","OK" ];
Window_NameInput.RUSSIA =
	[ "А","Б","В","Г","Д",  "а","б","в","г","д",
	"Е","Ё","Ж","З","И",  "е","ё","ж","з","и",
	"Й","К","Л","М","Н",  "й","к","л","м","н",
	"О","П","Р","С","Т",  "о","п","р","с","т",
	"У","Ф","Х","Ц","Ч",  "у","ф","х","ц","ч",
	"Ш","Щ","Ъ","Ы","Ь",  "ш","щ","ъ","ы","ь",
	"Э","Ю","Я","^","_",  "э","ю","я","%","&",
	"0","1","2","3","4",  "(",")","*","+","-",
	"5","6","7","8","9",  ":",";"," ","←","OK" ];
Window_NameInput.JAPAN1 =
	[ "あ","い","う","え","お",  "が","ぎ","ぐ","げ","ご",
	"か","き","く","け","こ",  "ざ","じ","ず","ぜ","ぞ",
	"さ","し","す","せ","そ",  "だ","ぢ","づ","で","ど",
	"た","ち","つ","て","と",  "ば","び","ぶ","べ","ぼ",
	"な","に","ぬ","ね","の",  "ぱ","ぴ","ぷ","ぺ","ぽ",
	"は","ひ","ふ","へ","ほ",  "ぁ","ぃ","ぅ","ぇ","ぉ",
	"ま","み","む","め","も",  "っ","ゃ","ゅ","ょ","ゎ",
	"や","ゆ","よ","わ","ん",  "ー","～","・","＝","☆",
	"ら","り","る","れ","ろ",  "ゔ","を","削除","カナ","決定" ];
Window_NameInput.JAPAN2 =
	[ "ア","イ","ウ","エ","オ",  "ガ","ギ","グ","ゲ","ゴ",
	"カ","キ","ク","ケ","コ",  "ザ","ジ","ズ","ゼ","ゾ",
	"サ","シ","ス","セ","ソ",  "ダ","ヂ","ヅ","デ","ド",
	"タ","チ","ツ","テ","ト",  "バ","ビ","ブ","ベ","ボ",
	"ナ","ニ","ヌ","ネ","ノ",  "パ","ピ","プ","ペ","ポ",
	"ハ","ヒ","フ","ヘ","ホ",  "ァ","ィ","ゥ","ェ","ォ",
	"マ","ミ","ム","メ","モ",  "ッ","ャ","ュ","ョ","ヮ",
	"ヤ","ユ","ヨ","ワ","ン",  "ー","～","・","＝","☆",
	"ラ","リ","ル","レ","ロ",  "ヴ","ヲ","削除","英数","決定" ];
Window_NameInput.JAPAN3 =
	[ "Ａ","Ｂ","Ｃ","Ｄ","Ｅ",  "ａ","ｂ","ｃ","ｄ","ｅ",
	"Ｆ","Ｇ","Ｈ","Ｉ","Ｊ",  "ｆ","ｇ","ｈ","ｉ","ｊ",
	"Ｋ","Ｌ","Ｍ","Ｎ","Ｏ",  "ｋ","ｌ","ｍ","ｎ","ｏ",
	"Ｐ","Ｑ","Ｒ","Ｓ","Ｔ",  "ｐ","ｑ","ｒ","ｓ","ｔ",
	"Ｕ","Ｖ","Ｗ","Ｘ","Ｙ",  "ｕ","ｖ","ｗ","ｘ","ｙ",
	"Ｚ","［","］","＾","＿",  "ｚ","｛","｝","｜","～",
	"０","１","２","３","４",  "！","＃","＄","％","＆",
	"５","６","７","８","９",  "（","）","＊","＋","－",
	"／","＝","＠","＜","＞",  "：","；","削除","かな","決定" ];

// Return tables based on language setting.
Window_NameInput.prototype.table = function() {
	var setting = CTE.getString("NameEntryTables", "jp");
	
	if (setting.toLowerCase() === "jp") {
		return [Window_NameInput.JAPAN1,
			Window_NameInput.JAPAN2,
			Window_NameInput.JAPAN3];
    }
	else if (setting.toLowerCase() === "ru") {
        return [Window_NameInput.RUSSIA];
    }
	else if (setting.toLowerCase() === "en") {
		return [Window_NameInput.LATIN1,
			Window_NameInput.LATIN2];
	}
	else if (setting.startsWith("[")) { // Possible custom array
		try {
			var tables = JSON.parse(setting);
			if (!Array.isArray(tables[0])) tables = [tables]; // Single page, so put it as only entry in page array
			for (var i = 0; i < tables.length; i++) {
				if (tables[i].length != 90) {
					throw new Error("Page " + (i + 1) + " is " + tables[i].length + " " + (tables[i].length == 1? "entry" : "entries") + " long; should be exactly 90.");
				}
			}
			return tables;
		}
		catch (e) {
			CTE.warn("Error parsing JSON for name entry tables. " + e.message);
		}
	}
	
	// Latin is probably best default for if something is specified for NameEntryTables but it's not valid
	return [Window_NameInput.LATIN1,
			Window_NameInput.LATIN2];
};

// Lower threshold for special elements (unless page switch is also absent) to not count backspace as a character.
Window_NameInput.prototype.character = function() {
	var hasPageChange = this.table().length > 1;
	return this._index < (hasPageChange? 87 : 88)? this.table()[this._page][this._index] : '';
};

// Added check to not have page change if there's only one page.
Window_NameInput.prototype.isPageChange = function() {
	var hasPageChange = this.table().length > 1;
	return this._index === 88 && hasPageChange;
};

// New function to check for index of backspace selection.
Window_NameInput.prototype.isBackspace = function() {
	var hasPageChange = this.table().length > 1;
	return this._index == (hasPageChange? 87 : 88);
};

// Shift positions of characters by X offset to center them in new width if necessary.
Window_NameInput.prototype.itemRect = function(index) {
	var boxWidth = CTE.getNumber("NameEntryWidth", 480);
	var xOffset = (boxWidth - 480) / 2; // Offset accounts for extra width by recentering
	
	return {
		x: xOffset + (index % 10 * 42 + Math.floor(index % 10 / 5) * 24),
		y: Math.floor(index / 10) * this.lineHeight(),
		width: 42,
		height: this.lineHeight()
	};
};

// Add processing for backspace selection.
Window_NameInput.prototype.processOk = function() {
	if (this.character()) {
		this.onNameAdd();
	} else if (this.isBackspace()) {
		this.processBack();
	} else if (this.isPageChange()) {
		SoundManager.playOk();
		this.cursorPagedown();
	} else if (this.isOk()) {
		this.onNameOk();
	}
};

// Return whether Midori's name sufficiently matches the corresponding name.
CTE.midoriNameCheck = function(name) {
	var localizedName = CTE.getString("Midori_" + name, name.replace("_Other", "")).toLowerCase().replace(/ /g, "").replace(/-/g, "").trim();
	var nameLower = $gameActors.actor(4).name().toLowerCase().replace(/ /g, "").replace(/-/g, "").replace(/!/g, "").replace(/\//g, "").trim();
	return nameLower === localizedName;
};


/* Debug Functions */

// Debug function that runs export process while checking that all NameBoxSets have translations (via commandExportHandlerPrefix).
CTE.checkNameCompleteness = function() {
	CTE.exportingBase = true;
	CTE.checkingNameCompleteness = true;
	CTE.beginExportProcess();
};