import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../providers/ProjectProvider";
import { projectImgs } from "./image_helper";

function ProjectDetailsImg() {
  const { openProject, projectImgSecRef } = useContext(ProjectContext);
  const [ imgArrangement, setImagArrangement ] = useState([]);

  function getValidCombinations(gridRows, gridCols, numBoxes) {
    const gridArea = gridRows * gridCols;
    const results = [];
    const possibleBoxes = [
      { rowspan: 1, colspan: 1 },
      { rowspan: 1, colspan: 2 },
      { rowspan: 1, colspan: 3 },
      { rowspan: 2, colspan: 2 },
      { rowspan: 2, colspan: 1 },
      { rowspan: 3, colspan: 1 }
  ];

    function calculateArea(combination) {
        return combination.reduce((sum, { rowspan, colspan }) => sum + rowspan * colspan, 0);
    }

    function fitsGrid(combination) {
        const grid = Array.from({ length: gridRows }, () =>
            Array(gridCols).fill(false)
        );

        let filledCells = 0;

        for (const { rowspan, colspan } of combination) {
            let placed = false;

            for (let r = 0; r <= gridRows - rowspan; r++) {
                for (let c = 0; c <= gridCols - colspan; c++) {
                    let canPlace = true;
                    for (let i = 0; i < rowspan; i++) {
                        for (let j = 0; j < colspan; j++) {
                            if (grid[r + i][c + j]) {
                                canPlace = false;
                                break;
                            }
                        }
                        if (!canPlace) break;
                    }

                    if (canPlace) {
                        for (let i = 0; i < rowspan; i++) {
                            for (let j = 0; j < colspan; j++) {
                                grid[r + i][c + j] = true;
                            }
                        }
                        filledCells += rowspan * colspan;
                        placed = true;
                        break;
                    }
                }
                if (placed) break;
            }

            if (!placed) return false;
        }

        return filledCells === gridArea;
    }

    function generateCombinations(possibleBoxes, numBoxes, start = 0, currentCombination = []) {
        if (currentCombination.length === numBoxes) {
            if (calculateArea(currentCombination) === gridArea && fitsGrid(currentCombination)) {
                results.push([...currentCombination]);
            }
            return;
        }

        for (let i = start; i < possibleBoxes.length; i++) {
            currentCombination.push(possibleBoxes[i]);
            generateCombinations(possibleBoxes, numBoxes, i, currentCombination);
            currentCombination.pop();
        }
    }

    generateCombinations(possibleBoxes, numBoxes);
    return results;
}

function getNoRows(imgLen){
  if(imgLen > 0 && imgLen <= 6){
    return 3;
  }else if( imgLen > 6 && imgLen <= 8){
    return 4;
  }else if( imgLen > 8 && imgLen <= 10){
    return 5;
  }else{
    return 6;
  }
}


  function randomNo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    if(openProject){
      const noRows = getNoRows(projectImgs.length);
      const imgCombinations = getValidCombinations(noRows,3,projectImgs.length);
      const arrangement = imgCombinations[randomNo(0,imgCombinations.length)];
      setImagArrangement(arrangement)
    }
  },[openProject])

  console.log("called ");

  return (
    <Box
      ref={projectImgSecRef}
      sx={{
        width: "60%",
        height: "650px",
        position: "absolute",
        bgcolor: "primary.main",
        borderRadius: "15px 0 0 15px ",
        marginTop: "15px",
        padding: "8px",
        boxSizing: "border-box",
        zIndex: "200",
        transition: "transform .3s linear",
        transform: openProject ? "translateX(0)" : "translateX(-150%)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridAutoRows: "207px",
          overflowY: "auto",
          gap: "5px",
          gridAutoFlow: "dense",
        }}
      >
        { imgArrangement.length > 0 && projectImgs.map((img, index) => (
          <Box
            sx={{
              // gridRow: `span 2`,
              gridRow: `span ${imgArrangement[index].rowspan}`,
              gridColumn: `span ${imgArrangement[index].colspan}`,
              borderRadius: "15px",
              background: `url(${img})`,
              backgroundSize: "cover",
            }}
          />
        ))}
        {/* {projectImgs.map((img) => (
          <Box
            sx={{
              // gridRow: `span 2`,
              gridRow: `span ${randomNo(1, 3)}`,
              gridColumn: `span ${randomNo(1, 2)}`,
              borderRadius: "15px",
              background: `url(${img})`,
              backgroundSize: "cover",
            }}
          />
        ))} */}
      </Box>
    </Box>
  );
}

export default ProjectDetailsImg;
