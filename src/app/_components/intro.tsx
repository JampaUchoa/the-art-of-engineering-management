
export function Intro() {
  return (
    <div className="home-page">
      <picture>
        {/* <source media="(prefers-color-scheme: dark)" srcSet="https://github.com/user-attachments/assets/f521777e-98b9-46cf-90a0-f6528da20cc3" />
        <source media="(prefers-color-scheme: light)" srcSet="https://github.com/user-attachments/assets/dcdcb977-25b9-4cee-98c6-5a461a4e7158" /> */}
        <img src="https://github.com/user-attachments/assets/be896e4d-3afa-4e85-af72-da7da8edb838" />
      </picture>
      <div className="intro-text">
        <h1>The Art of Engineering Management</h1>
        <p>
          A book about the engineering manager's journey to mastering the craft
        </p>
        <p>
        This book serves as a guide for engineering managers to refine their skills and supports senior engineers transitioning into management roles. You'll find practical advice drawn from real-world experiences that shows how the EM role varies significantly across different companies and team structures.
        </p>
        <p>
        We'll explore the engineering manager's journey from deciding to step into leadership to mastering the craft. By the end, you'll understand essential management concepts and gain tools to excel in your role.
        </p>
      </div>
    </div>
  );
}
