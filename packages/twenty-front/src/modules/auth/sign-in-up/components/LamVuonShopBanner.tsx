import styled from '@emotion/styled';
import { Trans } from '@lingui/react/macro';

const StyledBanner = styled.div`
  align-items: center;
  background: linear-gradient(
      rgba(46, 58, 38, 0.6),
      rgba(46, 58, 38, 0.6)
    ),
    url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.border.radius.md};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing(6)};
  text-align: center;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin: 0 0 ${({ theme }) => theme.spacing(2)} 0;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const StyledSubtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

export const LamVuonShopBanner = () => {
  return (
    <StyledBanner>
      <StyledTitle>
        <Trans>Làm Vườn Shop</Trans>
      </StyledTitle>
      <StyledSubtitle>
        <Trans>Nền tảng mua sắm & quản lý dành riêng cho những người yêu cây</Trans>
      </StyledSubtitle>
    </StyledBanner>
  );
};


