/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */

type ID = number | string
const userId: ID = 555
const postId: ID = 'sdfsdf455df';

type Coords = [number, number]
const coords: Coords = [50.456, 45.4566]

type ReqStatus = 'request' | 'success' | 'error'
const requestStatus: ReqStatus = 'request'

type CellSize = 2 | 4 | 8
const cell: CellSize = 4

console.log(userId, postId, coords, requestStatus);
export {};
