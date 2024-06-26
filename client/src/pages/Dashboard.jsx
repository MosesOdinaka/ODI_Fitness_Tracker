import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

/**
 * Container: Styled component for the main dashboard container.
 * Uses flexbox layout to center content and adds padding and overflow styles.
 */
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

/**
 * Wrapper: Styled component for wrapping dashboard content.
 * Uses flexbox layout, sets max width, and adjusts gap between elements.
 */
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

/**
 * Title: Styled component for section titles.
 * Sets padding, font size, color, and font weight.
 */
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

/**
 * FlexWrap: Styled component for flexbox wrapping and spacing between elements.
 */
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

/**
 * Section: Styled component for content sections.
 * Uses flexbox layout for column direction and adjusts padding and gap.
 */
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

/**
 * CardWrapper: Styled component for wrapping card elements.
 * Uses flexbox layout to wrap cards and adjust spacing.
 */
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

/**
 * Dashboard: Functional component for displaying the dashboard.
 * Manages state for loading, data, workouts, and workout input.
 * Fetches dashboard data and today's workouts on component mount.
 * Handles adding new workouts and updating the dashboard.
 */
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  const dashboardData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("fittrack-app-token");
      const res = await getDashboardDetails(token);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  const getTodaysWorkout = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("fittrack-app-token");
      const res = await getWorkouts(token, "");
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching today's workouts", error);
    } finally {
      setLoading(false);
    }
  };

  const addNewWorkout = async () => {
    try {
      setButtonLoading(true);
      const token = localStorage.getItem("fittrack-app-token");
      const res = await addWorkout(token, { workoutString: workout });
      console.log("Workout added successfully", res);
      // Assuming you want to refresh data after adding a workout
      await dashboardData();
    } catch (error) {
      console.error("Error adding workout", error);
    } finally {
      setButtonLoading(false);
    }
  };

  // Fetch dashboard data and today's workouts on component mount
  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        {/* Render components here */}
        {/* Example: */}
        {/* CountsCard, WeeklyStatCard, and CategoryChart components */}
        <CountsCard item={{}} data={data} />
        <WeeklyStatCard data={data} />
        <CategoryChart data={data} />
        {/* Pass setWorkout as a prop to AddWorkout component */}
        <AddWorkout setWorkout={setWorkout} onAddWorkout={addNewWorkout} loading={buttonLoading} />
        {/* Render WorkoutCard components for today's workouts */}
        {todaysWorkouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
