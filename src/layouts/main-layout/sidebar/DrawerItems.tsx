import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'components/base/Image';
import ListItem from './list-items/ListItem';
import LogoImg from 'assets/images/Logo.png';
import FooterImg from 'assets/images/helpCenter.png';
import sitemap from 'routes/sitemap';

const DrawerItems = () => {
  return (
    <>
      <Stack
        position={'sticky'}
        top={0}
        py={4}
        alignItems="center"
        bgcolor="primary.light"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={LogoImg} alt="logo" height={40} width={40} sx={{ mr: 1.25 }} />
          <Typography variant="h3" color="text.primary" fontWeight={600} letterSpacing={1}>
            DNX
          </Typography>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mt: 3.5 }}>
        {sitemap.map((route, index) => {
          return <ListItem key={index} {...route} />;
        })}
      </List>

      <Stack mt={10} mb={4} height={285} width={1} position="relative">
        <Image src={FooterImg} height={1} width={1} sx={{ objectFit: 'cover' }} />

        <Stack direction="column" position="absolute" top={100} left={0} width={1}>
          <Typography variant="body1" fontWeight="600" color="neutral.lighter" align="center" width={1}>
            Help Center
          </Typography>
          <Typography mt={1} variant="caption" fontWeight={400} color="neutral.lighter" align="center" width={1}>
            Having Trouble in Learning?
            Please contact us for more questions.
          </Typography>
        </Stack>

        <Stack position="absolute" bottom={16} left={0} width={1} px={1.75} justifyContent={"center"}>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            fullWidth
          >
            Go To Help Center
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DrawerItems;