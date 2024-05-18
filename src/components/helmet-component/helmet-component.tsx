import { Helmet } from 'react-helmet-async';

type THelmetComponent = {
  title: string;
};

function HelmetComponent({ title }: THelmetComponent): JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default HelmetComponent;
