
    using System.ComponentModel.DataAnnotations;

    namespace QuestionService.DTOs;

    public record CreateQuestionDto(
        [Required]string Title, 
        [Required]string Content, 
      List<string> Tags);

