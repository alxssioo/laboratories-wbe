import SCRIPTS from "./scripts.js";   // adjust the path to your data file

export function scriptOfSample(ch, scripts) {
    const code = ch.codePointAt(0)
    const script = scripts.find(s =>
        s.ranges.some(([from, to]) => code >= from && code < to))
    return script ? script.name : "unknown"
}

export function scriptsInString(strg, scripts) {
    const counts = {}
    for (const char of strg) {
        const name = scriptOfSample(char, scripts)
        counts[name] = (counts[name] || 0) + 1
    }
    return counts
}

export function numberOfCodes(script) {
    return script.ranges.reduce((total, [from, to]) => total + (to - from), 0)
}

export function oldAndLiving(scripts) {
    return scripts.filter(s => s.year < 0 && s.living).map(s => s.name)
}
