import { Skeleton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SkeletonItem = () => {
  return (
    <div>
      <Stack
        variant="rectangular"
        height={525}
        width={350}
        sx={{
          bgcolor: 'grey.900',
          borderRadius: '10px',
          marginBottom: '10px',
          padding: '10px',
          display: 'flex',
        }}
      >
        <Box
          spacing={2}
          height={500}
          sx={{ marginBottom: '8px' }}
          className="detals"
        >
          {/* display: flex;
    align-content: flex-start;
    flex-direction: column;
  justify-content: space-between; */}
          <Skeleton
            margin="2rem"
            variant="rectangular"
            height={30}
            width={200}
            animation="wave"
            sx={{ borderRadius: '5px' }}
          />
          <Box
            height={470}
            margin={0}
            clasName="detals"
            sx={{
              display: 'flex',
              alignContent: 'space-around',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Skeleton
              // borderRadius="10px"
              width={36.55}
              variant="rectangular"
              height={19}
              animation="wave"
              sx={{ marginTop: '5px', borderRadius: '5px' }}
            />
            <Skeleton
              sx={{ marginTop: '5px', borderRadius: '5px' }}
              // borderRadius="10px"
              variant="rectangular"
              width={320}
              animation="wave"
              height={31}
            />
            <Skeleton
              sx={{ marginTop: '5px', borderRadius: '5px' }}
              width={330}
              height={180}
              animation="wave"
              variant="rectangular"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Skeleton
                width={230}
                animation="wave"
                sx={{ marginTop: '5px', borderRadius: '5px' }}
                height={44}
                variant="rectangular"
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default SkeletonItem;
