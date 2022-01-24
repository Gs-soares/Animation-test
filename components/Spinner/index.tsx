import {
  Container,
  ContainerLoading,
  Loading,
  SpinTest,
  SpinnerArounded,
  SkeletonWave,
  LoadingLinear,
  SkeletonTest
} from './styles';

export default function Spinner() {
  return (
    <Container>
        <ContainerLoading>
          <Loading />
          <SpinTest />
          <SpinnerArounded />
          <SkeletonWave />
          <LoadingLinear />
          <SkeletonTest />
          <SkeletonTest />
          <SkeletonTest />
          <SkeletonTest />
        </ContainerLoading>
    </Container>
  );
}
