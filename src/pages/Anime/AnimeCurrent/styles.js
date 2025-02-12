import styled from 'styled-components';
import { white } from '@carbon/colors';

// AnimeItem: The container for each anime entry
export const AnimeItem = styled.li`
  position: relative;
  width: 100%; /* Make the item take full width of the carousel */
  display: flex;
  flex-direction: column;
  opacity: 0.5; /* Make non-active items less prominent */
  transition: opacity 0.5s ease-in-out;
  scroll-snap-align: start;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  justify-content: center;
  align-items: center;

  /* When active, show the item with full opacity */
  &.active {
    opacity: 1;
  }
`;

// AnimeName: Styling for the anime titles (English and Native)
export const AnimeName = styled.h5`
  font-weight: bold;
  font-size: 1.1rem;
  color: white; /* Dark text for better readability */
  margin: 5px 0;
  text-align: center;
`;

// AnimeDescription: The description box
export const AnimeDescriptionBox = styled.div`
  background-color: #fff; /* White background for the description box */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-size: 0.9rem;
  color: #666; /* Lighter text color for description */
  word-wrap: break-word;
  transition: opacity 0.5s ease;

  /* When active (selected), it will fade in */
  &.active {
    opacity: 1;
  }

  /* When not active, it will fade out */
  &:not(.active) {
    opacity: 0;
  }
`;

// AnimeCover: The cover image container
export const AnimeCover = styled.div`
  width: 100%;
  max-width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// ProgressBar: Styling for the progress bar container
export const ProgressBar = styled.div`
  width: 100%;
  margin-top: 10px;
  h5 {
    margin-top: 15px;
  }
`;

// Anime carousel: To allow scrolling of anime items horizontally
export const AnimeCarousel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 80%; /* Adjust based on your needs */
  margin: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  
  /* Add a border and background */
  border: 2px solid #ccc; /* Light grey border */
  background-color: #f5f5f5; /* Light background for readability */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a lifted look */

  /* Optional: Add some internal padding to space out content inside */
  padding: 20px;
  
  /* Add hover effect */
  &:hover {
    background-color: #eaeaea; /* Slightly darker background on hover */
    border-color: #888; /* Darker border on hover */
  }
`;


// Navigation buttons (left and right)
export const AnimeCarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const AnimeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  background-color: black;
  border-radius: 8px;
  position: relative;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
  
  /* Add some space between elements */
  & > * {
    margin-bottom: 10px;
  }
`;