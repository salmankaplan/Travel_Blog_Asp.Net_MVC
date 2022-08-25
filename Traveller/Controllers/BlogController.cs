using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Traveller.BlogModel;
using Traveller.Models;

namespace Traveller.Controllers
{
    public class BlogController : Controller
    {
        List<int> comlist = new List<int>();
        DataContext db = new DataContext();
        // GET: Blog
        public ActionResult Index()
        {
            TravelModel travel = new TravelModel();
            travel.Place = db.Place.Where(x => x.State == true).ToList();
            return View(travel);
        }
        [HttpGet]
        public ActionResult Detail(int id)
        {
            TravelModel model = new TravelModel();
            model.OnePlace = db.Place.Where(x => x.Id == id && x.State == true).FirstOrDefault();
            if (model.OnePlace != null)
            {
                model.comment = db.Comment.Where(x => x.PlaceId == id && x.State == true).ToList();
                model.Image = db.Image.Where(x => x.PlaceId == id && x.State == true).ToList();
                return View(model);
            }
            return RedirectToAction("index");
        }
        [HttpPost]
        public ActionResult Detail(Comment comment)
        {
            db.Comment.Add(comment);
            Place place = db.Place.Find(comment.PlaceId);
            double average;
            var cimbom = db.Comment.Where(x => x.PlaceId == comment.PlaceId).ToList();
            foreach (var item in cimbom)
            {
                comlist.Add(item.Rate);
            }
            average = Math.Ceiling(comlist.Average()) ;
            place.AvRate = average;
            db.SaveChanges();
            return Redirect("~/Blog/detail/" + comment.PlaceId);

        }
        [HttpGet]
        public ActionResult Add()
        {
            Place place = new Place();
            return View(place);
        }
        [HttpPost]
        public ActionResult Add(Place blog, HttpPostedFileBase Image)
        {
            Place newblog = new Place();
            string imagePath = "";
            string imageName = "";
            try
            {
                if (Image != null && Image.ContentLength > 0)
                {
                    imageName = Guid.NewGuid().ToString().Substring(0, 4) + "-" + Path.GetFileName(Image.FileName);
                    imagePath = Path.Combine(Server.MapPath("~/Content/images"), imageName);
                    Image.SaveAs(imagePath);

                    blog.Image = imageName;
                }
                newblog.Title = blog.Title;
                newblog.Date = blog.Date;
                newblog.State = blog.State;
                newblog.Description = blog.Description;
                newblog.Image = blog.Image;
                db.Place.Add(newblog);
                db.SaveChanges();
                return RedirectToAction("Add");

            }
            catch
            {
                ViewBag.mesaj = "Beklenmedik Bir Hata Oluştu";
            }
            return RedirectToAction("Add");

        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            TravelModel model = new TravelModel();
            model.OnePlace = db.Place.Find(id);
            model.Image = db.Image.Where(x => x.PlaceId == id && x.State == true).ToList();
            return View(model);

        }
        [HttpPost]
        public ActionResult Edit(Place place, HttpPostedFileBase Image)
        {
            var editblog = db.Place.Find(place.Id);


            string imagePath = "";
            string imageName = "";

            try
            {
                if (Image != null && Image.ContentLength > 0)
                {
                    imageName = Guid.NewGuid().ToString().Substring(0, 4) + "-" + Path.GetFileName(Image.FileName);
                    imagePath = Path.Combine(Server.MapPath("~/Content/images"), imageName);
                    Image.SaveAs(imagePath);
                    editblog.Image = imageName;
                }
                editblog.Title = place.Title;
                editblog.Date = place.Date;
                editblog.Description = place.Description;
                editblog.State = place.State;
                db.SaveChanges();
                return Redirect("~/Blog/Detail?id=" + place.Id);
            }
            catch { }

            return View();
        }
        [HttpPost]
        public ActionResult BlogImageAdd(Image img, HttpPostedFileBase Title)
        {
            Image newimage = new Image();
            string imagePath = "";
            string imageName = "";
            try
            {
                if (Title != null && Title.ContentLength > 0)
                {
                    imageName = Guid.NewGuid().ToString().Substring(0, 4) + "-" + Path.GetFileName(Title.FileName);
                    imagePath = Path.Combine(Server.MapPath("~/Content/images"), imageName);
                    Title.SaveAs(imagePath);
                    newimage.Title = imageName;
                    newimage.PlaceId = img.PlaceId;
                    newimage.State = img.State;

                    db.Image.Add(newimage);
                    db.SaveChanges();
                }
            }
            catch { }
            return Redirect("~/Blog/Edit?id=" + img.PlaceId);
        }
        public ActionResult BlogImageDelete(int id)
        {
            var image = db.Image.Find(id);
            int placeId = image.PlaceId;
            image.State = false;
            db.SaveChanges();
            return Redirect("~/Blog/Edit?id=" + placeId);
        }
        public ActionResult Delete(int id)
        {
            var place = db.Place.Find(id);
            place.State = false;
            db.SaveChanges();
            return RedirectToAction("index");
        }
    }
}