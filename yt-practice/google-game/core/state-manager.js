import { GAME_STATUSES } from './constants.js'

const _state = {
	gameStatus: GAME_STATUSES.SETTINGS,
	settings: {
		googleJumpInterval: 1000,
		gridSize: {
			rowsCount: 2,
			columnsCount: 2,
		},
		pointsToLose: 5,
		pointsToWin: 5,
	},
	position: {
		google: {
			x: 0,
			y: 0,
		},
		players: [
			{
				x: 0,
				y: 0,
			},
			{ x: 0, y: 0 },
		],
	},
	points: {
		google: 0,
		players: [0, 0],
	},
}
// Observer
let _observer = []
export function subscribe(observer) {
	_observer.push(observer)
}

export function unSubscribe(observer) {
	_observer = _observer.filter(o => o !== observer)
}

function _notifyObserver() {
	_observer.forEach(o => {
		try {
			o()
		} catch (error) {
			console.log(error)
		}
	})
}

// Start
let googleJumpInterval
export async function start() {
	if (_state.gameStatus !== GAME_STATUSES.SETTINGS) {
		throw new Error('Incorrect game status to start')
	}
	_state.points.google = 0
	_state.points.players = [0, 0]

	_state.position.players[0] = {
		x: 0,
		y: _state.settings.gridSize.rowsCount - 1,
	}
	_state.position.players[1] = {
		x: _state.settings.gridSize.columnsCount - 1,
		y: _state.settings.gridSize.rowsCount - 1,
	}

	_state.gameStatus = GAME_STATUSES.IN_PROGRESS
	_jumpGoogleToNewPosition()

	googleJumpInterval = setInterval(() => {
		_jumpGoogleToNewPosition()
		_state.points.google++

		if (_state.points.google == _state.settings.pointsToLose) {
			_state.gameStatus = GAME_STATUSES.LOSE
			console.log('ntf interval')
			clearInterval(googleJumpInterval)
		}
		_notifyObserver()
	}, _state.settings.googleJumpInterval)
	console.log('ntf start')
	_notifyObserver()
}

export async function playAgain() {
	_state.gameStatus = GAME_STATUSES.SETTINGS
	_notifyObserver()
}

function _jumpGoogleToNewPosition() {
	const newPosition = { ..._state.position.google }

	do {
		newPosition.x = _generateNewNumber(0, _state.settings.gridSize.columnsCount)
		newPosition.y = _generateNewNumber(0, _state.settings.gridSize.rowsCount)

		var validNewPositionGoogleRelativeOld =
			newPosition.x === _state.position.google.x &&
			newPosition.y === _state.position.google.y
		var validNewPositionGoogleRelativePlayer1 =
			newPosition.x === _state.position.players[0].x &&
			newPosition.y === _state.position.players[0].y
		var validNewPositionGoogleRelativePlayer2 =
			newPosition.x === _state.position.players[1].x &&
			newPosition.y === _state.position.players[1].y
	} while (
		validNewPositionGoogleRelativeOld ||
		validNewPositionGoogleRelativePlayer1 ||
		validNewPositionGoogleRelativePlayer2
	)
	{
		_state.position.google = newPosition
	}
}

//private function
function _generateNewNumber(first, last) {
	return Math.floor(Math.random() * last + first)
}

function _getIndexPlayer(playerNumber) {
	const playerIndex = playerNumber - 1
	if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
		throw new Error('Ошибка индекса игрока')
	}
	return playerIndex
}

//Interface
export async function getGooglePoints() {
	return _state.points.google
}
/**
 *
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} number of points
 */
export async function getPlayerPoints(playerNumber) {
	const playerIndex = _getIndexPlayer(playerNumber)
	return _state.points.players[playerIndex]
}

/**
 *
 * @param {} ()
 * @returns {object} get object sizeGrid with  rowsCount and columnsCount
 */
export async function getGridSize() {
	return { ..._state.settings.gridSize }
}

/**
 *
 * @returns object - google position
 */
export async function getGooglePositions() {
	return { ..._state.position.google }
}
/**
 *
 * @returns object - players position
 */
export async function getPlayersPositions(playerNumber) {
	const playerIndex = _getIndexPlayer(playerNumber)
	return { ..._state.position.players[playerIndex] }
}

export async function getGameStatus() {
	return _state.gameStatus
}
