#!/usr/bin/env python
import pygame
from pygame.locals import *
from sys import exit
import random
import os

# Center pong.py window
os.environ['SDL_VIDEO_CENTERED'] = '1'

# Game ---
pygame.init()
pygame.mouse.set_visible(0)
clock = pygame.time.Clock()

# Constants ---
WHITE = (255,255,255)
GREY = (100, 100, 100)
BLACK = (  0,  0,  0)

# Initialisation ---
pong_title_text = "Judoka Pong"

# Ball
ball_size = 15
ball_colour = (random.randint(0, 2**8 - 1), random.randint(0, 2**8 - 1), random.randint(0, 2**8 - 1))
speed_x, speed_y = 20, 20
# Board
background_colour = (255, 102, 0)
frame_colour = (153, 153, 255)
# Window
WINDOW_WIDTH = 640
WINDOW_HEIGHT = 480
font = pygame.font.SysFont("monospace", 40)
# Paddle1
bar1_width, bar1_height = 10, 50
bar1_colour = WHITE
speed_bar1 = 20.
# Paddle2
bar2_width, bar2_height = 10, 50
bar2_colour = WHITE
speed_bar2 = 20.
bar2_keyUp = K_w
bar2_keyDown = K_s

# Other variables ---
# Paddles
bar1_keyUp = K_UP
bar1_keyDown = K_DOWN
bar1_x, bar2_x = WINDOW_WIDTH - (bar2_width * 3), bar1_width * 2 # paddles init x position
bar1_y, bar2_y = (WINDOW_HEIGHT/2.) - (bar1_height/2.), (WINDOW_HEIGHT/2.) - (bar2_height/2.) # paddles init y position
bar1_move, bar2_move = 0., 0.

# Ball
ball_x, ball_y = (WINDOW_WIDTH/2. + 5) - (ball_size/2.), (WINDOW_HEIGHT/2.) - (ball_size/2.) # ball init position
# Score
score_1, score_2 = 0, 0 # Init score
score1_colour, score2_colour = WHITE, WHITE
scoreWidth = font.size('0')
score2_x , score1_x = (WINDOW_WIDTH/2.) - scoreWidth[0]- 60., (WINDOW_WIDTH/2.) + 60.
score1_y, score2_y = 10., 10. # scores y position
# Board
# Messages
win = 0
title_text = font.size(pong_title_text)
title_text_x, title_text_y = (WINDOW_WIDTH/2.) - (title_text[0]/2.), 30
intro_str = ['Press [ENTER] to start', ' ', u'Player 1: \u2191 and \u2193 arrows', 'Q to quit']
i = 0
text_x, text_y = [], []
for phrase in intro_str:
    text = font.size(phrase)
    text_x.append((WINDOW_WIDTH / 2.) - (text[0] / 2.))
    text_y.append((WINDOW_HEIGHT / 2.) - (text[1] / 2.) +  i)
    i += text[1]
win_size = font.size("Player 1 wins!")
win_x, win_y =  (WINDOW_WIDTH/2.) - (win_size[0]/2.),  (WINDOW_HEIGHT/2.) - (win_size[1]/2.)
# Add-ons
hits = 0

# Game state (0: init, 1: play)
state = 0

# Store initial values for reset
bar1_init_x, bar2_init_x = bar1_x, bar2_x
bar1_init_y, bar2_init_y = bar1_y, bar2_y
init_speed_bar1, init_speed_bar2 = speed_bar1, speed_bar2
ball_initx, ball_inity = ball_x, ball_y
ball_init_speed_x, ball_init_speed_y = speed_x, speed_y

# Set the systembar entry
pygame.display.set_caption("Pong")
icon = pygame.image.load("icon/pong.png")
pygame.display.set_icon(icon)

# Set video mode
screen=pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT), DOUBLEBUF, 16) #24bit colour depth
screen.set_alpha(None)

# Create background
back = pygame.Surface((WINDOW_WIDTH,WINDOW_HEIGHT))
background = back.convert()
background.fill(background_colour)
# Create paddles
bar1_surface = pygame.Surface((bar1_width, bar1_height))
bar1 = bar1_surface.convert()
bar1.fill(bar1_colour)
bar2_surface = pygame.Surface((bar2_width, bar2_height))
bar2 = bar2_surface.convert()
bar2.fill(bar2_colour)
# Create ball
ball_surface = pygame.Surface((ball_size, ball_size))
ball_surface.fill(background_colour)
ball = pygame.draw.circle(ball_surface, ball_colour, (ball_size/2, ball_size/2), ball_size/2)
ball = ball_surface.convert()
keyPressed = []
#
title_font = font.render(pong_title_text, True, WHITE)
intro_font = []
for s in intro_str:
    intro_font.append(font.render(s, True, WHITE))


# Game loop ---
while True:
    # Update
    time_passed = clock.tick(30000)
    time_sec = time_passed / 100.0

    # Playing
    if state == 1:
        ball_x += speed_x * time_sec
        ball_y += speed_y * time_sec
        inc_bar1 = speed_bar1 * time_sec
        inc_bar2 = speed_bar2 * time_sec

        # Read input
        for event in pygame.event.get():
            if event.type == QUIT:
                exit()
            if event.type == KEYDOWN:
                if event.key == K_q:
                    exit()
                # Player1
                if event.key == bar1_keyUp:
                    bar1_move = -inc_bar1
                elif event.key == bar1_keyDown:
                    bar1_move = inc_bar1
            elif event.type == KEYUP:
                # Player1
                if event.key == bar1_keyUp:
                    bar1_move = 0.
                elif event.key == bar1_keyDown:
                    bar1_move = 0.
                elif event.key == K_ESCAPE:
                    exit()

        bar1_y += bar1_move

        # Clamp paddle y values
        max_y1 = WINDOW_HEIGHT - bar1_height
        max_y2 = WINDOW_HEIGHT - bar2_height
        if bar1_y >= max_y1: bar1_y = max_y1
        elif bar1_y <= 0 : bar1_y = 0
        if bar2_y >= max_y2: bar2_y = max_y2
        elif bar2_y <= 0: bar2_y = 0

        # Custom code
        if score_1 == 5.:
          win = 1

        if score_2 == 5.:
          win = 2

        if win != 0:
            state = 0

        # Check paddle-ball collision
        # Paddle1
        if ball_x >= bar1_x - ball_size:
            if ball_y >= bar1_y - (ball_size/2) and ball_y <= bar1_y + (bar1_height - (ball_size/2)):

                ball_x = bar1_x - ball_size
                speed_x = -speed_x
                hits += 1

        # Paddle2
        elif ball_x <= bar2_x + bar2_width:
            if ball_y >= bar2_y - (ball_size/2) and ball_y <= bar2_y + (bar2_height - (ball_size/2)):

                ball_x = bar2_x + bar2_width
                speed_x = -speed_x
                hits += 1

        # Check goal
        if ball_x < 0:
            score_1 += 1
            ball_x, ball_y = WINDOW_WIDTH/2, (WINDOW_HEIGHT/2 - ball_size/2)
            bar1_y,bar2_y = (WINDOW_HEIGHT/2.) - (bar1_height/2.), (WINDOW_HEIGHT/2.) - (bar2_height/2.)
            hits = 0

        elif ball_x > WINDOW_WIDTH - bar1_width:
            score_2 += 1
            ball_x, ball_y = WINDOW_WIDTH/2, (WINDOW_HEIGHT/2 - ball_size/2)
            bar1_y, bar2_y = (WINDOW_HEIGHT/2.) - (bar1_height/2.), (WINDOW_HEIGHT/2.) - (bar2_height/2.)
            hits = 0

        # Collision with walls
        if ball_y <= 0:
            speed_y = -speed_y
            ball_y = 0
        elif ball_y >= WINDOW_HEIGHT - ball_size:
            speed_y = -speed_y
            ball_y = WINDOW_HEIGHT - ball_size
        # AI
        if ball_x <= WINDOW_WIDTH/2:
            if (bar2_y + bar2_height/2) < ball_y:
                bar2_y += inc_bar2
            elif (bar2_y - bar2_height/2) > ball_y:
                bar2_y -= inc_bar2

    # Start
    elif state == 0:
        # Read input
        for event in pygame.event.get():
            if event.type == QUIT:
                exit()
            if event.type == KEYUP:
                if event.key == K_RETURN:
                    state = 1
                    # Reset the game.
                    # Ball
                    ball_x, ball_y = ball_initx, ball_inity
                    speed_x, speed_y = ball_init_speed_x, ball_init_speed_y
                    # Score
                    score_1, score_2 = 0, 0
                    # Paddle
                    bar1_x, bar2_x = bar1_init_x, bar2_init_x
                    bar1_y, bar2_y = bar1_init_y, bar2_init_y
                    speed_bar1, speed_bar2 = init_speed_bar1, init_speed_bar2
                    bar1_move = 0.


                    # Hits
                    hits = 0
                    # Win
                    win = 0
                elif event.key == K_ESCAPE or event.key == K_q:
                     exit()

    # Render of objects
    screen.blit(background,(0,0))
    middle_line = pygame.draw.line(screen, frame_colour, ((WINDOW_WIDTH/2), 0), ((WINDOW_WIDTH/2), WINDOW_HEIGHT))
    line1 = pygame.draw.line(screen, frame_colour, ((bar2_x/2.), 0), ((bar2_x/2.), WINDOW_HEIGHT))
    line2 = pygame.draw.line(screen, frame_colour, ((WINDOW_WIDTH - bar2_x/2.), 0), ((WINDOW_WIDTH - bar2_x/2), WINDOW_HEIGHT))
    screen.blit(bar1, (bar1_x,bar1_y))
    screen.blit(bar2, (bar2_x,bar2_y))
    if state == 1:
        screen.blit(ball, (ball_x, ball_y))
        score1_font = font.render(str(score_1), True, score1_colour)
        score2_font = font.render(str(score_2), True, score2_colour)
        score2_size = font.size(str(score_2))
        score2_x, score1_x = (WINDOW_WIDTH/2.) - score2_size[0] - 60., (WINDOW_WIDTH/2.) + 60.
        screen.blit(score1_font, (score1_x, score1_y))
        screen.blit(score2_font, (score2_x, score2_y))
    elif state == 0:
        # Check for winning condition
        if win == 0:
            screen.blit(title_font, (title_text_x, title_text_y))
            for i in range(len(intro_font)):
                screen.blit(intro_font[i], (text_x[i], text_y[i]))
        else:
            colour = bar1_colour
            text = "Player 1 wins!"
            if win == 2:
                colour = bar2_colour
                text = "Player 2 wins!"
            win_font = font.render(text, True, colour)
            screen.blit(win_font, (win_x, win_y))
    # Exit game when the game window loses focus but not for the first few seconds.
    if not pygame.key.get_focused() and pygame.time.get_ticks() > 5000:
        exit()

    pygame.display.update()
