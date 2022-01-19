import {
  Container,
  ContainerLoading,
  Loading,
  SpinTest,
  SpinnerArounded,
  SkeletonWave
} from './styles';

export default function Spinner() {
  return (
    <Container>
        <ContainerLoading>
          <Loading />
          <SpinTest />
          <SpinnerArounded />
          <SkeletonWave />
        </ContainerLoading>
    </Container>
  );
}
