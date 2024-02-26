import * as S from './styles';

export function ConfirmationPage() {
  return (
    <S.SuccessPageContainer>
      <div>
        <S.SuccessPageTitle>Uhu! Pedido confirmado</S.SuccessPageTitle>
        <S.SuccessPageDescription>
          Agora é só aguardar que logo o café chegará até você
        </S.SuccessPageDescription>
        <div>
          <div>
            <p>Entrega em : </p>

            <p>Previsao de entrega</p>

            <p>Pagamento na entrega:</p>
          </div>
          <img src="/images/bike.svg" alt="bike" />
        </div>
      </div>
    </S.SuccessPageContainer>
  );
}
