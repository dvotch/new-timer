import React from 'react';
import styled, { css } from 'styled-components';
import { BlobOptions } from 'buffer';

const Timer = () => {
    const Button = styled.button<{ $primary?: boolean }>`
        width: 7em;
        height: 3em;
        background-color: transparent;
        border-radius: 3px;
        border: 2px solid blueviolet;
        color: blueviolet;
        padding: 0.25em 1em;
        cursor: pointer;

        ${props =>
            props.$primary &&
            css`
                background-color: blue;
                color: white;
                border: 2px solid blue;
            `}
    `;

    const ButtonsWrapper = styled.div`
        display: flex;
        gap: 3em;
    `;

    const Wrapper = styled.div`
        margin: 2em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15em;
        border: 2px dashed black;
        padding: 2em;
    `;

    const Time = styled.p`
        font-family: Impact, sans-serif;
        font-size: 2em;
    `;

    const [start, setStart] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[m, s, ms], setTime] = React.useState([0, 0, 0]);

    const tick = () => {
        if (s === 59 && ms === 1000) {
            setTime([m + 1, 0, 0]);
        } else if (ms === 1000) {
            setTime([m, s + 1, 0]);
        } else {
            setTime([m, s, ms + 20]);
        }
    };

    const reset = () => {
        setTime([0, 0, 0]);
        setStart(false);
        setOver(false);
    };

    React.useEffect(() => {
        if (start) {
            const timer = setInterval(tick, 20);
            return () => clearInterval(timer);
        }
    });

    return (
        <Wrapper>
            <Time>
                {`${m.toString().padStart(2, '0')}
                :${s.toString().padStart(2, '0')}
                :${ms.toString().padStart(3, '0')}`}
            </Time>
            <ButtonsWrapper>
                <Button onClick={() => setStart(!start)}>{start ? 'Pause' : 'Start'}</Button>
                <Button $primary onClick={() => reset()}>
                    Restart
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default Timer;
