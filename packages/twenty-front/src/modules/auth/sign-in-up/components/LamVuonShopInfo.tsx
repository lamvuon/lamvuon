import styled from '@emotion/styled';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from 'twenty-ui/display';

const StyledContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  max-width: 400px;
  width: 100%;
`;

const StyledToggleButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.background.transparent.lighter};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};
  color: ${({ theme }) => theme.font.color.primary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.sm};
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)};
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.background.transparent.light};
    border-color: ${({ theme }) => theme.border.color.strong};
  }
`;

const StyledContent = styled.div<{ isOpen: boolean }>`
  background: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: -1px;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow-y: auto;
  padding: ${({ isOpen, theme }) => (isOpen ? theme.spacing(4) : '0')};
  transition: all 0.3s ease;
`;

const StyledSection = styled.div`
  color: ${({ theme }) => theme.font.color.secondary};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  margin-top: 0;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding: 0;

  li {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    padding-left: ${({ theme }) => theme.spacing(3)};
    position: relative;

    &:before {
      content: '•';
      color: ${({ theme }) => theme.color.green};
      font-weight: bold;
      left: 0;
      position: absolute;
    }
  }
`;

const StyledFeatureGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  grid-template-columns: 1fr;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledFeatureCard = styled.div`
  background: ${({ theme }) => theme.background.transparent.lighter};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing(3)};
`;

const StyledFeatureTitle = styled.h4`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  margin-top: 0;
`;

const StyledFeatureDescription = styled.p`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.5;
  margin: 0;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LamVuonShopInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledToggleButton onClick={() => setIsOpen(!isOpen)}>
        <span>
          <Trans>Về Làm Vườn Shop</Trans>
        </span>
        {isOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
      </StyledToggleButton>

      <StyledContent isOpen={isOpen}>
        <StyledSection>
          <StyledTitle>
            <Trans>Giới thiệu</Trans>
          </StyledTitle>
          <p>
            <Trans>
              Làm Vườn Shop là nền tảng thương mại và quản lý chăm sóc cây
              trồng được phát triển nhằm mang đến trải nghiệm toàn diện cho
              người yêu thiên nhiên. Chúng tôi cung cấp hàng trăm sản phẩm làm
              vườn, công cụ chăm sóc cây, đất – phân bón, và hệ thống hỗ trợ
              ghi chú – theo dõi – nhắc nhở giúp bạn chăm sóc khu vườn một cách
              khoa học và dễ dàng.
            </Trans>
          </p>
        </StyledSection>

        <StyledSection>
          <StyledTitle>
            <Trans>Mục tiêu & Sứ mệnh</Trans>
          </StyledTitle>
          <p>
            <Trans>
              Chúng tôi hướng đến việc tạo ra một hệ sinh thái số dành riêng
              cho cộng đồng yêu làm vườn tại Việt Nam – nơi người dùng không
              chỉ mua sắm mà còn học hỏi, chia sẻ và xây dựng một không gian
              sống xanh lành mạnh.
            </Trans>
          </p>
          <StyledList>
            <li>
              <Trans>
                Kết nối người yêu cây với các nhà vườn uy tín trên toàn quốc
              </Trans>
            </li>
            <li>
              <Trans>
                Hỗ trợ quy trình chăm sóc cây từ A–Z qua hệ thống lịch và ghi
                chú thông minh
              </Trans>
            </li>
            <li>
              <Trans>
                Tối ưu hóa việc tìm kiếm và đề xuất sản phẩm theo từng nhu cầu
                cụ thể
              </Trans>
            </li>
            <li>
              <Trans>
                Đảm bảo trải nghiệm mua sắm an toàn – nhanh chóng – minh bạch
              </Trans>
            </li>
          </StyledList>
        </StyledSection>

        <StyledSection>
          <StyledTitle>
            <Trans>Tính năng chính</Trans>
          </StyledTitle>
          <StyledFeatureGrid>
            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Kho sản phẩm đa dạng</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Cây giống, phân bón, đất trồng, chậu – vật tư, dụng cụ làm
                  vườn… được chọn lọc từ nhiều nhà vườn chất lượng
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Quản lý giỏ hàng & đơn hàng</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Theo dõi trạng thái đơn hàng, lịch sử mua sắm, cập nhật giao
                  hàng theo thời gian thực
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Gợi ý sản phẩm thông minh</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Hệ thống đề xuất theo nhu cầu, loại cây, thói quen mua sắm và
                  vị trí khí hậu
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Nhật ký chăm sóc cây</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Lưu trữ thông tin, lịch tưới – bón phân, nhắc nhở tự động
                  giúp chăm cây chuẩn khoa học
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Đăng nhập Google (OAuth)</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Đăng nhập nhanh, đồng bộ dữ liệu cá nhân. Chúng tôi chỉ sử
                  dụng email, tên và ảnh đại diện để tạo hồ sơ người dùng
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledFeatureTitle>
                <Trans>Tính năng cộng đồng</Trans>
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                <Trans>
                  Khám phá bài viết hướng dẫn, mẹo chăm cây, đánh giá sản phẩm
                  và chia sẻ kinh nghiệm
                </Trans>
              </StyledFeatureDescription>
            </StyledFeatureCard>
          </StyledFeatureGrid>
        </StyledSection>

        <StyledSection>
          <StyledTitle>
            <Trans>Bảo mật & Quyền riêng tư</Trans>
          </StyledTitle>
          <p>
            <Trans>
              Chúng tôi cam kết bảo mật dữ liệu người dùng. Các thông tin lấy
              từ Google OAuth chỉ phục vụ cho mục đích đăng nhập và đồng bộ hóa
              tài khoản. Chúng tôi không truy cập hoặc sử dụng bất kỳ dữ liệu
              nhạy cảm nào.
            </Trans>
          </p>
          <p>
            <Trans>Xem chi tiết:</Trans>{' '}
            <StyledLink
              href="https://privacy-policy.lamvuon.shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans>Chính sách bảo mật</Trans>
            </StyledLink>
            {' • '}
            <StyledLink
              href="https://terms-of-service.lamvuon.shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans>Điều khoản sử dụng</Trans>
            </StyledLink>
          </p>
        </StyledSection>
      </StyledContent>
    </StyledContainer>
  );
};

