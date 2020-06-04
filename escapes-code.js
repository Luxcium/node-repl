/** @format */

exports.ICO_NPM = '\ue71e';
exports.ICO_NPM_FOLDER = '\ue5fa';
exports.ICO_GNU = '\ue779';
exports.ICO_APPLE = '\uf179';
exports.ICO_TERM = '\uf120';
exports.ICO_TS = '\ufbe4';
exports.ICO_JS = '\uf81d';
exports.ICO_NODE = '\ue718';
exports.ICO_COG = '\uf013';
exports.ICO_COGS = '\uf085';
// exports.ICO_COGS = '\uf085'
exports.ICO_WARN = '\uf071';

exports.LReset = '\u001b[0m';

/**  Bold: \u001b[1m */
exports.LBold = '\u001b[1m';
/**  Underline: \u001b[4m */
exports.LUnderline = '\u001b[4m';
/**  Reversed: \u001b[7m */
exports.LReverse = '\u001b[7m';

/**  Black: \u001b[30m */
exports.colorFgBlack = '\u001b[30m';
/**  Red: \u001b[31m */
exports.colorFgRed = '\u001b[31m';
/**  Green: \u001b[32m */
exports.colorFgGreen = '\u001b[32m';
/**  Yellow: \u001b[33m */
exports.colorFgYellow = '\u001b[33m';
/**  Blue: \u001b[34m */
exports.colorFgBlue = '\u001b[34m';
/**  Magenta: \u001b[35m */
exports.colorFgMagenta = '\u001b[35m';
/**  Cyan: \u001b[36m */
exports.colorFgCyan = '\u001b[36m';
/**  White: \u001b[37m */
exports.colorFgWhite = '\u001b[37m';

/**  Bright Black: \u001b[30;1m */
exports.cFgBrtBlack = '\u001b[30;1m';
/**  Bright Red: \u001b[31;1m */
exports.cFgBrtRed = '\u001b[31;1m';
/**  Bright Green: \u001b[32;1m */
exports.cFgBrtGreen = '\u001b[32;1m';
/**  Bright Yellow: \u001b[33;1m */
exports.cFgBrtYellow = '\u001b[33;1m';
/**  Bright Blue: \u001b[34;1m */
exports.cFgBrtBlue = '\u001b[34;1m';
/**  Bright Magenta: \u001b[35;1m */
exports.cFgBrtMagenta = '\u001b[35;1m';
/**  Bright Cyan: \u001b[36;1m */
exports.cFgBrtCyan = '\u001b[36;1m';
/**  Bright White: \u001b[37;1m */
exports.cFgBrtWhite = '\u001b[37;1m';

/**  Background Black: \u001b[40m */
exports.cBgBlack = '\u001b[40m';
/**  Background Red: \u001b[41m */
exports.cBgRed = '\u001b[41m';
/**  Background Green: \u001b[42m */
exports.cBgGreen = '\u001b[42m';
/**  Background Yellow: \u001b[43m */
exports.cBgYellow = '\u001b[43m';
/**  Background Blue: \u001b[44m */
exports.cBgBlue = '\u001b[44m';
/**  Background Magenta: \u001b[45m */
exports.cBgMagenta = '\u001b[45m';
/**  Background Cyan: \u001b[46m */
exports.cBgCyan = '\u001b[46m';
/**  Background White: \u001b[47m */
exports.cBgWhite = '\u001b[47m';

/**  Background Bright Black: \u001b[40;1m */
exports.cBgBrtBlack = '\u001b[40;1m';
/**  Background Bright Red: \u001b[41;1m */
exports.cBgBrtRed = '\u001b[41;1m';
/**  Background Bright Green: \u001b[42;1m */
exports.cBgBrtGreen = '\u001b[42;1m';
/**  Background Bright Yellow: \u001b[43;1m */
exports.cBgBrtYellow = '\u001b[43;1m';
/**  Background Bright Blue: \u001b[44;1m */
exports.cBgBrtBlue = '\u001b[44;1m';
/**  Background Bright Magenta: \u001b[45;1m */
exports.cBgBrtMagenta = '\u001b[45;1m';
/**  Background Bright Cyan: \u001b[46;1m */
exports.cBgBrtCyan = '\u001b[46;1m';
/**  Background Bright White: \u001b[47;1m */
exports.cBgBrtWhite = '\u001b[47;1m';

/**  Up: \u001b[{n}A moves cursor up by n */
exports.LUP_A = '\u001b[';
/**  Down: \u001b[{n}B moves cursor down by n */
exports.LDOWN_B = '\u001b[';
/**  Right: \u001b[{n}C moves cursor right by n */
exports.LRIGHT_C = '\u001b[';
/**  Left: \u001b[{n}D moves cursor left by n */
exports.LLEFT_D = '\u001b[';

/**  Next Line: \u001b[{n}E moves cursor to beginning of line n lines down */
exports.LNX_E = '\u001b[';
/**  Prev Line: \u001b[{n}F moves cursor to beginning of line n lines down */
exports.LPV_F = '\u001b[';
/**  Set Column: \u001b[{n}G moves cursor to column n */
exports.LCOL_G = '\u001b[';
/**  Set Position: \u001b[{n};{m}H moves cursor to row n column m */
exports.LPOSRC_H = '\u001b[';

/**  Clear Screen: \u001b[{n}J n=0 clears from cursor until end of screen, */
exports.LCS0 = '\u001b[0J';
/**  Clear Screen: \u001b[{n}J n=1 clears from cursor to beginning of screen */
exports.LCS1 = '\u001b[1J';
/**  Clear Screen: \u001b[{n}J n=2 clears entire screen */
exports.LCS2 = '\u001b[2J';

/**  Clear Line: \u001b[{n}K n=0 clears from cursor to end of line */
exports.LCL0 = '\u001b[0K';
/**  Clear Line: \u001b[{n}K n=1 clears from cursor to start of line */
exports.LCL1 = '\u001b[1K';
/**  Clear Line: \u001b[{n}K n=2 clears entire line */
exports.LCL2 = '\u001b[2K';

/**  Save Position: \u001b[{s} saves the current cursor position */
exports.SPS = '\u001b[s';
/**  Save Position: \u001b[{u} restores the cursor to the last saved position */
exports.RPS = '\u001b[u';

// exports.bold = `${LBOLD}`;
// exports.normal = `${LReset}`;
exports.PZTX = '\u001b[1;0H';
exports.PZT = '\u001b[2;0H';
exports.PZTED = '\u001b[0;50H';
exports.CLRZ = '\u001b[2J';
// exports.DW = `${LDOWN_B}1B`;
// exports.UPW = `${LUP_A}1A`;
exports.CLRLN = '\u001b[2K \u001b[0G';
exports.RWT = '\u001b[54C';
exports.RWTT = '\u001b[10C';
exports.BKBG = '\u001b[40m';
exports.BKFG = '\u001b[30m';
exports.YKBG = '\u001b[43m';
exports.YKFG = '\u001b[33m';

// exports.YBCOLR = `${BKBG}${YKFG}`;
// exports.BBCOLR = `${BKFG}${YKBG}`;
// exports.BKBK = `${BKBG}${BKFG}`;
// exports.RVSD = '\u001b[7m';

// exports.ELCLR = `${BBCOLR} ${TERM_ICO} ${YBCOLR}${normal}`;
// exports.SLCLR = `${BBCOLR} ${TERM_ICO} ${YBCOLR}${normal}`;
// exports.LDSCLR = `${BBCOLR} ${COGS_ICO} ${YBCOLR}${normal}`;
// exports.LDLCLR = `${BBCOLR} ${COG_ICO} ${YBCOLR}${normal}`;

// exports.BYL9K_GNU = `${BBCOLR} ${GNU_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_APPLE = `${BBCOLR} ${APPLE_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_TERM = `${BBCOLR} ${TERM_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_TS = `${BBCOLR} ${TS_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_JS = `${BBCOLR} ${JS_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_NODE = `${BBCOLR} ${NODE_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_COG = `${BBCOLR} ${COG_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_COGS = `${BBCOLR} ${COGS_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_COGS = `${BBCOLR} ${COGS_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_COGS = `${BNY}${FNK} ${COGS_ICO} ${BNK}${FNY}${normal}`;
// exports.BRL9K_COGS = `${BNR}${FNK} ${COGS_ICO} ${BNK}${FNR}${normal}`;
// exports.BGL9K_COGS = `${BNG}${FNK} ${COGS_ICO} ${BNK}${FNG}${normal}`;

// exports.LDNCLR = `${BBCOLR} ${NPM_FOLDER_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_NPM = `${BBCOLR} ${NPM_ICO} ${YBCOLR}${normal}`;
// exports.BYL9K_NPM_FOLDER = `${BBCOLR} ${NPM_FOLDER_ICO} ${YBCOLR}${normal}`;
