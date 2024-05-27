import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

/**
 * Card: Styled component for the card layout.
 * Sets flexible sizing, padding, border, border-radius, and box-shadow.
 * Uses flexbox for column direction layout and adjusts padding for smaller screens.
 */
const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

/**
 * Title: Styled component for the card title.
 * Uses medium font weight and primary color from the theme.
 * Adjusts font size for smaller screens.
 */
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

/**
 * AddWorkout: Functional component for adding a new workout.
 * @param {Object} props - Component props.
 * @param {string} props.workout - Current workout input value.
 * @param {Function} props.setWorkout - Function to update the workout input value.
 * @param {Function} props.addNewWorkout - Function to handle adding the new workout.
 * @param {boolean} props.buttonLoading - Flag indicating if the button is in loading state.
 * Renders a card with a title, a textarea input for workout details, and a button to submit the workout.
 */
const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;
