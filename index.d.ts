declare module "bastools"
import { TimerOptions } from "timers"
export function Random(input?: Array<string>): Array<string>
/** 
 * @deprecated Use RandomString Function Instead
 */
export function RandomIDGen(length?: number): string
export function DupCheck(check?: string, whatToCheck?: string): Boolean
export function StringToNumber(Input?: string): Number
export function RemoveDup(Input?: Array<string>): Array<string>
export function firstLetterToUppercase(text: string): string
export function firstLetterOfEveryWordToUppercase(text: string): string
export function lastLetterToUppercase(text: string): string
export function lastLetterOfEveryWordToUppercase(text: string): string
export function ArrayToString(array: Array<string>, separator?: String): string
export function StringToArray(text: Array<string>, separator?: String): Array<string>
export function RandomString(length?: number): string
export function getFutureTime(howManyDays: number): string
export function wait(delay?: number, value?: void, options?: TimerOptions): Promise<void>
export function allLettersUppercaseExecptFirstLetterForEveryWord(text: string): string
export function allLettersUppercaseExecptFirstLetter(text: string): string
export function encryptBase64(text: string): string
export function decryptBase64(text: string): string
