import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import { addToWatchLater } from '../redux/slices/watchLaterSlice';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import '../css/FilmCard.css';

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  border: "none",
  position: "relative",
  width: 250,
  height: 400,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

const FilmCard = ({ film }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToWatchLater = (e) => {
    e.preventDefault();
    dispatch(addToWatchLater(film));
  };

  const handleGoToWatchlist = (e) => {
    e.preventDefault();
    navigate('/watchlist');
  };

  return (
    <Link to={`/film-details/${film.id}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{border: 'none', backgroundColor: 'rgb(44, 44, 44)'}}>
        <div className="card-inner">
          {/* Ön Yüz */}
          <div className="card-front">
            <StyledCard>
              <StyledCardMedia image={film.poster} />
              <Content sx={{paddingBottom: '13px'}}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "1rem",
                    letterSpacing: "1px",
                    textTransform: "initial",
                    marginBottom: 0,
                  }}
                >
                  {film.year}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    lineHeight: 1.2,
                  }}
                >
                  {film.title}
                </Typography>
              </Content>
            </StyledCard>
          </div>

          {/* Arka Yüz */}
          <div className="card-back">
            <Card
              elevation={0}
              sx={{
                border: 'none',
                boxShadow: 'none',
                width: 250,
                height: 400,
                bgcolor: 'darkred',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1rem'
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '13px' }}>
                  {film.title}
                </Typography>
                <Typography variant="body2">
                  {film.plot}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '100%',
                    display: 'block',
                    marginTop: '13px',
                    fontWeight: 'bold'
                  }}
                >
                  IMDB: {film.imdb}
                </Typography>

                <Button
                  onClick={handleAddToWatchLater}
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    bgcolor: 'white',
                    color: '#f65c5cff',
                    '&:hover': { bgcolor: '#ddd' }
                  }}
                >
                  Watch Later
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
