import { useEffect } from "react";
import Slider from './components/Slider';
import TrendingNews from '../../components/TrendingNews';
import BlogForm from '../Blog/components/BlogForm';
import Comments from '../Blog/components/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlog } from "../../store/Blog";
import moment from "moment";
import { ShareSocial } from 'react-share-social'

function SingleBlog() {
  const dispatch = useDispatch()
  const article = useSelector((state) => state.blog?.articles);
  const user = useSelector((state) => state.auth?.user);
  const queryId = window.location.pathname.slice(6);
  useEffect(() => {
    dispatch(getSingleBlog(queryId))
  }, [])

  const SocialMedia = () => {
    return <ShareSocial
      socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
    />
  }
  return (
    <div className='container-fluid py-5 single-blog'>
      <div className="header-single-blog py-md-5">
        <h1 className="title text-capitalize">
          {article?.title}
        </h1>
        <div className="info row m-0 py-3 align-items-center">
          <div className="col-md-8 p-0   ">
            <div className="row m-0">
              <div className="col-6 p-0 posted ">
                <span> Posted By:</span> <b> {article?.user?.role}</b>
              </div>
              <div className="col-6 ">
                {moment(article?.created_at).format("DD/MM/YYYY hh:mm a")}
                {/* 08/08/2022 09:28 am */}
              </div>
            </div>
          </div>
          <div className="col-md-4 text-right">
            Share via:
            <SocialMedia />
          </div>
        </div>
      </div>
      <Slider article={article} />
      <p className='blogText'>
        {article?.body}
      </p>
      <div >
        Share via:
        <SocialMedia />

      </div>
      <div className="commentBlog">
        <BlogForm user={user} article_id={article?.id} />
        {
          article?.comments?.map((item, key) =>
            < Comments user={user} item={item} key={key} />
          )}
      </div>
      <TrendingNews />
    </div>
  )
}

export default SingleBlog
