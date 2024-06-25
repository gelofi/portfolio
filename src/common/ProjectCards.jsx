function ProjectCards({ proj, desc, src, link, alt, h3, p }) {
  return (
    <a href={link} target='_blank'>
          <img className='hover' src={src} alt={alt}></img>
          <h3 className={h3}>{proj}</h3>
          <p className={p}>{desc}</p>
        </a>
  )
}

export default ProjectCards