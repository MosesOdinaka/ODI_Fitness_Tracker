import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

/**
 * Styled component for the card container.
 * Applies padding, border, border-radius, box-shadow, and flexbox styles.
 */
const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;

/**
 * Styled component for the workout category label.
 * Sets font size, color, font weight, background color, padding, and border-radius.
 */
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;

/**
 * Styled component for the workout name.
 * Sets font size, color, and font weight.
 */
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;

/**
 * Styled component for the sets and reps information.
 * Sets font size, color, font weight, and display properties.
 */
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;

/**
 * Styled component for the flex container to hold details.
 * Applies flexbox layout and gap between elements.
 */
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;

/**
 * Styled component for workout details.
 * Sets font size, color, font weight, and display properties with alignment.
 */
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

/**
 * WorkoutCard: Functional component to display a card with workout details.
 *
 * @param {Object} workout - The workout object containing category, name, sets, reps, weight, and duration.
 * @returns {JSX.Element} The rendered WorkoutCard component.
 */
const WorkoutCard = ({ workout }) => {
  return (
    <Card>
      <Category>#{workout?.category}</Category>
      <Name>{workout?.workoutName}</Name>
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  );
};

export default WorkoutCard;
