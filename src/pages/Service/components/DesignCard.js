import styled from "styled-components";
import { DarkRuler } from "../../../components/icons/DarkRuler";

export const DesignCard = () => {
  return (
    <DesignContent>
      <div>
        <DarkRuler />
        <h3>Architecture Design</h3>
        <p>
          Our success is achieved through effective partnerships and meticulous
          planning by exploring opportunities before embarking on agreed design
          strategies. By carefully executing crafted bespoke designs which
          respond to both the specific site challenges and unique client
          expectations. Whilst our primary focus is always firmly fixed on best
          value outcomes which deliver operational high performance, we also
          aspire to achieve higher architectural ideals which ensure our
          buildings uplift the spirit and leave a lasting impression on the
          communities and users who use them.
        </p>
      </div>
      <div>
        <DarkRuler />
        <h3>Project Develpment Consultancy</h3>
        <p>
          we leverage our experience our project management systems and
          processes are continually kept under review to ensure current best
          practice and leverage technological advancements as they occur. This
          includes collaborative document management and content sharing
          platforms, use of BIM 3D models in a Common Data Environment, Level 2
          BIM 4D for program planning and BIM 5D for cost management.
        </p>
      </div>
      <div>
        <DarkRuler />
        <h3>Planning & Urban Design</h3>
        <p>
          Urban design and planning are integrated at every stage of a project,
          to ensure our master plans, approvals, designs, and policies are
          holistic, achievable, and based on good strategy and quality design.
          We appreciate the environmental, financial and policy conditions of
          each project, consistently delivering effective local planning
          outcomes for clients nationally. The excitement for us come from
          working with clients, and project partners to find the clear line of
          sight between the opportunity and the outcome.
        </p>
      </div>
      <div>
        <DarkRuler />
        <h3>Interior Design</h3>
        <p>
          We are trusted by clients to create beautiful, experiential
          environments that engage and delight communities through a strategic
          and insightful approach. From planning to delivery, we take clients on
          a collaborative design journey where we push boundaries and challenge
          assumptions. We draw on workplace, education, and lifestyle project
          experience to create spaces that foster learning, collaboration, and
          engagement. Our passion comes through working in partnership with our
          clients, listening and communicating openly to understand the goals
          and constraints that help inspire our unique vision for each project.
        </p>
      </div>
      <div>
        <DarkRuler />
        <h3>Pagagon Bim Solutions</h3>
        <p>
          Urban design and planning are integrated at every stage of a project,
          to ensure our master plans, approvals, designs, and policies are
          holistic, achievable, and based on good strategy and quality design.
          We appreciate the environmental, financial and policy conditions of
          each project, consistently delivering effective local planning
          outcomes for clients nationally. The excitement for us come from
          working with clients, and project partners to find the clear line of
          sight between the opportunity and the outcome.
        </p>
      </div>
    </DesignContent>
  );
};

export const DesignContent = styled.div`
  transform: translateY(-2.5rem);
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 300px;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 3rem;
  color: #fff;
  justify-content: space-between;

  h3 {
    font-size: 36px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;
