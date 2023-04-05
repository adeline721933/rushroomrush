namespace SpriteKind {
    export const points = SpriteKind.create()
    export const Flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    CurrentLevel += 1
    startlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.bubbles)
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    Kermi = sprites.create(img`
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . 1 1 3 3 3 3 3 3 3 3 3 3 1 1 . 
        1 1 3 3 3 3 3 1 1 3 3 3 3 3 1 1 
        1 1 1 3 3 3 1 1 1 1 3 3 3 1 1 1 
        1 1 1 3 3 1 1 1 1 1 1 3 3 1 1 1 
        1 3 3 3 3 1 1 1 1 1 1 3 3 3 3 1 
        3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 
        3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . d d d d d d d d d . . . . 
        . . . d f 1 d d d f 1 d . . . . 
        . . . d f f d d d f f d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . 3 d d d d d d d 3 . . . . 
        . . . d d d d d d d d d . . . . 
        `, SpriteKind.Player)
    controller.player4.moveSprite(Kermi, 100, 0)
    Kermi.setPosition(16, 13)
    Kermi.ay = 350
    Kermi.setImage(img`
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . 1 1 3 3 3 3 3 3 3 3 3 3 1 1 . 
        1 1 3 3 3 3 3 1 1 3 3 3 3 3 1 1 
        1 1 1 3 3 3 1 1 1 1 3 3 3 1 1 1 
        1 1 1 3 3 1 1 1 1 1 1 3 3 1 1 1 
        1 3 3 3 3 1 1 1 1 1 1 3 3 3 3 1 
        3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 
        3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . d d d d d d d d d . . . . 
        . . . d f 1 d d d f 1 d . . . . 
        . . . d f f d d d f f d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . 3 d d d d d d d 3 . . . . 
        . . . d d d d d d d d d . . . . 
        `)
    if (Kermi.vx < 0) {
        Kermi.image.flipX()
    }
    Kermi.setStayInScreen(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Fermi.vy == 0) {
        Fermi.vy = -150
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Dermi.vy == 0) {
        Dermi.vy = -150
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    Lermi = sprites.create(img`
        . . . . . . a a a a . . . . . . 
        . . . . a a a a a a a a . . . . 
        . 1 1 a a a a a a a a a a 1 1 . 
        1 1 a a a a a 1 1 a a a a a 1 1 
        1 1 1 a a a 1 1 1 1 a a a 1 1 1 
        1 1 1 a a 1 1 1 1 1 1 a a 1 1 1 
        1 a a a a 1 1 1 1 1 1 a a a a 1 
        a a a a a a 1 1 1 1 a a a a a a 
        a a a a a a a 1 1 a a a a a a a 
        a a a a a a a a a a a a a a a a 
        . . . d d d d d d d d d . . . . 
        . . . d f 1 d d d f 1 d . . . . 
        . . . d f f d d d f f d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . 3 d d d d d d d 3 . . . . 
        . . . d d d d d d d d d . . . . 
        `, SpriteKind.Player)
    Lermi.setPosition(14, 13)
    controller.player3.moveSprite(Lermi, 100, 0)
    Lermi.ay = 350
    Lermi.setStayInScreen(true)
    Lermi.setImage(img`
        . . . . . . a a a a . . . . . . 
        . . . . a a a a a a a a . . . . 
        . 1 1 a a a a a a a a a a 1 1 . 
        1 1 a a a a a 1 1 a a a a a 1 1 
        1 1 1 a a a 1 1 1 1 a a a 1 1 1 
        1 1 1 a a 1 1 1 1 1 1 a a 1 1 1 
        1 a a a a 1 1 1 1 1 1 a a a a 1 
        a a a a a a 1 1 1 1 a a a a a a 
        a a a a a a a 1 1 a a a a a a a 
        a a a a a a a a a a a a a a a a 
        . . . d d d d d d d d d . . . . 
        . . . d f 1 d d d f 1 d . . . . 
        . . . d f f d d d f f d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . 3 d d d d d d d 3 . . . . 
        . . . d d d d d d d d d . . . . 
        `)
    if (Lermi.vx < 0) {
        Lermi.image.flipX()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.points, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function startlevel () {
    Fermi = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 1 2 2 2 2 1 1 2 2 2 2 1 . . 
        . 1 1 2 2 2 1 1 1 1 2 2 2 1 1 . 
        1 1 2 2 2 1 1 1 1 1 1 2 2 2 1 1 
        1 1 2 2 2 1 1 1 1 1 1 2 2 2 1 1 
        1 1 2 2 2 2 1 1 1 1 2 2 2 2 1 1 
        1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . d d d d d d d d d d . . . 
        . . . d d f 1 d d f 1 d d . . . 
        . . . d d f f d d f f d d . . . 
        . . . d 3 d d d d d d 3 d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        `, SpriteKind.Player)
    if (CurrentLevel == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        scene.setBackgroundImage(img`
            ccccccccbcccccccccccccfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddcddcccccccccccccc
            cccccccccccccccccccccfddddddddd11111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccdccccccccccccccc
            cccccccccccccccccccccbdddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcddccccccccccccccdcc
            cccccccccccccccccccccbdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccdccccccccc
            cccccccccccccccccccccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccdcccccccc
            ccccccccccccccccccccddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccc
            ccccccccccccccccccbdddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdccccccccccccccc
            ccccccccccccccccccdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccc
            ccccccccccccccccccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccc
            ccccccccccccccccdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccc
            cccccccccccccccbddd11111111111111111111cccc1111111111ccc11555555511ccc11dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccc
            cccccccccccccbddddd11111111111111111111ccccc111111111ccc15245524551ccc111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccc
            ccccccccccccbdddd111111111111111111111cccccc111111111cc55425ff524455cc1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbccccccccccccccc
            ccccccccccccddddd111111111111111111111ccccccc11111111ccc15425542551ccc1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccc
            ccccccccccfddddd1111111111111111111111ccccccc11111111ccc11555555511ccc1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccc
            cccccccccfcdddd1111111d11111d111111111cccccccc1111111ccc11111111111ccc11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcccccccccccc
            cccccccccfbddd11111111111111111111111ccccccccc1111111ccc11111111111ccc1111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccdcccccccc
            ccccccccdcdddd11111111111111111111111cccccccccc111111cccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccc
            cccccccbdcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbccccccccccccc
            cccccccdddddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbccccccccccccc
            cccccccddddd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbccccccccccccc
            cccccccbdddd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccc
            cccccccccdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccdccccccccc
            ccccccccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccc
            ccccccbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddeedddddddddddddddccdccccccccc
            ccccccddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddcccccccccccc
            cccccbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddcccccccccccc
            cccccdddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddd7cccccccccccc
            cccccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddd77cccccccccccc
            ccccbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddccccccccccccc
            ccccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddeddddddeedddddddbccccccccccccc
            cccbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111ee1111ddddddddddddddddddddddddddddddddddddddddddeeddeedddddeedddddddbccccccccccccc
            cccbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111e1111dddddddddddddddddddddddddddddddddddddddddddeeddeddddddeddddddddccccccccccccc
            ccbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111e1111dddddddddddddddddddddddddddddddddddddddddddeeedeedddddededdddeeccccccccccccc
            ccddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111e111ddddddddddddddddddddddddddedddddddddddddddddddeddeeddddeeeddeeecccccccccccccc
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddeedddddddddddddddddddeddeddddeeddeeeeeccccccccccccc
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111e111edddddddddddddddddddddddddeedddddddddddddddddddeeeeddddeddeeeeccccccccccccccc
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111e111eddd1dddddddddddddddddddddedddedddddddddddddddddeeeddddeeeeeeeccccccccccccccc
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111e111eddd1dddddddddddddddddddddeddeedddddddddddddddddeeedddeeeeeeeeccccccccccccccc
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111e1dee1ddddddddddddddeeeeddddddeddedddddddddddddddddddeedddeeeeeeecccccccccccccccc
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111e1deedddddddddddddddeddeeeddddededdddddddddddddddddddeeddeeeeeeeecccccccccccccccc
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111e1de1dddddddddddddddedddeeddddeedddddddddddddddddddddeedeeeeeeeeccccccccccccccccc
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111e1de1ddd1ddddddddddeedddeeeddeedddddddddddeeddddddddeeeeeeeeeeecbbccccccccccccccc
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111eeeddddd1dddddddddeedddddeedeeddddddddddddedddddddddeeeeeeeeeeccbcccccccccccccccc
            ddddddddd1d11e11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111eeedddddddddddddddeedddddeeeeeddddddddddddedddddddddeeeeeeeeeeeeccccccccccccccccc
            ddddddddd1d11e11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111eeedddddddddddddddddddddddeeeeddddddddddddeedddddeddeeeeeeeeeeeccccccccccccccccccc
            dddddddddddddeee1ee111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111eee1ddddddddddddddddddddddeeeeddddddddddddeedddddeddeeeeeeeeeeeecccccccccccccccccc
            dddddddddddddeee1e1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111ee1ee11dddeddddddddddddddddddeeeeddddddddddddeedddddedeeeeeeeeeeeeccccccccccccccccccc
            ddddddddddddddee1e11eeccccccccccccccccccccccccccbcccccccccccccccccb1d111111eeeeedddddeedddddddddddddddddeeeeddddddddddddeedddddedeeeeeeeeeeeeccccccccccccccccccc
            ddddddddddddddee1e11eeccccccccccccccccccccccccccccccccccccccccccccd1111b1111eee11ddddeedddddddddddddddddeeeeddddddddddddeedddddeeeeeeeeeeeeeeccccccccccccccccccc
            ddddddddddddddde1e1de1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111eee11dddddeeddddddddddddddddeeeeeddddddddddddedddddeeeeeeeeeeeeeeecccccccccccccccccc
            ddddddddddddddddee1eedccccccccccccccccccccccccccccccccccccccccccccb1111d1111eeeddddddddeddddddddddddddddeeeeeddddddddddddeedddeeeeeeeeeeeeeeeccccccccccccccccccc
            ddddddddddddddddee1eedccccccccccccccccccccccccccccccccccccccccccccb1e11d1111eeeddddddddeedeeddddddddddddeeeeeddddddddddddeeddeeeeeeeeeeeeeeecccccccccccccccccccc
            ddddddddddddddddee1e11ccccccccccccccccccccccccccccccccccccccccccccceee111111eeeddddddddeededddddddeeddddeeeeedddddddddddeeeeeeeeeeeeeeeeeeeccccccccccccccccccccc
            ddddddddddddddddedded1cccccccccccccccccccccccccccccccccccccccccccceee111d111eeee1dddddddeeedddddddeeddddeeeeeddddddddedeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccc
            ddddddddddddddddeee111cccccccccccccccccccccccccccccccccccccccccccc1ee1111111eeeeddddddddeeedddddddedddddeeeeeddddedddedeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccc
            ddddddddddddddddeed111ccccccccccccccccccccccccccccccccccccccccccccd1eee11111eeeedddddddddeeddddddeedddddeeeeedddeedddeeeeeeeedeeeeeeeeeeeecccccccccccccccccccccc
            ddddddddddddddddeedd1dcccccccccccccccccccccccccccccccccccccccccccc111ee11111eeeedddd1ddddeeddddddeedddddeeeeedddeeededddeaaaaddddaeeeeeeeecccccccccccccccccccccc
            dddddddbbdddddeeeeddddcccccccccccccccccccccccccccccccccccccccccccc111ee1111eeeeedddddddddeeedddddeedddddeeeeeddededbdddddddddddddaaaaaaaaaaccccccccccccccccccccc
            dbddddddddeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccbcccccb11ee1111eeeeedddddddddeeedddddeedddddeeeeeeeddddddddddddddbdddddddddaaacccccccccccccccccccccc
            ddeddeddeeeeeeeeeeeeeecccccccccccccccccccccccccccccbccccccccccccccd11e11111eeeeeeddddddddeeedddddeeddddeeeeeeaadddddddddddddddddddddddddcccccccccccccccccccccccc
            deeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccc111ee111eeeeeeeedddddddeeeeddddeedddeeeeeeaaddddddddddddddddddddddddccccdccccccccccccccccccccc
            eeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccee1ee1eeeeeeeeeeeedddddeeeeddddeeddeeeeddeedddddddddddddddddddbddddbcccddccccccccccccccccccccc
            deeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddbdddddddddddddbccccccccccccccccccccccccccc
            eeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeedeeededdddedddddddddddddddddddddddddddcccccccccccccccccccccccccccc
            eeeeeeeeddeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeddddddddddbddddddddddddddddddddddbdddddccccccdccccccccccccccccccccccc
            eeeeeeedddddeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeddddbddddddddbdddddddddddddddddddddddddddcddccccdcccccccccccccccccccccc
            eeeeddddddddddddddeeeeccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeadaaaaaadddddddddddddddddddddddddddddddddddddddddcdccdccccccccccccccccccccccccc
            eeeddddddddddddeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccceeeaeededddddddbddddbddddddddddddddddddddddddddddddddddddddccccdccccccccccccccccccccccccc
            eedddddddddddddeeeeeeecccccccccccccccccccccccccccccccccccccccccccccbccceeeeeddedddddddddddddddddddddddddddddddddddddddddddddddddbcdccdccdccccccccccccccccccccccc
            eddddddddddddddedeeeeccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcccccccccccccccccccccccccccccc
            ddddddddddddddddedeeecccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddccdccccccccccccccccccccccccccccc
            dbdbddddddddbdbdeeeeccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccddc
            ddddddbddddddddeeeeecccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccdcccccc
            ddddddddddddbdeeeeeeccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccdcccc
            dddddddddddddeeeeeecccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccc
            ddddddddddddeeeeeeecccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccc
            bdbddddddbddeeeeeeccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddccccccccccccccccccccccccccccccccccc
            dbddbdddddddeeeecccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccc
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccc
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddccccdccccccccccccccccccccccccccccccc
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddccccccccccccccccccccccccccccccccccccc
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddcddcccccccccccccccccccccccccccccccccc
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdccccccccccccccccccccccccccccccccccc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddccccccccccccccccccccccccccccccccccccc
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddccccccccccccccccccccccccccccccccccccc
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbb6bbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddccccccdcccccccccccccccccccccccccccccc
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbb666bb6666b6b6bbbbbbbb66b6bbbdbbbbddddddddddddddddddddddddddbbbbdddccccccccccccccccccccccccccccccccccccc
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbb6666666666666666666666666666b66b6bb66bdbbdddddddddddddddddddbbbbbbddbcccddcccccccccccccccccccccccccccccccc
            bbbdddddddbddddddddddddbddcddbdddddbbddb66b666bb6bbb6b66666666666666666666666666b6666666666666bbbdddddddddddddbbbbccccbbddcccccccccccccccccccccccccccccccccccccc
            666bddddddddddddddddddddddbdddddbbb6b66666b666666666666666666666666666666666666666666666666666b6666bdbdddbdbbb666bccbbbdddccccccdccccccccccccccccccccccccccccccc
            6666ddbddddddddddd6dddd66bbb66bb6bb666666b66666666666666666666666666666666666666666666666666666666666666666666666bcccbdddddccccccccccccccccccccccccccccccccccccc
            66bbbbbddddddddddb6ddd666666666b6666666666666666666666666666666666666666666666666666666666666666b66666666666666666bbddddddcccccccccccccccccccccccccccccccccccccc
            666666bcbbbdddddb666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bddddddddcccccccccccccccccccccccccccccccccccccc
            6666666b66bbbcb6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b6bdddddddddbcccccccccccccccccccccccccccccccccccccc
            66666666666b6b6666666666666666666666666666666666666666666666666666666666666666666666666666666b6666666666666666bbdddddbdddbcccccccccccccccccccccccccccccccccccccc
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b6bb6666666666666bbbbddddddddddbcccccccccccccccccccccccccccccccccccccc
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666bb66666bb6666666bbbbdddddddddddbcccccccccccccccccccccccccccccccccccccc
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666b6bddddddbb6bbbdb6666bbdddddbdddddddddcccdccdcccccccccccccccccccccccccccccccc
            6666666666666666666666666666666bb6666666666666666666666666666666666666666b666bbbbbbddddddddddddddbbbbbbdddddcdddddddddddbccccccccccccccccccccccccccccccccccccccc
            66666666666666666666666666666bbdd6b6666b666666666666666666666666666666bdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcccccccccccccccccccccccccccccccccccccccc
            666666666666666666666666666bbbcddbb6bbbbb66bb666666666666666666666bbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccc
            66666666666666666666666666bddddddbbbbddbbbbdb666666666666666666b6ddddddddddbddcbdccbddddddddddddddddddddddddddddddddcccdcccccccccccccccccccccccccccccccccccccccc
            666666666666666b66666666b6dddddddddbddddddbbbddbbbb666666666666dbdddddddddddbddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
            666666666666666666666c6666bddddddddddddddbcbcdddddbbb66666bbb6dddddddbdddddddddddddddddddddddddddddddddddddddddddcdccccccccccccccccccccccccccccccccccccccccccccc
            666666666666666666c66cccc66bdddddddddddddddbdbddddddcdb6bdddddddddddddddddddddddddddddddddddddddddddddddddddddddbccccdccccccccccccccccccdccccccccccccccccccccccc
            666666666666666cc6cc666ccccccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccddcccccccccccccccddcccccccccccccccccccccc
            6666666c66cccc6cccccc6dccccccfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccdccccccccccccccccccccccccccccccccccccccc
            66c666ccccccccccccccccccccccfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbcccccccccccdcccdccccdccccccccccccccccccccccccccccccddccccccccccccccccc
            6cc666ccccccccccccccccccccccccccdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddcccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccc
            cccccccccccccccccccccccccccccccccccdddddccccdbbbccdbddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccdcccccccdcbccccccddddddddddddddddddddddddddddccccccccccccccccccccccccdccccccccccccccdcdccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccddddfcccccccddddddddddddddddddddddddcdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccdcccccccccccccccfccccccccccbcccbdddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccdcdccccccddccccccccccccdcccdddcfdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccdccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccdccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccddcccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
            `)
        tiles.setCurrentTilemap(tilemap`level6`)
    }
    controller.moveSprite(Fermi, 100, 0)
    Fermi.ay = 350
    scene.cameraFollowSprite(Fermi)
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.points)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Flower)) {
        sprites.destroy(value)
    }
    info.setScore(0)
    for (let values of tiles.getTilesByType(assets.tile`myTile2`)) {
        Seeds = sprites.create(img`
            . . . . . . . f f . . . . . . . 
            . . . . . . e f f e . . . . . . 
            . . . . e e f e e f e e . . . . 
            . . . e f f e e e e f f e . . . 
            . . e f e f e e e e f e f e . . 
            . e e f e f e e e e f e f e e . 
            . e e f e f e e e e f e f e e . 
            . e e f e f e 5 1 e f e f e e . 
            . e e f e f e 1 5 e f e f e e . 
            . e e f e f e e e e f e f e e . 
            . e e f e f e e e e f e f e e . 
            . e e f e f e e e e f e f e e . 
            . e e f e f e e e e f e f e e . 
            . . e f e f e e e e f e f e . . 
            . . . e f e f e e f e f e . . . 
            . . . . e f e f f e f e . . . . 
            `, SpriteKind.points)
        animation.runImageAnimation(
        Seeds,
        [img`
            . . . . . . . f f . . . . . . . 
            . . . . . e e f f e e . . . . . 
            . . . e e e f f f f e e e . . . 
            . . e e f f e f f e f f e e . . 
            . . e e f e e f f e e f e e . . 
            . e e f e e f e e f e e f e e . 
            . e e f e e f e e f e e f e e . 
            . e e f e e f 1 1 f e e f e e . 
            . e e f e e f 1 5 f e e f e e . 
            . e e f e e f e e f e e f e e . 
            . e e f e e f e e f e e f e e . 
            . . e f e e f e e f e e f e . . 
            . . e f e e f e e f e e f e . . 
            . . . e f e f e e f e f e . . . 
            . . . e e f e f f e f e e . . . 
            . . . . . e f f f f e . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . e e e f f e e e . . . . 
            . . . e e f f e e f f e e . . . 
            . . . e e f e e e e f e e . . . 
            . . e e f e e f f e e f e e . . 
            . . e e f e e f f e e f e e . . 
            . . e e f e e f f e e f e e . . 
            . . e e f e e f f e e f e e . . 
            . . e e f e e f f e e f e e . . 
            . . e e f e e f f e e f e e . . 
            . . . e f e e f f e e f e . . . 
            . . . e f e e f f e e f e . . . 
            . . . . e f e f f e f e . . . . 
            . . . . e e f e e f e e . . . . 
            . . . . . . e f f e . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . e e f e e . . . . . 
            . . . . e e e f f e e e . . . . 
            . . . e e f f e f f f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . e e f e e f e e e f e e . . 
            . . e e f e e f e e e f e e . . 
            . . e e f e e f 1 e e f e e . . 
            . . e e f e e f 1 e e f e e . . 
            . . e e f e e f e e e f e e . . 
            . . e e f e e f e e e f e e . . 
            . . . e f e e f e e e f e . . . 
            . . . e f e e f e e e f e . . . 
            . . . . e f e f e e f e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . . . e f f e . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . e e f e e . . . . . 
            . . . . . e e e e f e e . . . . 
            . . . . e e f f e f e e . . . . 
            . . . . e e f e e e e e . . . . 
            . . . e e f e e f e f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . . e e f e e f e f e e . . . 
            . . . . e f e e f e f e . . . . 
            . . . . e f e e f e f e . . . . 
            . . . . . e f e f e e . . . . . 
            . . . . . e e f e f e . . . . . 
            . . . . . . . e f f . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . e f e e . . . . . . 
            . . . . . e e e f e e . . . . . 
            . . . . e e f e f e e . . . . . 
            . . . . e e f e e e e . . . . . 
            . . . e e f e f e f e e . . . . 
            . . . e e f e f e f e e . . . . 
            . . . e e f e f e f e e . . . . 
            . . . e e f e f e f e e . . . . 
            . . . e e f e f e f e e . . . . 
            . . . e e f e f e f e e . . . . 
            . . . . e f e f e f e . . . . . 
            . . . . e f e f e f e . . . . . 
            . . . . . e f f e e . . . . . . 
            . . . . . e e e f e . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . . e f e . . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e f e e e . . . . . 
            . . . . . e e f e e e . . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . e e f e f f e e . . . . 
            . . . . . e f e f f e . . . . . 
            . . . . . e f e f f e . . . . . 
            . . . . . . e f f e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . f . . . . . . . 
            `],
        1000,
        true
        )
        tiles.placeOnTile(Seeds, values)
        tiles.setTileAt(values, assets.tile`transparency16`)
    }
    for (let values of tiles.getTilesByType(assets.tile`myTile3`)) {
        Hamilton = sprites.create(img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 f 8 8 f 1 8 . . . . 
            . . . . 8 f 8 5 5 8 f 8 . . . . 
            . . . . 8 8 8 5 5 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . 8 8 1 1 8 8 1 1 8 8 . . . 
            . . 8 8 8 8 8 1 1 8 8 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Hamilton,
        [img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            8 . . . 8 1 f 8 8 f 1 8 . . . 8 
            6 8 . . 8 f 8 5 5 8 f 8 . . 8 6 
            8 6 8 . 8 8 8 5 5 8 8 8 . 8 6 8 
            6 8 6 8 . 8 8 8 8 8 8 . 8 6 8 6 
            6 6 8 6 8 8 8 8 8 8 8 8 6 8 6 6 
            8 6 6 8 8 8 8 8 8 8 8 8 8 6 6 8 
            8 8 8 8 8 8 1 1 1 1 8 8 8 8 8 8 
            6 6 6 8 8 8 1 8 8 1 8 8 8 6 6 6 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 6 8 8 8 8 8 8 8 8 8 8 6 8 8 
            6 6 8 . 8 8 8 8 8 8 8 8 . 8 6 6 
            6 8 . . . 8 8 8 8 8 8 . . . 8 6 
            8 . . . . 8 8 8 8 8 8 . . . . 8 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            `,img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            8 . . . 8 1 f 8 8 f 1 8 . . . 8 
            8 8 . . 8 f 8 5 5 8 f 8 . . 8 8 
            8 6 8 . 8 8 8 5 5 8 8 8 . 8 6 8 
            8 8 6 8 . 8 8 8 8 8 8 . 8 6 8 8 
            8 6 8 6 8 8 8 8 8 8 8 8 6 8 6 8 
            8 6 6 8 6 8 8 8 8 8 8 6 8 6 6 8 
            8 8 6 6 8 8 1 1 1 1 8 8 6 6 8 8 
            8 8 8 8 8 8 1 8 8 1 8 8 8 8 8 8 
            8 6 6 6 8 8 8 8 8 8 8 8 6 6 6 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 6 8 8 8 8 8 8 8 8 6 8 8 8 
            8 6 6 8 . 8 8 8 8 8 8 . 8 6 6 8 
            8 6 8 . . 8 8 8 8 8 8 . . 8 6 8 
            8 8 . . . . 8 8 8 8 . . . . 8 8 
            8 . . . . . . 8 8 . . . . . . 8 
            `,img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . 8 . . 8 1 f 8 8 f 1 8 . . 8 . 
            . 8 8 . 8 f 8 5 5 8 f 8 . 8 8 . 
            8 8 6 8 8 8 8 5 5 8 8 8 8 6 8 8 
            8 8 8 6 8 8 8 8 8 8 8 8 6 8 8 8 
            8 8 6 8 6 8 8 8 8 8 8 6 8 6 8 8 
            8 8 6 6 8 8 8 8 8 8 6 8 6 6 8 8 
            8 8 8 6 6 8 1 1 1 1 8 6 6 8 8 8 
            8 8 8 8 8 8 1 8 8 1 8 8 8 8 8 8 
            8 8 6 6 6 8 8 8 8 8 8 6 6 6 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 6 8 8 8 8 8 8 6 8 8 8 8 
            8 8 6 6 8 8 8 8 8 8 8 8 6 6 8 8 
            8 8 6 8 . 8 8 8 8 8 8 . 8 6 8 8 
            8 8 8 . . . 8 8 8 8 . . . 8 8 8 
            8 8 . . . . . 8 8 . . . . . 8 8 
            `,img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 f 8 8 f 1 8 . . . . 
            . . 8 . 8 f 8 5 5 8 f 8 . 8 . . 
            . 8 8 8 8 8 8 5 5 8 8 8 8 8 8 . 
            8 8 8 6 8 8 8 8 8 8 8 8 6 8 8 8 
            8 8 8 8 6 8 8 8 8 8 8 6 8 8 8 8 
            8 8 8 6 8 8 8 8 8 8 6 8 6 8 8 8 
            8 8 8 6 6 8 1 1 1 1 8 6 6 8 8 8 
            8 8 8 8 6 8 1 8 8 1 8 6 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 6 8 8 8 8 8 8 6 6 8 8 8 
            8 8 8 6 8 . 8 8 8 8 . 8 6 8 8 8 
            8 8 8 8 . . . 8 8 . . . 8 8 8 8 
            `,img`
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 1 f 8 8 f 1 8 . . . . 
            . . . . 8 f 8 5 5 8 f 8 . . . . 
            . . . . 8 8 8 5 5 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 6 8 8 8 8 8 6 6 8 8 . . 
            . . 8 8 8 8 1 1 1 1 8 8 8 8 . . 
            . . 8 8 6 8 1 8 8 1 8 6 8 8 . . 
            . . 8 8 6 8 8 8 8 8 8 6 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 6 8 8 8 8 8 8 6 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 . 8 8 8 8 . 8 8 8 . . 
            . . 8 8 8 . . 8 8 . . 6 8 8 . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(Hamilton, values)
        tiles.setTileAt(values, assets.tile`transparency16`)
    }
    for (let values of tiles.getTilesByType(assets.tile`myTile4`)) {
        flowers = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . . . 5 . . . . . . 
            . . . . 5 3 5 5 5 3 5 . . . . . 
            . . . . . 5 3 1 3 5 . . . . . . 
            . . . . 5 3 5 5 5 3 5 . . . . . 
            . . . . . 5 . 7 . 5 . . . . . . 
            . . . . . . . 7 . . 7 . . . . . 
            . . . . 7 7 7 7 . 7 7 . . . . . 
            . . . 7 7 6 6 7 7 7 7 . . . . . 
            . . 7 7 6 . . 7 7 6 6 . . . . . 
            . . . . . . . 7 6 . . . . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(flowers, values)
        tiles.setTileAt(values, assets.tile`transparency16`)
    }
    for (let values of tiles.getTilesByType(assets.tile`myTile5`)) {
        fertiliser = sprites.create(img`
            . 2 2 2 2 . . . . . . 2 2 2 2 . 
            . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . . 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        fertiliser,
        [img`
            . . 2 2 2 . . . . . . 2 2 2 . . 
            . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            `,img`
            . . . 2 2 2 . . . . 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            `,img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            `,img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            `,img`
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            `,img`
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . 2 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . 2 . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(fertiliser, values)
        tiles.setTileAt(values, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Bees = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Bees,
    [img`
        . . . f f f f f . f f f f f . . 
        . . . f 1 1 1 1 f 1 1 1 1 f . . 
        . . . f 1 1 1 1 f 1 1 1 1 f . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . . . . 1 1 1 f 1 1 1 . . . . 
        . . f f f f f f f f f f f f . . 
        . f 5 5 5 5 5 5 f 5 5 5 5 f f . 
        . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
        . f f f 5 5 5 f 5 5 5 5 f f f f 
        . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 f 5 5 5 5 f f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f 5 5 5 f 5 5 5 f 5 5 5 f f . 
        . f 5 f 1 5 5 5 f 5 5 5 f 5 f . 
        . f 5 f 5 5 5 5 f 5 5 5 f 5 f f 
        . f 5 5 f 5 5 5 f 5 5 5 f 5 f . 
        . f 5 5 5 f 5 5 5 f 5 5 5 f f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Bees.setPosition(Fermi.x + 80, Fermi.y - 80)
    Bees.follow(Fermi, 30)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Kermi.vy == 0) {
        Kermi.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Lermi.vy == 0) {
        Lermi.vy = -150
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Dermi = sprites.create(img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 1 1 5 5 5 5 5 5 . 
        . 1 5 5 5 5 1 1 1 1 5 5 5 5 1 . 
        1 1 1 5 5 1 1 1 1 1 1 5 5 1 1 1 
        1 1 1 5 5 1 1 1 1 1 1 5 5 1 1 1 
        1 1 1 5 5 5 1 1 1 1 5 5 5 1 1 1 
        1 5 5 5 5 5 5 1 1 5 5 5 5 5 5 1 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . d d d d d d d d d d . . . 
        . . . d d f 1 d d f 1 d d . . . 
        . . . d d f f d d f f d d . . . 
        . . . d 3 d d d d d d 3 d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        `, SpriteKind.Player)
    Dermi.setPosition(15, 13)
    Dermi.ay = 350
    controller.player2.moveSprite(Dermi, 100, 0)
    Dermi.setImage(img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 1 1 5 5 5 5 5 5 . 
        . 1 5 5 5 5 1 1 1 1 5 5 5 5 1 . 
        1 1 1 5 5 1 1 1 1 1 1 5 5 1 1 1 
        1 1 1 5 5 1 1 1 1 1 1 5 5 1 1 1 
        1 1 1 5 5 5 1 1 1 1 5 5 5 1 1 1 
        1 5 5 5 5 5 5 1 1 5 5 5 5 5 5 1 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . d d d d d d d d d d . . . 
        . . . d d f 1 d d f 1 d d . . . 
        . . . d d f f d d f f d d . . . 
        . . . d 3 d d d d d d 3 d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        `)
    if (Dermi.vx < 0) {
        Dermi.image.flipX()
    }
    Dermi.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Fermi.y < otherSprite.y) {
        info.changeScoreBy(2)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    } else {
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    }
    if (info.player2.hasLife()) {
        if (Dermi.y < otherSprite.y) {
            info.changeScoreBy(2)
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
        }
    }
    if (info.player3.hasLife()) {
        if (Lermi.y < otherSprite.y) {
            info.changeScoreBy(2)
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
        }
    }
    if (info.player4.hasLife()) {
        if (Kermi.y < otherSprite.y) {
            info.changeScoreBy(2)
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
        }
    }
})
let Bees: Sprite = null
let fertiliser: Sprite = null
let flowers: Sprite = null
let Hamilton: Sprite = null
let Seeds: Sprite = null
let Lermi: Sprite = null
let Dermi: Sprite = null
let Fermi: Sprite = null
let Kermi: Sprite = null
let CurrentLevel = 0
startlevel()
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999555555599999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111999999999999911199999999111911199999999999999999999999999999555555555555559999999999999999999999999999999999999999999999999999999999
    9999999999999999991119999111999999999999911199999999111911111199999999999999999999999115555555555555555999999999999999999999999999999999991119999999999999999999
    9999999999999999991111111199111999999999911199911199111911111199111999999999911199111115555555555555555599999999999999999999999999999999911111119999999999999999
    9999999999999999991111111199111999999991119911111199999111111111111999999999911111111115555115555555555599999999999999999999911111999991111111111111999999999999
    9999999999999999911111111119111199999991119911111199111111199111111999999999911111111111111115555555555511999999999999911191111111199911111111111111199999999999
    9999999999999999911111111111111199999991111111111111111111199111111111199999999111111111111115555555511111991119999999911191111111199111111999111111119999999999
    9999999999999999911111111111111199111999911111111111111199999911111111199999991119111111111119911111111111191111119999911111111911199111111111199911111999999999
    9999999991119111991111191111111999111999911111111111911199999911111111199999111119111999991111111111111111111111119111999911111111111111111111111111111111111111
    9999999991111111111111191119111999111111111111119111111111111911191119999999111119111911199991111111199911111191119111999911111111111111111111111111111111111111
    9999911111111111119911191119111999999111111111119111119911111991111119999999111119111911191111119911111191111199111111999911111111111111111111111111111111111111
    9999911111111991111119991119999911199111111111199111119111111991111199999999991111111111191111119911111191119999111999999911111111911111111111111111199111199999
    9999911111999111991119999999999911199999999999111111111111911111111199999991119991111119991111111111111191119999111999999999911111111111111111111911199911199999
    9911111119111111111119999999999911119999999111111111111111911111911199999991119991111119111999111199111911199111999999999911111111111111111111111911199911199999
    9911111119111111111119999999999111119999999111111111111999911111999999999991111119999999111999111199999911199111999999999911111111111111111111111911111111119999
    9911111119111111111119999999111111119999999111911111199999999999999999999911191119555119111111111999111111111111999991111111111111111111191111111911111111119999
    9999111911199111991119999999111111119999999999999999999999999999999999999911111119555111199111991119111191111199999991111111111111999111199111111111111111119999
    9999111911199111999999999999111991119999999999999999999999999999999999999911111199555111199111991119111191111119999991111111111111999111111111191111119999999999
    9999111911199999999999999999999999999999999999999999999999999999999999999999911155599911555999955519555555111119999999999999111111111111111111991111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999555511199555955555555555555991119999999999999999999111111111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999555511555555955555555555555999999999999999999911199111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999555911555555955555555555559999999999999999999911199999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555955555555555559999999999999999999911199999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555559999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555559999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555559999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555555599999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555599999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555599999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.onUpdate(function () {
    Fermi.setImage(img`
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 1 2 2 2 2 1 1 2 2 2 2 1 . . 
        . 1 1 2 2 2 1 1 1 1 2 2 2 1 1 . 
        1 1 2 2 2 1 1 1 1 1 1 2 2 2 1 1 
        1 1 2 2 2 1 1 1 1 1 1 2 2 2 1 1 
        1 1 2 2 2 2 1 1 1 1 2 2 2 2 1 1 
        1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . d d d d d d d d d d . . . 
        . . . d d f 1 d d f 1 d d . . . 
        . . . d d f f d d f f d d . . . 
        . . . d 3 d d d d d d 3 d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        `)
    if (Fermi.vx < 0) {
        Fermi.image.flipX()
    }
})
forever(function () {
    for (let index = 0; index < 4; index++) {
        Hamilton.x += 1
    }
    pause(2000)
    for (let index = 0; index < 4; index++) {
        Hamilton.x += -1
    }
})
