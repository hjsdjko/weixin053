package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ChongzhixinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongzhixinxiView;


/**
 * 充值信息
 *
 * @author 
 * @email 
 * @date 2024-03-13 14:51:26
 */
public interface ChongzhixinxiService extends IService<ChongzhixinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChongzhixinxiView> selectListView(Wrapper<ChongzhixinxiEntity> wrapper);
   	
   	ChongzhixinxiView selectView(@Param("ew") Wrapper<ChongzhixinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChongzhixinxiEntity> wrapper);
   	

}

