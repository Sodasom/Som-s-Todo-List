import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const CalendarPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  padding: 0 32px;

  .setting {
    font-size: 60px;
    margin-bottom: 16px;
    color: #8b8b8b;
  }

  span {
    font-weight: bold;
  }
`;

const Calendar = () => {
  return (
    <>
      <CalendarPage>
        <FontAwesomeIcon className="setting" icon={faGear}></FontAwesomeIcon>
        <span>업데이트 준비중</span>
      </CalendarPage>
    </>
  );
};

export default Calendar;
