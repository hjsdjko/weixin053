package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.GenghuanzuoweiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.GenghuanzuoweiView;


/**
 * 更换座位
 *
 * @author 
 * @email 
 * @date 2024-03-13 14:51:25
 */
public interface GenghuanzuoweiService extends IService<GenghuanzuoweiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<GenghuanzuoweiView> selectListView(Wrapper<GenghuanzuoweiEntity> wrapper);
   	
   	GenghuanzuoweiView selectView(@Param("ew") Wrapper<GenghuanzuoweiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<GenghuanzuoweiEntity> wrapper);
   	

}

