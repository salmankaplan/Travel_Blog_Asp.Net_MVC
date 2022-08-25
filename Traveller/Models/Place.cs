using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Traveller.Models
{
    public class Place
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public List<Image> Images { get; set; }
        public bool State { get; set; }
        public List<Comment> Comment { get; set; }
        public double AvRate { get; set; }
    }
}